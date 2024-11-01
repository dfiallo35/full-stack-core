import inject
from typing import List
from typing import Annotated
from fastapi import Query
from fastapi import status
from fastapi import Response
from fastapi import Depends
from fastapi.routing import APIRouter
from fastapi.security import OAuth2PasswordRequestForm

from core.core_auth.presentation.auth import create_access_token
from core.core_auth.presentation.auth import Auth
from core.core_auth.presentation.hashing import hash_password
from core.core_auth.presentation.hashing import verify_password
from galery_api.presentation.serializers import ArtworkInput
from galery_api.presentation.serializers import ArtworkUpdate
from galery_api.presentation.serializers import ArtworkOutput
from galery_api.presentation.serializers import UserInput
from galery_api.domain.mappers import ArtworkMapper
from galery_api.domain.mappers import UserMapper
from galery_api.domain.filters import ArtworkFilter
from galery_api.domain.filters import UserFilter
from galery_api.application.services import IArtworkService
from galery_api.application.services import IUserService


router = APIRouter()


@router.get("/health")
async def health():
    return {"status": "ok"}


@router.post(
    "/artwork",
    responses={
        status.HTTP_201_CREATED: {"model": ArtworkOutput},
    }
)
async def create_artwork(auth: Auth, artwork: ArtworkInput):
    service: IArtworkService = inject.instance(IArtworkService)
    mapper = ArtworkMapper()
    artwork_entity = await mapper.api_to_entity(artwork)
    artwork_entity = await service.create(artwork_entity)
    return await mapper.entity_to_api(artwork_entity)


@router.get(
    "/artwork",
    responses={
        status.HTTP_200_OK: {"model": List[ArtworkOutput]},
    }
)
async def list_artwork(filter_query: Annotated[ArtworkFilter, Query()]):
    service: IArtworkService = inject.instance(IArtworkService)
    mapper = ArtworkMapper()
    artworks = await service.list(filter_query=filter_query)
    return [await mapper.entity_to_api(artwork) for artwork in artworks]


@router.get(
    "/artwork/{id}",
    responses={
        status.HTTP_200_OK: {"model": ArtworkOutput},
        status.HTTP_404_NOT_FOUND: {}
    }
)
async def get_artwork(id: str, response: Response):
    service: IArtworkService = inject.instance(IArtworkService)
    mapper = ArtworkMapper()
    artwork = await service.get(id)
    if not artwork:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"details": f"Artwork with id \"{id}\" not found"}
    return await mapper.entity_to_api(artwork)


@router.patch(
    "/artwork/{id}",
    responses={
        status.HTTP_200_OK: {"model": ArtworkOutput},
    }
)
async def update_artwork(auth: Auth, id: str, artwork: ArtworkUpdate):
    service: IArtworkService = inject.instance(IArtworkService)
    mapper = ArtworkMapper()
    changes = await mapper.model_dump(artwork)
    artwork_entity = await service.update(id, changes)
    return await mapper.entity_to_api(artwork_entity)


@router.delete(
    "/artwork/{id}",
    responses={
        status.HTTP_200_OK: {"model": None},
    }
)
async def delete_artwork(auth: Auth, id: str, response: Response):
    service: IArtworkService = inject.instance(IArtworkService)
    result = await service.delete(id)
    if not result:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"details": f"Artwork with id \"{id}\" not found"}
    response.status_code = status.HTTP_204_NO_CONTENT


# Authentication

@router.post(
    "/login",
    responses={
        status.HTTP_200_OK: {"model": None},
    }
)
async def login(auth: Annotated[OAuth2PasswordRequestForm, Depends()]):
    service: IUserService = inject.instance(IUserService)
    hashed_password = hash_password(auth.password)
    mapper = UserMapper()

    user = await service.list(UserFilter(username=auth.username))
    if not user or not verify_password(auth.password, user[0].hashed_password):
        return {"details": "Incorrect username or password"}

    user = await mapper.api_to_entity(user[0], hashed_password=hashed_password)

    access_token = create_access_token(data={"sub": user.username})
    return {"access_token": access_token, "token_type": "bearer"}


@router.post(
    "/signup",
    responses={
        status.HTTP_200_OK: {"model": None},
    }
)
async def signup(user_in: UserInput):
    service: IUserService = inject.instance(IUserService)
    hashed_password = hash_password(user_in.password)
    mapper = UserMapper()

    user = await service.list(UserFilter(username=user_in.username))
    if user:
        return {"details": "User already exists"}
    
    user = await mapper.api_to_entity(user_in, hashed_password)
    await service.create(user)
    return {"details": "User created"}

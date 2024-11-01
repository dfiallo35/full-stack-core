from galery_api.domain.models import Artwork
from galery_api.presentation.serializers import ArtworkInput
from galery_api.presentation.serializers import ArtworkUpdate
from galery_api.presentation.serializers import ArtworkOutput
from galery_api.domain.models import User
from galery_api.presentation.serializers import UserInput

from core.core_base.domain.mappers import IBaseMapper


class ArtworkMapper(IBaseMapper):
    async def api_to_entity(self, artwork_input: ArtworkInput) -> Artwork:
        return Artwork(
            title=artwork_input.title,
            description=artwork_input.description
        )

    async def entity_to_api(self, artwork: Artwork) -> ArtworkOutput:
        return ArtworkOutput(
            id=artwork.id,
            title=artwork.title,
            description=artwork.description
        )

    async def model_dump(self, artwork_update: ArtworkUpdate) -> dict:
        return artwork_update.model_dump(exclude_none=True)


class UserMapper(IBaseMapper):
    async def api_to_entity(self, user_input: UserInput, hashed_password: str) -> User:
        return User(
            username=user_input.username,
            hashed_password=hashed_password
        )

    async def entity_to_api(self):
        return NotImplementedError()

    async def model_dump(self):
        return NotImplementedError()

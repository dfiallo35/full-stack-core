from galery_api.application.services import IArtworkService
from galery_api.application.services import ArtworkService
from galery_api.application.services import IUserService
from galery_api.application.services import UserService
from galery_api.infrastructure.postgres.repositories import IArtworkRepository
from galery_api.infrastructure.postgres.repositories import IUserRepository
from galery_api.infrastructure.postgres.repositories import ArtworkRepository
from galery_api.infrastructure.postgres.repositories import UserRepository

from core.settings import Settings


DEPENDENCIES = {
    IArtworkRepository: ArtworkRepository,
    IArtworkService: ArtworkService,
    IUserRepository: UserRepository,
    IUserService: UserService,
}

settings = Settings(DEPENDENCIES=DEPENDENCIES)

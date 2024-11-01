import inject

from galery_api.infrastructure.postgres.tables import ArtworkTable
from galery_api.infrastructure.postgres.tables import UserTable
from galery_api.infrastructure.postgres.mappers import ArtworkFilterMapper
from galery_api.infrastructure.postgres.mappers import UserFilterMapper

from core.infrastructure.postgres.repositories import CreateRepository
from core.infrastructure.postgres.repositories import UpdateRepository
from core.infrastructure.postgres.repositories import ListRepository
from core.infrastructure.postgres.repositories import GetRepository
from core.infrastructure.postgres.repositories import DeleteRepository
from core.infrastructure.postgres.mappers import IBaseFilterMapper


class IArtworkRepository(
    CreateRepository,
    UpdateRepository,
    ListRepository,
    GetRepository,
    DeleteRepository
):
    table_class = ArtworkTable
    filter_mapper: IBaseFilterMapper = inject.attr(ArtworkFilterMapper)


class ArtworkRepository(IArtworkRepository):
    pass


class IUserRepository(
    CreateRepository,
    UpdateRepository,
    ListRepository,
    GetRepository,
    DeleteRepository
):
    table_class = UserTable
    filter_mapper: IBaseFilterMapper = inject.attr(UserFilterMapper)


class UserRepository(IUserRepository):
    pass

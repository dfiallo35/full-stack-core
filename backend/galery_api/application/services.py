import inject
from galery_api.infrastructure.postgres.repositories import ArtworkRepository
from galery_api.infrastructure.postgres.repositories import UserRepository
from galery_api.infrastructure.postgres.mappers import ArtworkMapper
from galery_api.infrastructure.postgres.mappers import UserMapper

from core.core_base.application.services import CreateService
from core.core_base.application.services import UpdateService
from core.core_base.application.services import ListService
from core.core_base.application.services import DeleteService
from core.core_base.application.services import GetService
from core.core_postgres.infrastructure.postgres.repositories import IBaseRepository
from core.core_base.infrastructure.mappers import IBaseMapper


class IArtworkService(
    CreateService,
    UpdateService,
    ListService,
    DeleteService,
    GetService
):
    repository: IBaseRepository = inject.attr(ArtworkRepository)
    mapper: IBaseMapper = inject.attr(ArtworkMapper)


class ArtworkService(IArtworkService):
    pass


class IUserService(
    CreateService,
    UpdateService,
    ListService,
    DeleteService,
    GetService
):
    repository: IBaseRepository = inject.attr(UserRepository)
    mapper: IBaseMapper = inject.attr(UserMapper)


class UserService(IUserService):
    pass

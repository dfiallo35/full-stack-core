from galery_api.domain.models import Artwork
from galery_api.domain.models import User
from galery_api.domain.filters import ArtworkFilter
from galery_api.domain.filters import UserFilter
from galery_api.infrastructure.postgres.tables import ArtworkTable
from galery_api.infrastructure.postgres.tables import UserTable

from core.infrastructure.postgres.mappers import IBaseMapper
from core.infrastructure.postgres.mappers import IBaseFilterMapper


class ArtworkMapper(IBaseMapper):
    async def entity_to_table(self, artwork: Artwork) -> ArtworkTable:
        return ArtworkTable(
            id=artwork.id,
            title=artwork.title,
            description=artwork.description
        )
    
    async def table_to_entity(self, artwork_table: ArtworkTable) -> Artwork:
        return Artwork(
            id=str(artwork_table.id),
            title=artwork_table.title,
            description=artwork_table.description
        )


class ArtworkFilterMapper(IBaseFilterMapper):
    async def filter_to_conditions(self, filter_query: ArtworkFilter) -> list:
        conditions = []
        if filter_query.entity_ids:
            conditions.append(ArtworkTable.id.in_(filter_query.entity_ids))
        
        if filter_query.keyword:
            conditions.append(ArtworkTable.title.ilike(f"%{filter_query.keyword}%"))
        
        return conditions


class UserMapper(IBaseMapper):
    async def entity_to_table(self, user: User) -> UserTable:
        return UserTable(
            username=user.username,
            hashed_password=user.hashed_password
        )
    
    async def table_to_entity(self, user_table: UserTable) -> User:
        return User(
            username=user_table.username,
            hashed_password=user_table.hashed_password
        )


class UserFilterMapper(IBaseFilterMapper):
    async def filter_to_conditions(self, filter_query: UserFilter) -> list:
        conditions = []
        if filter_query.entity_ids:
            conditions.append(UserTable.username.in_(filter_query.entity_ids))
        
        if filter_query.username:
            conditions.append(UserTable.username.ilike(f"%{filter_query.username}%"))
        
        if filter_query.hashed_password:
            conditions.append(UserTable.hashed_password.ilike(f"%{filter_query.hashed_password}%"))
        
        return conditions

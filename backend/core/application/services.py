from abc import ABC
from abc import abstractmethod
from typing import List
from typing import Dict

from core.domain.models import BaseEntity
from core.domain.filters import IBaseFilter
from core.infrastructure.postgres.mappers import IBaseMapper
from core.infrastructure.postgres.repositories import IBaseRepository


class IBaseService(ABC):
    repository: IBaseRepository = None
    mapper: IBaseMapper = None


class ICreateService(IBaseService):
    @abstractmethod
    async def create(self):
        raise NotImplementedError()


class IListService(IBaseService):
    @abstractmethod
    async def list(self):
        raise NotImplementedError()


class IDeleteService(IBaseService):
    @abstractmethod
    async def delete(self):
        raise NotImplementedError()


class IUpdateService(IBaseService):
    @abstractmethod
    async def update(self):
        raise NotImplementedError()


class IPaginateService(IBaseService):
    @abstractmethod
    async def paginate(self):
        raise NotImplementedError()


class IGetService(IBaseService):
    @abstractmethod
    async def get(self):
        raise NotImplementedError()


class CreateService(ICreateService):
    async def create(self, entity: BaseEntity) -> BaseEntity:
        entity_table = await self.mapper.entity_to_table(entity)
        result = await self.repository.create(entity_table)
        return await self.mapper.table_to_entity(result)


class ListService(IListService):
    async def list(self, filter_query: IBaseFilter) -> List[BaseEntity]:
        results = await self.repository.list(filter_query=filter_query)
        return [await self.mapper.table_to_entity(item) for item in results]


class DeleteService(IDeleteService):
    async def delete(self, id: str) -> None:
        result = await self.repository.delete(id)
        return result


class UpdateService(IUpdateService):
    # TODO: Implement update method
    async def update(self, id: str, changes: Dict) -> BaseEntity:
        result = await self.repository.update(id, changes)
        return await self.mapper.table_to_entity(result)

class PaginateService(IPaginateService):
    # TODO: Implement paginate method
    async def paginate(self):
        raise NotImplementedError()


class GetService(IGetService):
    async def get(self, id: str) -> BaseEntity | None:
        result = await self.repository.get(id)
        if result:
            return await self.mapper.table_to_entity(result)
        return None

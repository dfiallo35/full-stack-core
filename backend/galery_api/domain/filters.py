from typing import Optional
from typing import List

from core.core_base.domain.filters import IPaginationBaseFilter


class ArtworkFilter(IPaginationBaseFilter):
    entity_ids: Optional[List[str]] = None
    keyword: Optional[str] = None


class UserFilter(IPaginationBaseFilter):
    entity_ids: Optional[List[str]] = None
    username: Optional[str] = None
    hashed_password: Optional[str] = None

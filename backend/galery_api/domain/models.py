from core.core_base.domain.models import BaseEntity


class Artwork(BaseEntity):
    title: str
    description: str


class User(BaseEntity):
    username: str
    hashed_password: str

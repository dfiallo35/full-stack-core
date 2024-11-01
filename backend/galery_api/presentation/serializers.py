from typing import Optional

from core.domain.models import BaseEntity


class ArtworkInput(BaseEntity):
    title: str
    description: str


class ArtworkOutput(BaseEntity):
    id: str
    title: str
    description: str


class ArtworkUpdate(BaseEntity):
    title: Optional[str] = None
    description: Optional[str] = None


class UserInput(BaseEntity):
    username: str
    password: str

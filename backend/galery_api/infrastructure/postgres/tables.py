from sqlalchemy import Column
from sqlalchemy import String

from core.infrastructure.postgres.tables import BaseTable


class ArtworkTable(BaseTable):
    __tablename__ = "artworks"
    title: str = Column(String(100))
    description: str = Column(String(500))


class UserTable(BaseTable):
    __tablename__ = "users"
    username = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)

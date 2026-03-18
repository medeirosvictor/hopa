from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Table
from sqlalchemy.orm import relationship
from datetime import datetime

from app.db.base import Base


outfit_clothing = Table(
    "outfit_clothing",
    Base.metadata,
    Column("outfit_id", Integer, ForeignKey("outfits.id")),
    Column("clothing_id", Integer, ForeignKey("clothing.id")),
)


class Outfit(Base):
    __tablename__ = "outfits"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String)
    times_worn = Column(Integer, default=0)
    last_worn = Column(DateTime)
    created_at = Column(DateTime, default=datetime.utcnow)
    user_id = Column(Integer, ForeignKey("users.id"))

    user = relationship("User", back_populates="outfits")
    items = relationship("Clothing", secondary=outfit_clothing, back_populates="outfits")

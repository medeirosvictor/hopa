from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Enum, Float
from sqlalchemy.orm import relationship
from datetime import datetime
import enum

from app.db.base import Base


class ClothingCategory(str, enum.Enum):
    TOPS = "tops"
    BOTTOMS = "bottoms"
    SHOES = "shoes"
    ACCESSORIES = "accessories"
    OUTERWEAR = "outerwear"


class Clothing(Base):
    __tablename__ = "clothing"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    category = Column(Enum(ClothingCategory), nullable=False)
    color = Column(String)
    brand = Column(String)
    material = Column(String)
    image_path = Column(String)
    times_worn = Column(Integer, default=0)
    last_worn = Column(DateTime)
    created_at = Column(DateTime, default=datetime.utcnow)
    user_id = Column(Integer, ForeignKey("users.id"))

    user = relationship("User", back_populates="clothing_items")
    outfits = relationship("Outfit", secondary="outfit_clothing", back_populates="items")

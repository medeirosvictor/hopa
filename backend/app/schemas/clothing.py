from pydantic import BaseModel
from datetime import datetime
from typing import Optional
from enum import Enum


class ClothingCategory(str, Enum):
    TOPS = "tops"
    BOTTOMS = "bottoms"
    SHOES = "shoes"
    ACCESSORIES = "accessories"
    OUTERWEAR = "outerwear"


class ClothingBase(BaseModel):
    name: str
    category: ClothingCategory
    color: Optional[str] = None
    brand: Optional[str] = None
    material: Optional[str] = None
    image_path: Optional[str] = None


class ClothingCreate(ClothingBase):
    pass


class ClothingResponse(ClothingBase):
    id: int
    times_worn: int
    last_worn: Optional[datetime] = None
    created_at: datetime
    user_id: int

    class Config:
        from_attributes = True

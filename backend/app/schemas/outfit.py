from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List

from app.schemas.clothing import ClothingResponse


class OutfitBase(BaseModel):
    name: str
    description: Optional[str] = None


class OutfitCreate(OutfitBase):
    clothing_ids: List[int] = []


class OutfitResponse(OutfitBase):
    id: int
    times_worn: int
    last_worn: Optional[datetime] = None
    created_at: datetime
    user_id: int
    items: List[ClothingResponse] = []

    class Config:
        from_attributes = True

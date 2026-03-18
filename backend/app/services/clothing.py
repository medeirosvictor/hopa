from sqlalchemy.orm import Session
from typing import List, Optional

from app.models.clothing import Clothing
from app.schemas.clothing import ClothingCreate


def get_clothing_items(db: Session, skip: int = 0, limit: int = 100) -> List[Clothing]:
    return db.query(Clothing).offset(skip).limit(limit).all()


def get_clothing_item(db: Session, item_id: int) -> Optional[Clothing]:
    return db.query(Clothing).filter(Clothing.id == item_id).first()


def create_clothing_item(db: Session, item: ClothingCreate) -> Clothing:
    db_item = Clothing(**item.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


def delete_clothing_item(db: Session, item_id: int) -> None:
    db_item = db.query(Clothing).filter(Clothing.id == item_id).first()
    if db_item:
        db.delete(db_item)
        db.commit()

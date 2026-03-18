from sqlalchemy.orm import Session
from typing import List, Optional

from app.models.outfit import Outfit
from app.models.clothing import Clothing
from app.schemas.outfit import OutfitCreate


def get_outfits(db: Session, skip: int = 0, limit: int = 100) -> List[Outfit]:
    return db.query(Outfit).offset(skip).limit(limit).all()


def get_outfit(db: Session, outfit_id: int) -> Optional[Outfit]:
    return db.query(Outfit).filter(Outfit.id == outfit_id).first()


def create_outfit(db: Session, outfit: OutfitCreate) -> Outfit:
    clothing_items = db.query(Clothing).filter(Clothing.id.in_(outfit.clothing_ids)).all()
    db_outfit = Outfit(
        name=outfit.name,
        description=outfit.description,
        items=clothing_items
    )
    db.add(db_outfit)
    db.commit()
    db.refresh(db_outfit)
    return db_outfit


def delete_outfit(db: Session, outfit_id: int) -> None:
    db_outfit = db.query(Outfit).filter(Outfit.id == outfit_id).first()
    if db_outfit:
        db.delete(db_outfit)
        db.commit()

from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.base import get_db
from app.schemas.clothing import ClothingCreate, ClothingResponse
from app.services import clothing as clothing_service

router = APIRouter()


@router.get("/", response_model=List[ClothingResponse])
def get_clothing_items(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    return clothing_service.get_clothing_items(db, skip=skip, limit=limit)


@router.post("/", response_model=ClothingResponse)
def create_clothing_item(item: ClothingCreate, db: Session = Depends(get_db)):
    return clothing_service.create_clothing_item(db, item)


@router.get("/{item_id}", response_model=ClothingResponse)
def get_clothing_item(item_id: int, db: Session = Depends(get_db)):
    item = clothing_service.get_clothing_item(db, item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Clothing item not found")
    return item


@router.delete("/{item_id}")
def delete_clothing_item(item_id: int, db: Session = Depends(get_db)):
    clothing_service.delete_clothing_item(db, item_id)
    return {"message": "Item deleted"}

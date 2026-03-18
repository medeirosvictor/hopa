from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.base import get_db
from app.schemas.outfit import OutfitCreate, OutfitResponse
from app.services import outfit as outfit_service

router = APIRouter()


@router.get("/", response_model=List[OutfitResponse])
def get_outfits(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    return outfit_service.get_outfits(db, skip=skip, limit=limit)


@router.post("/", response_model=OutfitResponse)
def create_outfit(outfit: OutfitCreate, db: Session = Depends(get_db)):
    return outfit_service.create_outfit(db, outfit)


@router.get("/{outfit_id}", response_model=OutfitResponse)
def get_outfit(outfit_id: int, db: Session = Depends(get_db)):
    outfit = outfit_service.get_outfit(db, outfit_id)
    if not outfit:
        raise HTTPException(status_code=404, detail="Outfit not found")
    return outfit


@router.delete("/{outfit_id}")
def delete_outfit(outfit_id: int, db: Session = Depends(get_db)):
    outfit_service.delete_outfit(db, outfit_id)
    return {"message": "Outfit deleted"}

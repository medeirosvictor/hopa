from fastapi import APIRouter

from app.api.v1.endpoints import clothing, outfits, users

api_router = APIRouter()

api_router.include_router(clothing.router, prefix="/clothing", tags=["clothing"])
api_router.include_router(outfits.router, prefix="/outfits", tags=["outfits"])
api_router.include_router(users.router, prefix="/users", tags=["users"])

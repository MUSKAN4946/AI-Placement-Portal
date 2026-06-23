from fastapi import FastAPI

from app.core.database import engine, Base

from app.models.user import User

from app.routes.auth import router


Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(router)


@app.get("/")
def home():
    return {
        "message": "AI Placement Portal Running Successfully"
    }
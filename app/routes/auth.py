from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.schemas.user_schema import (
    UserCreate,
    UserLogin
)

from app.models.user import User

from app.core.deps import get_db

from app.core.security import (
    hash_password,
    verify_password
)

from app.core.jwt_handler import (
    create_access_token
)

router = APIRouter()


@router.post("/register")
def create_user(
    user: UserCreate,
    db: Session = Depends(get_db)
):

    new_user = User(
        name=user.name,
        email=user.email,
        password=hash_password(
            user.password
        )
    )

    db.add(new_user)

    db.commit()

    db.refresh(new_user)

    return {
        "message": "User Registered Successfully"
    }


@router.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    existing_user = (
        db.query(User)
        .filter(
            User.email == user.email
        )
        .first()
    )
    
    if not existing_user:

        raise HTTPException(
        status_code=404,
        detail="User Not Found"
    )

    if not verify_password(
    user.password,
    existing_user.password
):

        raise HTTPException(
        status_code=401,
        detail="Invalid Password"
    )

    token = create_access_token(
        {
            "email": existing_user.email
        }
    )

    return {
        "message": "Login Successful",
        "access_token": token
    }

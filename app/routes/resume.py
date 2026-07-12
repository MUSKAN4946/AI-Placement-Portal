from fastapi import APIRouter, UploadFile, File
import shutil

router = APIRouter()


@router.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):

    file_path = f"uploads/{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "message": "Resume Uploaded Successfully",
        "filename": file.filename
    }

@router.get("/analyze-resume")
async def analyze_resume():

    return {
        "score": 85,
        "skills": [
            "Python",
            "FastAPI",
            "React"
        ],
        "missing_skills": [
            "Docker",
            "AWS",
            "Machine Learning"
        ]
    }
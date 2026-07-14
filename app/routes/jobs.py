from fastapi import APIRouter

router = APIRouter()


@router.get("/recommended-jobs")
def recommended_jobs():

    jobs = [

        {
            "title": "Python Developer",
            "company": "TCS",
            "location": "Indore"
        },

        {
            "title": "Backend Developer",
            "company": "Infosys",
            "location": "Bangalore"
        },

        {
            "title": "Software Engineer",
            "company": "Accenture",
            "location": "Hyderabad"
        },

        {
            "title": "AI/ML Intern",
            "company": "IBM",
            "location": "Remote"
        }

    ]

    return jobs
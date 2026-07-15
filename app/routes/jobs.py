from fastapi import APIRouter

router = APIRouter()


@router.get("/recommended-jobs")
def recommended_jobs():

    jobs = [

        {
            "title": "Python Developer",
            "company": "TCS",
            "location": "Indore",
            "salary": "₹6 LPA",
            "experience": "Fresher",
            "job_type": "Full Time",
            "skills": [
                "Python",
                "FastAPI",
                "MySQL"
            ],
            "apply_link": "https://www.tcs.com/careers",
        },

        {
            "title": "Backend Developer",
            "company": "Infosys",
            "location": "Bangalore",
            "salary": "₹7 LPA",
            "experience": "0-1 Years",
            "job_type": "Full Time",
            "skills": [
                "Python",
                "Git",
                "MongoDB"
            ],
            "apply_link": "https://career.infosys.com",
        },

        {
            "title": "Software Engineer",
            "company": "Accenture",
            "location": "Hyderabad",
            "salary": "₹5.5 LPA",
            "experience": "Fresher",
            "job_type": "Full Time",
            "skills": [
                "C++",
                "Python",
                "GitHub"
            ],
            "apply_link": "https://www.accenture.com/in-en/careers",
        },

        {
            "title": "AI/ML Intern",
            "company": "IBM",
            "location": "Remote",
            "salary": "₹35,000 / Month",
            "experience": "Intern",
            "job_type": "Internship",
            "skills": [
                "Python",
                "Machine Learning",
                "Git"
            ],
            "apply_link": "https://www.ibm.com/careers",
        }

    ]

    return jobs
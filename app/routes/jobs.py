from fastapi import APIRouter
import app.routes.resume as resume

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
                "MySQL",
                "Git",
                "GitHub",
                "Docker",
                "REST API",
                "Linux"
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
                "MongoDB",
                "Git",
                "Docker",
                "SQL",
                "REST API",
                "FastAPI",
                "AWS"
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
                "Python",
                "C++",
                "GitHub",
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Operating Systems"
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
                "Git",
                "Pandas",
                "NumPy",
                "Scikit-Learn",
                "SQL",
                "Statistics"
            ],
            "apply_link": "https://www.ibm.com/careers",
        }

    ]

    for job in jobs:

        matched_skills = []
        missing_skills = []

        for skill in job["skills"]:

            if skill in resume.resume_skills:

                matched_skills.append(skill)

            else:

                missing_skills.append(skill)

        ats_score = int(
            (len(matched_skills) / len(job["skills"])) * 100
        )

        job["matched_skills"] = matched_skills
        job["missing_skills"] = missing_skills
        job["match_percentage"] = ats_score
        job["ats_score"] = ats_score

    jobs.sort(
        key=lambda x: x["match_percentage"],
        reverse=True
    )

    return jobs
import { useState } from "react";
function InterviewQuestions() {

    const [openAnswer, setOpenAnswer] = useState(null);
    const questions = [

    {
        difficulty: "Easy",
        question: "Tell me about yourself.",
        answer:
            "Introduce yourself with your name, education, skills, projects, and career goal in about 1-2 minutes."
    },

    
    {
        difficulty: "Easy",
        question: "What is Python?",
        answer:
            "Python is a high-level, interpreted programming language used in web development, AI, automation, and data science."
    },

    {
        difficulty: "Easy",
        question: "Explain OOP concepts.",
        answer:
           " OOP stands for Object-Oriented Programming. It is based on Class, Object, Inheritance, Polymorphism, Encapsulation and Abstraction."
    },

    {
        difficulty: "Medium",
        question: "Difference between List and Tuple.",
        answer:
            "List is mutable and Tuple is immutable. Lists use [] while Tuples use ()."
    },

    {
        difficulty: "Medium",
        question: "What is FastAPI?",
         answer:
            "FastAPI is a modern Python web framework used to build high-performance REST APIs."
    },

    {
        difficulty: "Medium",
        question: "What is REST API?",
        answer:
            "REST API allows communication between client and server using HTTP methods like GET, POST, PUT and DELETE."
    },

    {
        difficulty: "Hard",
        question: "Explain SQLAlchemy.",
        answer:
            "SQLAlchemy is a Python ORM that allows interaction with databases using Python objects instead of writing SQL queries manually."

    },

    {
        difficulty: "Hard",
        question: "What is Git and GitHub?",
        answer:
            "Git is a version control system. GitHub is a cloud platform used to host Git repositories and collaborate with developers."
    },

    {
        difficulty: "Hard",
        question: "What is Docker?",
        answer:
            "Docker is a containerization platform that packages applications with all dependencies to run consistently on any system."
    },

    {
        difficulty: "Hard",
        question: "Why should we hire you?",
        answer:
            "I have strong Python, FastAPI, React and MySQL skills. I enjoy learning new technologies and solving real-world problems."
    }

];

    return (

        <div className="min-h-screen bg-gray-100 p-10">

            <div className="max-w-5xl mx-auto">

                <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">

                    🎤 AI Interview Preparation

                </h1>

                <p className="text-center text-gray-600 mb-8">
                    Practice the most frequently asked interview questions for Python Developer interviews.
                </p>

                <div className="bg-white shadow-xl rounded-xl p-8">

                    <h2 className="text-2xl font-bold mb-6">

                        Python Developer Interview Questions

                    </h2>

                    <div className="space-y-4">

                        {

                            questions.map((item, index) => (

    <div
        key={index}
        className="border rounded-lg p-4 hover:bg-gray-50"
    >

        <span
            className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                item.difficulty === "Easy"
                    ? "bg-green-500"
                    : item.difficulty === "Medium"
                    ? "bg-yellow-500"
                    : "bg-red-500"
            }`}
        >
            {item.difficulty}
        </span>

        <h3 className="font-semibold mt-3">

            Q{index + 1}. {item.question}

        </h3>

        <div className="mt-3">

    <button
        onClick={() =>
            setOpenAnswer(openAnswer === index ? null : index)
        }
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
    >
        {openAnswer === index ? "Hide Answer" : "Show Answer"}
    </button>

</div>

{
    openAnswer === index && (

        <div className="mt-4 bg-gray-100 p-4 rounded-lg">

            <p>{item.answer}</p>

        </div>

    )
}

    </div>


))

                        }

                    </div>

                </div>

            </div>

        </div>

    );

}

export default InterviewQuestions;
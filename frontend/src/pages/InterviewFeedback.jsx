function InterviewFeedback() {

    const score = 5;


let performance = "";
let strengths = [];
let improvements = [];
let recommendation = "";
let badge = "";

if (score === 5) {

    performance = "🏆 Excellent";
    badge = "🌟 Placement Ready";

    strengths = [
        "Excellent Python knowledge",
        "Strong OOP Concepts",
        "Good Problem Solving"
    ];

    improvements = [
        "Keep practicing advanced DSA",
        "Continue mock interviews"
    ];

    recommendation =
        "You are placement ready. Keep building projects and practicing interviews.";

}
else if (score >= 3) {

    performance = "👍 Good";
    badge = "🥈 Good Performer";

    strengths = [
        "Good Python knowledge",
        "Basic OOP understanding"
    ];

    improvements = [
        "Improve SQL",
        "Practice FastAPI",
        "Improve Communication"
    ];

    recommendation =
        "You have a good foundation. Practice more interviews and projects.";

}
else {

    performance = "📚 Needs Improvement";
    badge = "📘 Beginner";

    strengths = [
        "Good learning attitude"
    ];

    improvements = [
        "Revise Python",
        "Revise OOP",
        "Practice SQL",
        "Improve Communication"
    ];

    recommendation =
        "Focus on fundamentals before attending interviews.";

}



    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">

            <div className="bg-white shadow-xl rounded-xl p-10 w-[700px]">

                <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">

                    AI Interview Feedback

                </h1>

                <h2 className="text-2xl text-center font-bold text-blue-700 mb-8">

                    {performance}

                </h2>


                <div className="bg-purple-100 border border-purple-400 rounded-lg p-4 mb-6 text-center">

                <h2 className="text-xl font-bold text-purple-700">

                    🏅 Achievement Badge

                </h2>

                <p className="text-lg font-semibold mt-2">

                    {badge}

                </p>

            </div>

                <div className="bg-green-100 border border-green-400 rounded-lg p-5 mb-6">

                    <h2 className="text-2xl font-bold text-green-700 mb-3">

                        ✅ Strengths

                    </h2>

                    <ul className="list-disc ml-6 space-y-2">

                      {
                        strengths.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }

                    </ul>

                </div>

                <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-5 mb-6">

                    <h2 className="text-2xl font-bold text-yellow-700 mb-3">

                        📚 Areas to Improve

                    </h2>

                    <ul className="list-disc ml-6 space-y-2">

                        {
                            improvements.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }

                    </ul>

                </div>

                <div className="bg-blue-100 border border-blue-400 rounded-lg p-5">

                    <h2 className="text-2xl font-bold text-blue-700 mb-3">

                        🎯 Overall Recommendation

                    </h2>

                    <p>
                            {recommendation}


                    </p>

                </div>

            </div>

        </div>

    );

}

export default InterviewFeedback;
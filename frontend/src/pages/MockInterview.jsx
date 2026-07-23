import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function MockInterview() {

    const navigate = useNavigate();

    const questions = [

        "Tell me about yourself.",

        "What is Python?",

        "Explain OOP Concepts.",

        "What is FastAPI?",

        "Difference between List and Tuple?"

    ];

    const [started, setStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const [score, setScore] = useState(0);

    useEffect(() => {

    if (!started || completed) return;

    if (timeLeft === 0) {

        setCompleted(true);

        return;

    }

    const timer = setTimeout(() => {

        setTimeLeft(timeLeft - 1);

    }, 1000);

    return () => clearTimeout(timer);

}, [timeLeft, started, completed]);

 const startInterview = () => {

    setStarted(true);

    setCompleted(false);

    setCurrentQuestion(0);

    setTimeLeft(60);

    setScore(0);

};

    const nextQuestion = () => {

       if (currentQuestion < questions.length - 1) {

    setScore(score + 1);

    setCurrentQuestion(currentQuestion + 1);

}
else {

    setScore(score + 1);

    setCompleted(true);

}

    };

    const restartInterview = () => {

        setStarted(false);
        setCompleted(false);
        setCurrentQuestion(0);
        setTimeLeft(60);
        setScore(0);

    };

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">

            <div className="bg-white shadow-xl rounded-xl p-10 text-center w-[700px]">

              <h1 className="text-4xl font-bold text-purple-700 mb-6">

    🎤 AI Mock Interview

</h1>

<p className="text-center text-gray-600 mb-8">

    Practice interview questions and improve your confidence before real interviews.

</p>

                {
                    !started && (

                        <button
                            onClick={startInterview}
                            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                        >

                            Start Interview

                        </button>

                    )
                }

                {
                    started && !completed && (

                        <div className="mt-8">

                            <h2 className="text-2xl font-bold mb-4">

                                Question {currentQuestion + 1} / {questions.length}

                            </h2>

                            <p className="text-red-600 font-bold text-lg mb-4">

                                ⏱️ Time Left : {timeLeft} sec

                            </p>

                            <p className="text-sm text-gray-500 mb-4">
    Progress: {currentQuestion + 1} of {questions.length}
</p>

                            <p className="text-xl mb-6">

                                {questions[currentQuestion]}

                            </p>

                            <button
                                onClick={nextQuestion}
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                            >

                                {
                                    currentQuestion === questions.length - 1
                                        ? "Finish Interview"
                                        : "Next Question →"
                                }

                            </button>

                        </div>

                    )
                }

                {
                    started && completed && (

                        <div className="mt-8 bg-green-100 border border-green-400 rounded-xl p-8">

                            <h2 className="text-3xl font-bold text-green-700">

                                🎉 Interview Completed!

                            </h2>

                            <h3 className="text-2xl font-bold text-blue-700 mt-6">

                                ⭐ Your Score : {score} / {questions.length}

                            </h3>


                            <p className="text-xl font-semibold mt-4">

    {

        score === questions.length

            ? "🏆 Performance : Excellent"

            : score >= 3

            ? "👍 Performance : Good"

            : "📚 Performance : Needs Improvement"

    }

</p>







                         <p className="mt-4 text-lg text-gray-700">

    Thank you for completing the mock interview.
    Keep practicing regularly to improve your interview performance.

</p>

<button
    onClick={() => navigate("/interview-feedback")}
    className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 mr-4"
>
    View AI Feedback
</button>











                            <button
                                onClick={restartInterview}
                                className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
                            >

                                Restart Interview

                            </button>

                        </div>

                    )
                }

            </div>

        </div>

    );

}

export default MockInterview;
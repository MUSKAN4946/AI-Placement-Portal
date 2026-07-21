import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

    const navigate = useNavigate();
    const [totalJobs, setTotalJobs] = useState(0);

    const [savedJobs, setSavedJobs] = useState(0);

    const [atsScore, setAtsScore] = useState(0);

    const [bestMatch, setBestMatch] = useState(0);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            // Saved Jobs

            const saved = JSON.parse(
                localStorage.getItem("savedJobs")
            ) || [];

            setSavedJobs(saved.length);

            // Recommended Jobs

            const jobsResponse = await axios.get(
                "http://127.0.0.1:8000/recommended-jobs"
            );

            setTotalJobs(jobsResponse.data.length);

            if (jobsResponse.data.length > 0) {

                setBestMatch(
                    jobsResponse.data[0].match_percentage
                );

            }

            // Resume Analysis

            const resumeResponse = await axios.get(
                "http://127.0.0.1:8000/analyze-resume"
            );

            setAtsScore(
                resumeResponse.data.score
            );

        }

        catch (error) {

            console.log(error);

        }

    };





    const logout = () => {

        localStorage.removeItem("token");

        alert("Logged Out Successfully");

        navigate("/login");

    };

    return (

        <div className="min-h-screen bg-gray-100">

            <div className="bg-blue-600 text-white p-5 flex justify-between items-center">

                <h1 className="text-3xl font-bold">
                    AI Placement Portal
                </h1>

                <button
                    onClick={logout}
                    className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
                >
                    Logout
                </button>

            </div>

            <div className="max-w-5xl mx-auto p-8">

                <h2 className="text-3xl font-bold mb-8">
                    Welcome 👋
                </h2>

                <button
                    onClick={() => navigate("/resume-upload")}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 mb-4 mr-4"
                >
                    Resume Upload
                </button>

                <button
                    onClick={() => navigate("/job-recommendation")}
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
                >
                    Job Recommendation
                </button>

                <button
                    onClick={() => navigate("/saved-jobs")}
                    className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 ml-4"
                >
                     Saved Jobs
                </button>

                <button
                    onClick={() => navigate("/profile")}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 ml-4 mt-4"
                >
                     My Profile
                </button>

                <button
                    onClick={() => navigate("/mock-interview")}
                    className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 ml-4 mt-4"
                >
                    Mock Interview
                </button>




                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

                    <div className="bg-white shadow-lg rounded-xl p-6 text-center">

                        <h2 className="text-4xl">📄</h2>

                        <h3 className="text-3xl font-bold mt-2">

                            {totalJobs}

                        </h3>

                        <p className="text-gray-600 mt-2">

                            Total Jobs

                        </p>

                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 text-center">

                    <h2 className="text-4xl">❤️</h2>

                    <h3 className="text-3xl font-bold mt-2">

                        {savedJobs}

                    </h3>

                    <p className="text-gray-600 mt-2">

                        Saved Jobs

                    </p>

                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 text-center">

                    <h2 className="text-4xl">📈</h2>

                    <h3 className="text-3xl font-bold mt-2">

                        {atsScore}%

                    </h3>

                    <p className="text-gray-600 mt-2">

                        ATS Score

                    </p>

                 </div>

                <div className="bg-white shadow-lg rounded-xl p-6 text-center">

                    <h2 className="text-4xl">🎯</h2>

                    <h3 className="text-3xl font-bold mt-2">

                        {bestMatch}%

                    </h3>

                    <p className="text-gray-600 mt-2">

                        Best Match

                    </p>

                </div>

        </div>








        <div className="bg-white shadow-lg rounded-xl p-8 mt-10">

    <h2 className="text-2xl font-bold mb-6">
        📊 Resume Progress
    </h2>

    <div className="mb-6">

        <div className="flex justify-between mb-2">

            <span className="font-semibold">
                ATS Score
            </span>

            <span>
                {atsScore}%
            </span>

        </div>

        <div className="w-full bg-gray-300 rounded-full h-4">

            <div
                className="bg-green-500 h-4 rounded-full"
                style={{
                    width: `${atsScore}%`
                }}
            ></div>

        </div>

    </div>

    <div>

        <div className="flex justify-between mb-2">

            <span className="font-semibold">
                Best Match
            </span>

            <span>
                {bestMatch}%
            </span>

        </div>

        <div className="w-full bg-gray-300 rounded-full h-4">

            <div
                className="bg-purple-500 h-4 rounded-full"
                style={{
                    width: `${bestMatch}%`
                }}
            ></div>

        </div>

    </div>

</div>






            </div>

        </div>

    );

}

export default Dashboard;
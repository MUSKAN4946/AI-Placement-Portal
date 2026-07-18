import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

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


            </div>

        </div>

    );

}

export default Dashboard;
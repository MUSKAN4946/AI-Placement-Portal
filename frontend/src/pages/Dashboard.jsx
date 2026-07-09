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

                <h2 className="text-3xl font-bold mb-6">
                    Welcome 👋
                </h2>

                <div className="grid grid-cols-3 gap-6">

                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="text-lg font-semibold">
                            Resume Score
                        </h3>

                        <p className="text-4xl text-blue-600 font-bold mt-3">
                            85%
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="text-lg font-semibold">
                            Applied Jobs
                        </h3>

                        <p className="text-4xl text-green-600 font-bold mt-3">
                            12
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="text-lg font-semibold">
                            Interviews
                        </h3>

                        <p className="text-4xl text-purple-600 font-bold mt-3">
                            3
                        </p>
                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;
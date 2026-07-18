import { useEffect, useState } from "react";
import axios from "axios";

function JobRecommendation() {

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");
    const [jobType, setJobType] = useState("All");
    const [savedJobs, setSavedJobs] = useState(() => {

        const saved = localStorage.getItem("savedJobs");

        return saved ? JSON.parse(saved) : [];

    });

    useEffect(() => {

        getJobs();

    }, []);

    useEffect(() => {

        localStorage.setItem(

            "savedJobs",

                JSON.stringify(savedJobs)

        );

    }, [savedJobs]);


    const getJobs = async () => {

        try {

            const response = await axios.get(
                "http://127.0.0.1:8000/recommended-jobs"
            );

            setJobs(response.data);

        }

        catch (error) {

            alert("Failed To Load Jobs");

        }

    };

    const applyJob = (link) => {

        window.open(link, "_blank");

    };

    const saveJob = (job) => {

    const alreadySaved = savedJobs.find(

        (saved) => saved.company === job.company

    );

    if (alreadySaved) {

        alert("❤️ Job already saved!");

        return;

    }

    setSavedJobs([...savedJobs, job]);

    alert("✅ Job Saved Successfully!");

};


    return (

        <div className="min-h-screen bg-gray-100 p-10">

            <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
                Recommended Jobs
            </h1>

            <div className="mb-8">

                <input
                    type="text"
                    placeholder="Search Job, Company..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                />

            </div>

            <div className="mb-8">

                <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                >

                    <option>All</option>
                    <option>Full Time</option>
                    <option>Internship</option>

                </select>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

                {

                    jobs

                        .filter((job) => {

                            const matchesSearch =

                                job.title.toLowerCase().includes(search.toLowerCase()) ||

                                job.company.toLowerCase().includes(search.toLowerCase());

                            const matchesType =

                                jobType === "All" ||

                                job.job_type === jobType;

                            return matchesSearch && matchesType;

                        })

                        .map((job, index) => (

                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-xl p-6"
                            >

                                {

                                    index === 0 && (

                                        <div className="mb-3">

                                            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">

                                                🏆 BEST MATCH

                                            </span>

                                        </div>

                                    )

                                }

                                <img
                                    src={`/images/${job.company.toLowerCase()}.png`}
                                    alt={job.company}
                                    className="w-20 h-20 object-contain mb-4"
                                />

                                <h2 className="text-2xl font-bold">

                                    {job.title}

                                </h2>

                                <p className="mt-3">

                                    <strong>Company :</strong> {job.company}

                                </p>

                                <p>

                                    <strong>Location :</strong> {job.location}

                                </p>

                                <p>

                                    <strong>Salary :</strong> {job.salary}

                                </p>

                                <p>

                                    <strong>Experience :</strong> {job.experience}

                                </p>

                                <p>

                                    <strong>Job Type :</strong> {job.job_type}

                                </p>

                                <p
                                    className={`mt-3 font-bold ${
                                        job.match_percentage >= 80
                                            ? "text-green-600"
                                            : job.match_percentage >= 60
                                            ? "text-yellow-600"
                                            : "text-red-600"
                                    }`}
                                >

                                    🎯 Match : {job.match_percentage}%

                                </p>

                                <div className="w-full bg-gray-300 rounded-full h-4 mt-3">

                                    <div
                                        className={`h-4 rounded-full ${
                                            job.match_percentage >= 80
                                                ? "bg-green-500"
                                                : job.match_percentage >= 60
                                                ? "bg-yellow-500"
                                                : "bg-red-500"
                                        }`}
                                        style={{
                                            width: `${job.match_percentage}%`
                                        }}
                                    >

                                    </div>

                                </div>
                                

                                <button
                                    onClick={() => saveJob(job)}
                                    className="mt-4 mr-3 bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-700"
                                >
                                    ❤️ Save Job
                                </button>


                                <button
                                    onClick={() => applyJob(job.apply_link)}
                                    className="mt-6 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700"
                                >

                                    Apply

                                </button>

                            </div>

                        ))

                }

            </div>

        </div>

    );

}

export default JobRecommendation;
import { useEffect, useState } from "react";
import axios from "axios";

function JobRecommendation() {

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");
    const [jobType, setJobType] = useState("All");

    useEffect(() => {

        getJobs();

    }, []);

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

                                <div className="mt-3">

                                    <strong>Required Skills :</strong>

                                    <ul className="list-disc ml-6 mt-2">

                                        {

                                            job.skills.map((skill, i) => (

                                                <li key={i}>
                                                    {skill}
                                                </li>

                                            ))

                                        }

                                    </ul>

                                </div>

                                <button
                                    onClick={() => applyJob(job.apply_link)}
                                    className="mt-5 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700"
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
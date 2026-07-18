import { useEffect, useState } from "react";

function SavedJobs() {

    const [savedJobs, setSavedJobs] = useState([]);

    useEffect(() => {

        const jobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

        setSavedJobs(jobs);

    }, []);

    const removeJob = (company) => {

        const updatedJobs = savedJobs.filter(

            (job) => job.company !== company

        );

        setSavedJobs(updatedJobs);

        localStorage.setItem(

            "savedJobs",

            JSON.stringify(updatedJobs)

        );

    };

    return (

        <div className="min-h-screen bg-gray-100 p-10">

            <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">

                ❤️ Saved Jobs

            </h1>

            {

                savedJobs.length === 0 ? (

                    <h2 className="text-center text-xl text-gray-500">

                        No Saved Jobs Yet

                    </h2>

                ) : (

                    <div className="grid md:grid-cols-2 gap-6">

                        {

                            savedJobs.map((job, index) => (

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

                                    <p>

                                        <strong>Company :</strong> {job.company}

                                    </p>

                                    <p>

                                        <strong>Location :</strong> {job.location}

                                    </p>

                                    <p>

                                        <strong>Salary :</strong> {job.salary}

                                    </p>

                                    <button
                                        onClick={() => removeJob(job.company)}
                                        className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
                                    >

                                        🗑 Remove

                                    </button>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}

export default SavedJobs;
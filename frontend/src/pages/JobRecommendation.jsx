import { useEffect, useState } from "react";
import axios from "axios";

function JobRecommendation() {

    const [jobs, setJobs] = useState([]);

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

    const applyJob = (company) => {

        alert(`Application Submitted Successfully for ${company}! 🎉`);

    };

    return (

        <div className="min-h-screen bg-gray-100 p-10">

            <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
                Recommended Jobs
            </h1>

            <div className="grid md:grid-cols-2 gap-6">

                {
                    jobs.map((job, index) => (

                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-xl p-6"
                        >

                            <h2 className="text-2xl font-bold">
                                {job.title}
                            </h2>

                            <p className="mt-3">
                                <strong>Company :</strong> {job.company}
                            </p>

                            <p>
                                <strong>Location :</strong> {job.location}
                            </p>

                            <button
                                onClick={() => applyJob(job.company)}
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
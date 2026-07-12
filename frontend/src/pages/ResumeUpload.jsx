import { useState } from "react";
import axios from "axios";

function ResumeUpload() {

    const [file, setFile] = useState(null);
    const [analysis, setAnalysis] = useState(null);

    const uploadResume = async () => {

        if (!file) {
            alert("Please Select Resume");
            return;
        }

        const formData = new FormData();

        formData.append("file", file);

        try {

            const response = await axios.post(
                "http://127.0.0.1:8000/upload-resume",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            alert(response.data.message);

        }

        catch (error) {

            alert("Resume Upload Failed");

        }

    };

    const analyzeResume = async () => {

        try {

            const response = await axios.get(
                "http://127.0.0.1:8000/analyze-resume"
            );

            setAnalysis(response.data);

        }

        catch (error) {

            alert("Resume Analysis Failed");

        }

    };

    return (

        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-lg w-[500px]">

                <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
                    Resume Upload
                </h1>

                <input
                    type="file"
                    className="mb-5"
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <button
                    onClick={uploadResume}
                    className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 mb-4"
                >
                    Upload Resume
                </button>

                <button
                    onClick={analyzeResume}
                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                >
                    Analyze Resume
                </button>

                {
                    analysis && (

                        <div className="mt-8">

                            <h2 className="text-2xl font-bold text-center mb-4">
                                Resume Analysis
                            </h2>

                            <h3 className="text-green-700 font-bold">
                                Score : {analysis.score}/100
                            </h3>

                            <br />

                            <h3 className="font-bold">
                                Skills
                            </h3>

                            <ul className="list-disc ml-6">

                                {
                                    analysis.skills.map((skill, index) => (

                                        <li key={index}>
                                            {skill}
                                        </li>

                                    ))
                                }

                            </ul>

                            <br />

                            <h3 className="font-bold text-red-600">
                                Missing Skills
                            </h3>

                            <ul className="list-disc ml-6">

                                {
                                    analysis.missing_skills.map((skill, index) => (

                                        <li key={index}>
                                            {skill}
                                        </li>

                                    ))
                                }

                            </ul>

                        </div>

                    )
                }

            </div>

        </div>

    );

}

export default ResumeUpload;
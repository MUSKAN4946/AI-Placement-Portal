import { useState } from "react";
import axios from "axios";

function ResumeUpload() {

    const [file, setFile] = useState(null);

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

    return (

        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-lg w-96">

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
                    className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
                >
                    Upload Resume
                </button>

            </div>

        </div>

    );

}

export default ResumeUpload;
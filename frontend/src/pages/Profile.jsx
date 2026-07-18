import { useState } from "react";

function Profile() {

    
    const [profile, setProfile] = useState({
    

        name: "Muskan Verma",

        email: "muskanverma.7676@gmail.com",

        phone: "8319301374",

        college: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",

        branch: "B.Tech CSE (Artificial Intelligence)",

        skills: "Python, FastAPI, React, MySQL",

        github: "https://github.com/MUSKAN4946",

        linkedin: "https://www.linkedin.com/in/muskanverma12"

    });


    return (

        <div className="min-h-screen bg-gray-100 p-10">

            <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">

                <div className="flex flex-col items-center">

                    <img

                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"

                        alt="Profile"

                        className="w-32 h-32 rounded-full mb-5"

                    />

                    <h1 className="text-4xl font-bold text-blue-700">

                        My Profile

                    </h1>

                </div>

                <div className="mt-8 space-y-4">

                   

                <div>

                    <label className="font-bold">Name</label>

                    <input
                        type="text"
                        value={profile.name}
                        disabled
                        onChange={(e) =>
                            setProfile({ ...profile, name: e.target.value })
                        }
                        className="w-full border p-2 rounded mt-1"
                    />

                </div>

                <div>

                    <label className="font-bold">Email</label>

                        <input
                            type="email"
                            value={profile.email}
                            disabled
                            onChange={(e) =>
                                setProfile({ ...profile, email: e.target.value })
                            }
                            className="w-full border p-2 rounded mt-1"
                        />

                </div>

                <div>

                    <label className="font-bold">Phone</label>

                        <input
                            type="text"
                            value={profile.phone}
                            disabled
                            onChange={(e) =>
                                setProfile({ ...profile, phone: e.target.value })
                            }
                            className="w-full border p-2 rounded mt-1"
                        />

                </div>

                <div>

                    <label className="font-bold">College</label>

                        <input
                            type="text"
                            value={profile.college}
                            disabled
                            onChange={(e) =>
                                setProfile({ ...profile, college: e.target.value })
                            }
                            className="w-full border p-2 rounded mt-1"
                        />

                </div>

                <div>

                    <label className="font-bold">Branch</label>

                        <input
                            type="text"
                            value={profile.branch}
                            disabled
                            onChange={(e) =>
                                setProfile({ ...profile, branch: e.target.value })
                            }
                            className="w-full border p-2 rounded mt-1"
                        />

                </div>

                <div>

                    <label className="font-bold">Skills</label>

                        <input
                            type="text"
                            value={profile.skills}
                            disabled
                            onChange={(e) =>
                                setProfile({ ...profile, skills: e.target.value })
                            }
                            className="w-full border p-2 rounded mt-1"
                        />

                </div>






                   

                    <p>

                        <strong>GitHub :</strong>

                        <a

                            href={profile.github}

                            target="_blank"

                            rel="noreferrer"

                            className="text-blue-600 ml-2"

                        >

                            Open GitHub

                        </a>

                    </p>

                    <p>

                        <strong>LinkedIn :</strong>

                        <a

                            href={profile.linkedin}

                            target="_blank"

                            rel="noreferrer"

                            className="text-blue-600 ml-2"

                        >

                            Open LinkedIn

                        </a>

                    </p>

                

                </div>

            </div>

        </div>

    );

}

export default Profile;
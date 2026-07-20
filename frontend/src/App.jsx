import { Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ResumeUpload from "./pages/ResumeUpload";
import JobRecommendation from "./pages/JobRecommendation";
import SavedJobs from "./pages/SavedJobs";
import Profile from "./pages/Profile";
import InterviewQuestions from "./pages/InterviewQuestions";

function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Login />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/dashboard"
                element={<Dashboard />}
            />

            <Route
                path="/resume-upload"
                element={<ResumeUpload />}
            />

            <Route
                path="/job-recommendation"
                element={<JobRecommendation />}
            />

            <Route path="/saved-jobs" element={<SavedJobs />} />

            <Route path="/profile" element={<Profile />} />

            <Route
                path="/interview-questions"
                element={<InterviewQuestions />}
            />

            

        </Routes>

    );

}

export default App;
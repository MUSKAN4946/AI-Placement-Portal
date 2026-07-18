import { Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ResumeUpload from "./pages/ResumeUpload";
import JobRecommendation from "./pages/JobRecommendation";
import SavedJobs from "./pages/SavedJobs";

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

        </Routes>

    );

}

export default App;
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const loginUser = async () => {

        try {

            const response = await axios.post(
                "http://127.0.0.1:8000/login",
                {
                    email,
                    password
                }
            );

            alert(response.data.message);

            navigate("/dashboard");

        }

        catch (error) {

            alert("Login Failed");

        }

    };

    return (

        <div>

            <h1>Login</h1>

            <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={loginUser}>
                Login
            </button>

        </div>

    );

}

export default Login;
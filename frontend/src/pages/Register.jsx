import { useState } from "react";
import axios from "axios";

function Register() {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const registerUser = async () => {

        try {

            const response = await axios.post(
                "http://127.0.0.1:8000/register",
                {
                    name,
                    email,
                    password
                }
            );

            alert(response.data.message);

        }

        catch (error) {

            alert("Registration Failed");

        }

    };

    return (

        <div>

            <h1>Register</h1>

            <input
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
            />

            <br />
            <br />

            <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <br />
            <br />

            <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <br />
            <br />

            <button onClick={registerUser}>
                Register
            </button>

        </div>

    );

}

export default Register;
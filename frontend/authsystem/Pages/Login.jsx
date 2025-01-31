import React, { useState } from "react";
import axios from 'axios'
import "./Login.css";

const Login = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [message, setMessage] = useState("");


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send login credentials to the backend
            const res = await axios.post('http://localhost:3000/login', formData);

            // Check if the backend returned a successful login response
            if (res.data && res.data.token) {
                console.log("User logged in:", formData);
                // Optionally store the token or user info in local storage or context
                localStorage.setItem('token', res.data.token);
                setFormData({ username: "", password: "" });
                setMessage("Login successful!");
            } else {
                // If login fails (unexpected response)
                setMessage("Login failed. Please check your credentials.");
            }
        } catch (e) {
            console.error(e);
            // Handle errors such as invalid credentials or server errors
            if (e.response && e.response.data) {
                setMessage(e.response.data.message || "Something went wrong!");
            } else {
                alert("Something went wrong!");
            }
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

import React, { useState } from "react";
import axios from 'axios'
import "./Register.css";

const Register = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/register', formData)
            console.log("User registered:", formData);
            setFormData({ username: "", password: "" });
            setMessage("User registered successfully!");
        } catch (e) {
            alert("Something went wrong!")
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {message && <p className="success-message">{message}</p>}
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;

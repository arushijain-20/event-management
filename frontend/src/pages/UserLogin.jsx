import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/UserLogin.css'

function UserLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
    e.preventDefault();

    // Simple login logic for demonstration
    if (username === "user" && password === "password") {
      alert("Login successful!");
      navigate("/user"); // Navigate to AfterLogin page
    } else {
      alert("Invalid username or password!");
    }
  };
  return (
    <div className="container">
      <div className="header">User Login</div>
      <form onSubmit={handleLogin} className="form">
      <div className="row">
          <label className="label">User Id</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="row">
          <label className="label">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-row">
          <button className="button cancel">Cancel</button>
          <button className="button login" type="submit">
            Login <span className="icon">➡️</span>
          </button>
        </div>
        </form>
      
    </div>
  );
};
  

export default UserLogin
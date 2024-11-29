import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/UserLogin.css';

function VendorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // For showing a loading state
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear any previous errors

    try {
      const response = await fetch("http://localhost:8080/api/vendors/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      

      if (response.ok) {
        alert("Login successful!");
        navigate("/vendor"); 
        localStorage.setItem("vendorName", data.name);
      } else {
        // Show error message returned from the backend
        setError(data.error || "Invalid email or password!");
      }
    } catch (error) {
      setError("An error occurred while logging in. Please try again.");
      console.error("Login Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="header">Vendor Login</div>
      <form onSubmit={handleLogin} className="form">
        {error && <div className="error-message">{error}</div>} {/* Error message display */}
        <div className="row">
          <label className="label">Email Id</label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button className="button cancel" onClick={handleCancel} type="button">
            Cancel
          </button>
          <button className="button login" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"} <span className="icon">➡️</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default VendorLogin;

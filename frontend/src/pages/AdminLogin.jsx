import React, { useState } from "react";
import '../css/AdminLogin.css'
import { useNavigate } from "react-router-dom";


function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // For showing a loading state
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();

  const handleLogin = async(e) => {

    e.preventDefault();
    setLoading(true);
    setError(""); // Clear any previous errors

    try {
      const response = await fetch("http://localhost:8080/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("adminName", data.name);
        navigate("/admin"); 
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
    navigate("/"); 
};
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <div className="text-2xl font-bold text-center mb-6">
          Event Management System
        </div>
        <div className="form-group mb-4">
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
          />
        </div>
        <div className="buttons flex justify-between">
          <button
            className="w-full px-4 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition duration-150 ease-in-out mr-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="w-full px-4 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition duration-150 ease-in-out ml-2"
            type="submit" onClick = {handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Login"} <span className="icon">➡️</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin



    


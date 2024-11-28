import React from 'react'
import '../css/AdminLogin.css'
import { useNavigate } from "react-router-dom";


function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/admin"); 
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
            id="userId"
            defaultValue=""
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            defaultValue=""
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
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin



    


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
    <div className="login-form">
    <div className="header">
      Event Management System
    </div>
    <div className="form-group">
      <label htmlFor="userId" className="label">User Id</label>
      <input type="text" id="userId" defaultValue="" className="input" />
    </div>
    <div className="form-group">
      <label htmlFor="password" className="label">Password</label>
      <input type="password" id="password" defaultValue="" className="input" />
    </div>
    <div className="buttons">
      <button className="button cancel" onClick={handleCancel}>Cancel</button>
      <button className="button login" onClick={handleLogin}>Login</button>
    </div>
  </div>
  )
}

export default AdminLogin
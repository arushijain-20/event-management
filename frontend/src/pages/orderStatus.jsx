import React from 'react'
import { useNavigate } from "react-router-dom";
import '../css/OrderStatus.css'

function OrderStatus() {
    const navigate = useNavigate();

    const handleHome= () => {
      navigate("/");
    }
    const handleLogout= () => {
      navigate("/");
    }
    return (
        <div className="App">
          {/* Navigation Bar */}
          <header className="navbar">
            <button className="nav-button" onClick={handleHome}>Home</button>
            <h1 className="title">User Order Status</h1>
            <button className="nav-button" onClick={handleLogout}>LogOut</button>
          </header>
    
          {/* User Information Section */}
          <div className="user-info">
            <div className="info-row">
              <button className="info-button">Name</button>
              <button className="info-button">E-mail</button>
              <button className="info-button">Address</button>
              <button className="info-button">Status</button>
            </div>
            <div className="info-row">
              <button className="info-button"></button>
              <button className="info-button"></button>
              <button className="info-button"></button>
              <button className="info-button"></button>
            </div>
          </div>
        </div>
      );
}

export default OrderStatus

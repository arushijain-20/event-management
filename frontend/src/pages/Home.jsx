import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Home.css'

function Home() {
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate("/user-login"); 
    };

    const handleAdminClick = () => {
        navigate("/admin-login"); 
    };

    const handleVendorClick = () => {
        navigate("/vendor-login"); 
    };

    return ( 
    <div className="landing-page"> 
    <header className="header"> 
    <h1>Welcome to Event Master</h1>
     <p>Your one-stop solution for all event management needs</p> 
     </header> <main className="main-content"> 
        <div className="login-buttons">
         <button className="login-button admin" onClick={handleAdminClick}>Admin Login</button> 
         <button className="login-button user" onClick={handleUserClick}>User Login</button>
         <button className="login-button vendor" onClick={handleVendorClick}>Vendor Login</button>
          </div> </main> <footer className="footer"> 
            <p>&copy; 2024 Event Master. All rights reserved.</p>
             </footer> 
             </div>)
}



export default Home
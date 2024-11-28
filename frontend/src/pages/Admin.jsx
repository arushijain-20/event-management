import React from 'react'
import { useNavigate } from "react-router-dom";
import '../css/Admin.css'

function Admin() {
    const navigate = useNavigate();

    const handleUser = () => {
      navigate("/admin/maintainUser");
    }

    const handleVendor = ()=>{
      navigate("/admin/maintainVendor");
    }
    const handleLogout = ()=>{
      navigate("/");
    }
    const handleHome = ()=>{
      navigate("/");
    }
        return (
            <div className="admin-dashboard">
              <button className="button top-left" onClick={handleHome}>Home</button>
              <button className="button top-right" onClick={handleLogout}>LogOut</button>
              <div className="welcome">Welcome Admin</div>
              <button className="button bottom-left" onClick={handleUser}>Maintain User</button>
              <button className="button bottom-right" onClick={handleVendor}>Maintain Vendor</button>
            </div>
          );
    
}

export default Admin

import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/maintainVendor.css'
function MaintainVendor() {
    const navigate = useNavigate()
    const handleHome = () => {
        navigate('/')
    }
    const handleLogout = () => {
        navigate('/')
    }

    return (
        <div className="admin-panel">
          <button className="button top-left" onClick={handleHome}>Home</button>
          <button className="button top-right" onClick={handleLogout}>LogOut</button>
          
          <div className="main-buttons">
            <button className="button">Membership</button>
            <div className="button-group">
              <button className="button">Add</button>
              <button className="button">Update</button>
            </div>
            <button className="button">User Management</button>
            <div className="button-group">
              <button className="button">Add</button>
              <button className="button">Update</button>
            </div>
          </div>
          </div>
      ); 
}

export default MaintainVendor

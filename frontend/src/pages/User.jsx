import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/User.css";

const User = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle the dropdown menu
  const handleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="after-login-container">
      <div className="main-content">
        <div className="header">WELCOME USER</div>

        <div className="button-container">
          {/* Vendor Button with Dropdown */}
          <div className="vendor-dropdown">
            <button
              className="button"
              onClick={handleDropdown}
            >
              Vendor <span className="icon">⬇️</span>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <Link to="/vendor/catering">Catering</Link>
                  </li>
                  <li>
                    <Link to="/vendor/florist">Florist</Link>
                  </li>
                  <li>
                    <Link to="/vendor/decoration">Decoration</Link>
                  </li>
                  <li>
                    <Link to="/vendor/lighting">Lighting</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Other Buttons */}
          <button className="button">
            <Link to="/cart">Cart</Link> <span className="icon">➡️</span>
          </button>
          <button className="button">
            Guest Lis<span className="icon">➡️</span>
          </button>
          <button className="button">
            <Link to="/order-status">Order Status</Link> <span className="icon">➡️</span>
          </button>
        </div>

        {/* Logout Button */}
        <div className="logout-container">
          <button className="button logout">
            <Link to="/">LogOut</Link> <span className="icon">➡️</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;

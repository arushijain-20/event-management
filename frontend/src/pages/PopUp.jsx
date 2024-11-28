import React from 'react';
import '../css/Popup.css';
import { useNavigate } from 'react-router-dom';

const Popup = () => {
    const navigate = useNavigate()

    const handleShop = () =>{
        navigate('/user')
    }
    
  return (
    <div className="popup">
      
      <h2>THANK YOU</h2>
      <button className="button">Total Amount</button>
      <div className="row">
        <button className="button">Name</button>
        <button className="button">Number</button>
      </div>
      <div className="row">
        <button className="button">E-mail</button>
        <button className="button">Payment Method</button>
      </div>
      <div className="row">
        <button className="button">Address</button>
        <button className="button">State</button>
      </div>
      <div className="row">
        <button className="button">City</button>
        <button className="button">Pin Code</button>
      </div>
      <button className="button" onClick={handleShop}>Continue Shopping</button>
    </div>
  );
};

export default Popup;

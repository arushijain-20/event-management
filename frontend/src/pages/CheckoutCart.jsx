import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const OrderForm = () => {

  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/cart/checkout/popup"); 
};

  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>Item</div>
      <div style={styles.header}>Details</div>
      <div style={styles.row}>
        <button style={styles.button}>Name</button>
        <button style={styles.button}>Number</button>
      </div>
      <div style={styles.row}>
        <button style={styles.button}>E-mail</button>
        <div style={styles.dropdownContainer}>
          <label style={styles.dropdownLabel}>Payment Method</label>
          <select style={styles.dropdown} onChange={handlePaymentChange} value={paymentMethod}>
            <option value="" disabled>Select Payment Method</option>
            <option value="UPI">UPI</option>
            <option value="Cash">Cash</option>
          </select>
          {paymentMethod && (
            <div style={styles.radioContainer}>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  value="UPI"
                  checked={paymentMethod === 'UPI'}
                  onChange={handlePaymentChange}
                />
                UPI
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  value="Cash"
                  checked={paymentMethod === 'Cash'}
                  onChange={handlePaymentChange}
                />
                Cash
              </label>
            </div>
          )}
        </div>
      </div>
      <div style={styles.row}>
        <button style={styles.button}>Address</button>
        <button style={styles.button}>State</button>
      </div>
      <div style={styles.row}>
        <button style={styles.button}>City</button>
        <button style={styles.button}>Pin Code</button>
      </div>
      <button style={styles.orderButton} onClick={handleOrder}>Order Now</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    padding: '20px',
    borderRadius: '10px',
  },
  header: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    margin: '10px 0',
    borderRadius: '5px',
    textAlign: 'center',
    width: '200px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: '10px 0',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    width: '45%',
  },
  dropdownContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  dropdownLabel: {
    marginBottom: '5px',
  },
  dropdown: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
  },
  radioLabel: {
    marginBottom: '5px',
  },
  orderButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    marginTop: '20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    width: '200px',
  },
};

export default OrderForm;

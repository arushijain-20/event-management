import React, { useState } from 'react';
import '../css/cart.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const Navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCheckout = () => {
    Navigate('/cart/checkout')
  }

  return (
    <div className="App">
      <header className="App-header">
        <button>Home</button>
        <button>View Product</button>
        <button>Request Item</button>
        <button>Product Status</button>
        <button>LogOut</button>
      </header>
      <main>
        <h1>Shopping Cart</h1>
        <div className="cart-table">
          <div className="cart-header">
            <div>Image</div>
            <div>Name</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total Price</div>
            <div>Action</div>
          </div>
          <div className="cart-item">
            <div className="item-image">Image</div>
            <div className="item-name">Product Name</div>
            <div className="item-price">100/-</div>
            <div className="item-quantity">
              <select value={quantity} onChange={handleQuantityChange}>
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div className="item-total-price">{100 * quantity}/-</div>
            <button className="item-remove">Remove</button>
          </div>
        </div>
        <div className="cart-footer">
          <div className="grand-total">Grand Total: {100 * quantity}/-</div>
          <button className="delete-all">Delete All</button>
        </div>
        <button className="checkout" onClick={handleCheckout}>Proceed to CheckOut</button>
      </main>
    </div>
  );
}

export default Cart;

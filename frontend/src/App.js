import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AdminLogin from "./pages/AdminLogin";
import UserLogin from "./pages/UserLogin";
import VendorLogin from "./pages/VendorLogin";
import Admin from "./pages/Admin";
import MaintainUser from "./pages/MaintainUser";
import MaintainVendor from "./pages/MaintainVendor";
import User from './pages/User'

import OrderStatus from "./pages/orderStatus";
import Cart from "./pages/Cart";
import Checkout from './pages/CheckoutCart'
import Popup from "./pages/PopUp";
import AddUser from "./pages/AddUser";
import DelUser from "./pages/DelUser";
import AddVendor from "./pages/AddVendor";
import DelVendor from "./pages/DelVendor";
import Vendor from "./pages/Vendor";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-login" element={<AdminLogin/>} />
      <Route path="/user-login" element={<UserLogin/>} />
      <Route path="/order-status" element={<OrderStatus/>} />
      <Route path="/vendor-login" element={<VendorLogin/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/admin/maintainUser" element={<MaintainUser/>} />
      <Route path="/admin/maintainUser/addUser" element={<AddUser/>} />
      <Route path="/admin/maintainUser/addUser/delUser" element={<DelUser/>} />
      <Route path="/admin/maintainVendor" element={<MaintainVendor/>} />
      <Route path="/admin/maintainVendor/addVendor" element={<AddVendor/>} />
      <Route path="/admin/maintainVendor/delVendor" element={<DelVendor/>} />
      <Route path="/user" element={<User/>} />
      <Route path="/vendor" element={<Vendor/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/cart/checkout" element={<Checkout/>} />
      <Route path="/cart/checkout/popup" element={<Popup/>} />
    </Routes>
  </Router>

);

export default App;
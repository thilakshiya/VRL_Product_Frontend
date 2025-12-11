

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBot from "./components/Chatbot";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/Forgotpassword";
import Product from "./pages/Product";
import UserDashboard from "./pages/UserDashboard";
import About from "./pages/About";
import SupplierDashboard from "./pages/SupplierDashboard";
import Order from "./pages/order";
import Admin from "./pages/Admin";
import UserPayment from "./pages/UserPayment";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Support from "./pages/Support";
import PaymentSuccess from "./pages/PaymentSuccess"; 
import MyOrders from "./pages/MyOrders";





function App() {
  // ✅ Make sure you define useState here
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const userName = localStorage.getItem("userName");
    if (token && userName) {
      setUser({ name: userName });
    }
  }, []);

  return (
    <>
      <Navbar user={user} />
     <ChatBot />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user-dashboard" element={<UserDashboard user={user} />} />
          <Route path="/about" element={<About />} />
          <Route path="/supplier/dashboard" element={<SupplierDashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user-payments" element={<UserPayment />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/order/:id" element={<Order />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/my-orders" element={<MyOrders />} />
       

          
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;


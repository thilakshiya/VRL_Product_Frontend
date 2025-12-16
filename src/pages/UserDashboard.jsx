


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Ensure this path is relative to this file
import DashboardImg from "../assets/image02.jpg"; 
import "./UserDashboard.css";

// Simple SVG Icons for a professional look without external libraries
const ShopIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>;
const OrderIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
const SupportIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;

function UserDashboard() {
  const [user, setUser] = useState({ name: "Guest" });
  const navigate = useNavigate();

  useEffect(() => {
    // Correctly parse the JSON object from Login
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  return (
    <div className="dashboard-container">
      
      {/* Hero Section */}
      <div className="dashboard-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hello, <span className="highlight">{user.name}</span>!
          </h1>
          <p className="hero-subtitle">
            Welcome back to VRL Products. We have new stocks available today.
            Experience fast delivery and premium quality.
          </p>
          <button className="btn-primary-large" onClick={() => navigate("/product")}>
            Browse Products
          </button>
        </div>
        <div className="hero-image-wrapper">
          <img src={DashboardImg} alt="Dashboard Hero" className="hero-img" />
        </div>
      </div>

      {/* Quick Stats / Actions Grid */}
      <div className="dashboard-grid">
        
        {/* Card 1 */}
        <div className="action-card" onClick={() => navigate("/product")}>
          <div className="icon-box blue">
            <ShopIcon />
          </div>
          <h3>Start Shopping</h3>
          <p>Explore our latest collection and find the best deals.</p>
        </div>

        {/* Card 2 */}
        <div className="action-card" onClick={() => navigate("/my-orders")}>
          <div className="icon-box green">
            <OrderIcon />
          </div>
          <h3>My Orders</h3>
          <p>Track your active orders and view purchase history.</p>
        </div>

        {/* Card 3 */}
        <div className="action-card" onClick={() => navigate("/about")}>
          <div className="icon-box purple">
            <SupportIcon />
          </div>
          <h3>Need Help?</h3>
          <p>Contact our support team or read about us.</p>
        </div>

      </div>
    </div>
  );
}

export default UserDashboard;
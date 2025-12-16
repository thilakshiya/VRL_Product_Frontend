
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SupplierDashboard.css";


const UserIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const MapIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const MailIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const PhoneIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const BoxIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
const CheckIcon = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
const WalletIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>;

const SupplierDashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    contact: "",
    stock: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [supplies, setSupplies] = useState([]); 
  const [showAgreementPopup, setShowAgreementPopup] = useState(true);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  
  const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
  const token = userInfo?.token;
  
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchSupplies = async () => {
    if (!token) return;
    try {
      const res = await axios.get("https://vrl-product-backend-stru.onrender.com/api/suppliers/mine", config);
      setSupplies(res.data);
    } catch (err) {
      console.error("Error loading supplies:", err);
    }
  };

  useEffect(() => {
    if (!showAgreementPopup && token) {
      fetchSupplies();
    }
  }, [showAgreementPopup, token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage(""); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const payload = {
        name: formData.name,
        address: formData.address,
        email: formData.email,
        contactNo: formData.contact,
        quantity: Number(formData.stock),
        price: 10, 
      };

      await axios.post("https://vrl-product-backend-stru.onrender.com/api/suppliers", payload, config);
      setShowPaymentPopup(true);

    } catch (error) {
      setMessage(error.response?.data?.message || "Error submitting details");
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentConfirm = () => {
    setShowPaymentPopup(false);
    setMessage("Success! Supply has been registered.");
    setFormData({ name: "", address: "", email: "", contact: "", stock: "" });
    fetchSupplies();
  };

  // Calculate Stats
  const totalSupplied = supplies.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalEarnings = supplies.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0);

  return (
    <div className="dashboard-container">
      
      {/* --- Agreement Modal --- */}
      {showAgreementPopup && (
        <div className="modal-overlay backdrop-blur">
          <div className="modal-card animate-pop">
            <div className="modal-header-img"></div>
            <div className="modal-content">
              <h3>Supplier Agreement</h3>
              <p className="text-muted">To ensure fair market practices, VRL Products operates on a fixed pricing model.</p>
              <div className="price-tag">
                <span className="label">Fixed Rate</span>
                <span className="value">10 Rs / kg</span>
              </div>
              <p className="terms-small">By clicking "Accept", you agree to our Terms of Supply & Service.</p>
              <div className="modal-actions">
                <button className="btn-ghost" onClick={() => alert("Please logout.")}>Decline</button>
                <button className="btn-primary" onClick={() => setShowAgreementPopup(false)}>Accept & Enter</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- Payment Success Modal --- */}
      {showPaymentPopup && (
        <div className="modal-overlay backdrop-blur">
          <div className="modal-card payment-card animate-pop">
            <div className="success-icon-wrapper">
              <CheckIcon />
            </div>
            <h3>Supply Registered!</h3>
            <p className="text-muted">Your details have been successfully recorded in our system.</p>
            
            <div className="payment-summary">
              <div className="summary-row">
                <span>Payment Method</span>
                <span className="bold">Cash On Delivery (COD)</span>
              </div>
              <div className="summary-row">
                <span>Est. Amount</span>
                <span className="bold highlight">Rs {formData.stock * 10}</span>
              </div>
            </div>

            <button className="btn-primary full-width" onClick={handlePaymentConfirm}>Done</button>
          </div>
        </div>
      )}

      {/* --- Main Dashboard Content --- */}
      {!showAgreementPopup && (
        <div className="main-content">
          
          {/* Header & Stats */}
          <header className="dashboard-header">
            <div>
              <h1>Welcome Back, Supplier</h1>
              <p className="text-muted">Manage your supplies and track your earnings.</p>
            </div>
      
          </header>

          <div className="dashboard-grid">
            
            {/* Left Column: Form */}
            <section className="form-section">
              <div className="card">
                <div className="card-header">
                  <h2>Register New Supply</h2>
                </div>
                
                {message && (
                  <div className={`notification ${message.includes("Error") ? "error" : "success"}`}>
                    {message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="input-group two-col">
                    <div className="input-wrapper">
                      <label>Full Name</label>
                      <div className="input-field">
                        <UserIcon />
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ex: John Doe" required />
                      </div>
                    </div>
                    <div className="input-wrapper">
                      <label>Contact Number</label>
                      <div className="input-field">
                        <PhoneIcon />
                        <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="+94 77..." required />
                      </div>
                    </div>
                  </div>

                  <div className="input-wrapper">
                    <label>Email Address</label>
                    <div className="input-field">
                      <MailIcon />
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="supplier@email.com" required />
                    </div>
                  </div>

                  <div className="input-wrapper">
                    <label>Pickup Address</label>
                    <div className="input-field">
                      <MapIcon />
                      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="House No, Street, City" required />
                    </div>
                  </div>

                  <div className="input-wrapper">
                    <label>Stock Quantity (kg)</label>
                    <div className="input-field">
                      <BoxIcon />
                      <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="0" required />
                    </div>
                  </div>
                  
                  <div className="price-preview">
                    <span>Estimated Payout:</span>
                    <strong>Rs {formData.stock ? formData.stock * 10 : 0}</strong>
                  </div>

                  <button type="submit" disabled={loading} className="btn-submit">
                    {loading ? <span className="loader"></span> : "Submit Supply"}
                  </button>
                </form>
              </div>
            </section>

          

          </div>
        </div>
      )}
    </div>
  );
};

export default SupplierDashboard;
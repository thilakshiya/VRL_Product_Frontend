
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import axios from "axios";
import ConfirmModal from "../components/ConfirmModal";
import "./UserPayment.css";

const API = "https://vrl-product-backend-stru.onrender.com/api/payments/users";

// --- Modern Icons ---
const CardIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>;
const CashIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>;
const LockIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
const CheckIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;

const CreatePayment = (props) => {
  const location = useLocation();
  
  const orderId = props.orderId || location.state?.orderId;
  const amount = props.amount || location.state?.amount;

  const [method, setMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [confirmModal, setConfirmModal] = useState(false);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = userInfo?.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  };

  useEffect(() => {
    if (!orderId || !amount) {
      setError("No order details found.");
    }
  }, [orderId, amount]);

  const handleStripePayment = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!amount || amount <= 0) throw new Error("Invalid payment amount.");

      const { data } = await axios.post(
        `${API}/stripe-checkout`,
        { orderId, amount: Number(amount) },
        config
      );

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Stripe session URL not found.");
      }
    } catch (err) {
      console.error("Stripe Error:", err);
      setError(err.response?.data?.message || err.message || "Payment failed.");
      setLoading(false);
    }
  };

  const handleCashPayment = async () => {
    try {
      setLoading(true);
      await axios.post(
        API,
        { orderId, amount: Number(amount), method: "cash", status: "completed" },
        config
      );
      setSuccess("Payment Recorded Successfully!");
      setTimeout(() => { window.location.href = "/payment-success"; }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to record payment.");
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!method) return setError("Please select a payment method.");
    setConfirmModal(true);
  };

  const handleConfirm = () => {
    setConfirmModal(false);
    if (method === "cash") handleCashPayment();
    if (method === "card") handleStripePayment();
  };

  if (!amount) return <div className="loading-screen"><div className="spinner"></div></div>;

  return (
    <div className="payment-wrapper">
      <div className="payment-card">
        
        {/* Header */}
        <div className="payment-header">
          <h2>Secure Checkout</h2>
          <div className="secure-badge">
            <LockIcon /> Encrypted
          </div>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <div className="summary-row">
            <span>Order ID</span>
            <span className="order-id">{orderId || "####"}</span>
          </div>
          <div className="divider"></div>
          <div className="summary-row total">
            <span>Total to Pay</span>
            <span className="amount">Rs {amount.toLocaleString()}</span>
          </div>
        </div>

        {/* Error / Success Messages */}
        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        {/* Payment Methods */}
        <form onSubmit={handleSubmit}>
          <p className="section-label">Select Payment Method</p>
          
          <div className="method-grid">
            {/* Cash Option */}
            <div 
              className={`method-option ${method === "cash" ? "selected" : ""}`} 
              onClick={() => setMethod("cash")}
            >
              <div className="icon-box cash"><CashIcon /></div>
              <div className="method-info">
                <h4>Cash on Delivery</h4>
                <p>Pay when you receive</p>
              </div>
              {method === "cash" && <div className="check-circle"><CheckIcon /></div>}
            </div>

            {/* Card Option */}
            <div 
              className={`method-option ${method === "card" ? "selected" : ""}`} 
              onClick={() => setMethod("card")}
            >
              <div className="icon-box card"><CardIcon /></div>
              <div className="method-info">
                <h4>Card Payment</h4>
                <p>Visa, Mastercard, Amex</p>
              </div>
              {method === "card" && <div className="check-circle"><CheckIcon /></div>}
            </div>
          </div>

          {/* Pay Button */}
          <button type="submit" disabled={loading} className="btn-pay-now">
            {loading ? (
              <span className="loader"></span>
            ) : (
              <>
                {method === "cash" ? "Confirm Order" : "Pay Now"} 
                <span className="btn-amount"> • Rs {amount}</span>
              </>
            )}
          </button>
          
          <p className="footer-note">
            By clicking the button, you agree to our Terms & Conditions.
          </p>
        </form>
      </div>

      <ConfirmModal
        show={confirmModal}
        title="Confirm Transaction"
        message={`Proceed with ${method === 'cash' ? 'Cash' : 'Card'} payment of Rs ${amount}?`}
        onClose={() => setConfirmModal(false)}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default CreatePayment;
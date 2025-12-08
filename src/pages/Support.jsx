import React from "react";
import "./Support.css";

function Support() {
  return (
    <div className="support-container">
      <h1 className="support-title">Support</h1>
      <p className="support-subtitle">
        How can we help you today?
      </p>

      {/* FAQ Section */}
      <section className="support-section">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <ul className="faq-list">
          <li>
            <strong>How do I track my order?</strong>
            <p>You can track your order from the “My Orders” section in your account.</p>
          </li>
          <li>
            <strong>What payment methods do you accept?</strong>
            <p>We accept card payments, bank transfer, and cash on delivery (COD).</p>
          </li>
          <li>
            <strong>Can I cancel my order?</strong>
            <p>Orders can be cancelled before shipping. After shipping, it cannot be cancelled.</p>
          </li>
          <li>
            <strong>How long does delivery take?</strong>
            <p>Usually 2–7 business days depending on your location.</p>
          </li>
        </ul>
      </section>

      {/* Order Issues */}
      <section className="support-section">
        <h2>Order Issues</h2>
        <ul>
          <li>My order hasn’t arrived</li>
          <li>I received a wrong product</li>
          <li>The product was damaged during delivery</li>
          <li>I want to change my delivery address</li>
        </ul>
      </section>

      {/* Payment Issues */}
      <section className="support-section">
        <h2>Payment Issues</h2>
        <ul>
          <li>Payment failed during checkout</li>
          <li>Double payment made by mistake</li>
          <li>Refund not received yet</li>
          <li>Transaction showing pending</li>
        </ul>
      </section>

      {/* Refund Section */}
      <section className="support-section">
        <h2>Returns & Refunds</h2>
        <p>
          If you want to return a product or request a refund, please contact us
          within 7 days of receiving your order. Refunds may take 3–7 business
          days to process depending on your payment method.
        </p>
      </section>

      {/* Technical Issues */}
      <section className="support-section">
        <h2>Technical Support</h2>
        <ul>
          <li>Website not loading</li>
          <li>Account login issues</li>
          <li>Forgot password help</li>
          <li>Product not displaying correctly</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="support-section">
        <h2>Contact Support</h2>
        <p>If you still need help, contact us:</p>
        <p>Email: <strong>thilakshithilakshiya@gmail.com.com</strong></p>
        <p>Phone: <strong>+94 77 8358008</strong></p>
        <p>Support Hours: <strong>Mon–Fri | 9 AM – 6 PM</strong></p>
      </section>
    </div>
  );
}

export default Support;

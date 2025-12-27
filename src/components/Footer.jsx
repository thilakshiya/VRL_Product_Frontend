
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../assets/Black Simple Farmhouse Cow Logo (1).png"; // Ensure this path is correct

// Internal SVG Icons for a lightweight professional look
const PhoneIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const MailIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const MapIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const FacebookIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TwitterIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>;
const InstagramIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        {/* 1. Brand Info */}
        <div className="footer-column brand-col">
          <div className="footer-logo">
            <img src={Logo} alt="VRL Logo" />
            <span>VRL Product</span>
          </div>
          <p className="footer-desc">
            Your trusted platform for quality products. We ensure fast delivery,
            secure payments, and exceptional service for suppliers and customers alike.
          </p>
          <div className="social-icons">
            <a href="#" className="social-link"><FacebookIcon /></a>
            <a href="#" className="social-link"><TwitterIcon /></a>
            <a href="#" className="social-link"><InstagramIcon /></a>
          </div>
        </div>

        {/* 2. Navigation */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">All Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/register">Join as Supplier</Link></li>
          </ul>
        </div>

        {/* 3. Support */}
        <div className="footer-column">
          <h3>Support</h3>
          <ul className="footer-links">
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
          </ul>
        </div>

        {/* 4. Contact */}
        <div className="footer-column contact-col">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <div className="icon-box"><MapIcon /></div>
              <span>Jaffna, Sri Lanka</span>
            </li>
            <li>
              <div className="icon-box"><PhoneIcon /></div>
              <span>077 835 8008</span>
            </li>
            <li>
              <div className="icon-box"><MailIcon /></div>
              <a href="mailto:thilakshithilakshiya@gmail.com">thilakshithilakshiya@gmail.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="bottom-content">
          <p>&copy; {new Date().getFullYear()} VRL Product. All rights reserved.</p>
          <div className="payment-methods">
            <span>Secure Payments</span>
            {/* You can add small payment icons here like Visa/Mastercard if you have images */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

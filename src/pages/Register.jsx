
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/userApi"; 
import "./Register.css";

// Simple SVG Icons
const UserIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const EmailIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const LockIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
const EyeIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
const EyeOffIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>;

function Register({ setUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on type
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      
      // 1️⃣ API Call
      const { data } = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      // 2️⃣ Save to LocalStorage (Standardized as 'userInfo')
      cookies.setItem("userInfo", JSON.stringify(data));

      // 3️⃣ Force Navbar Update
      window.dispatchEvent(new Event("auth-change")); 

      // 4️⃣ Update Parent State (Optional)
      if(setUser) setUser({ name: formData.name, role: formData.role });

      // 5️⃣ Redirect Logic
      if (formData.role === "user") {
        navigate("/user-dashboard"); 
      } else if (formData.role === "supplier") {
        navigate("/supplier/dashboard");
      } else {
        navigate("/");
      }
      
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h2>Create Account</h2>
          <p>Join VRL Products today</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form className="register-form" onSubmit={handleSubmit}>
          
          {/* Full Name */}
          <div className="input-group">
            <span className="input-icon"><UserIcon /></span>
            <input 
              type="text" 
              name="name" 
              placeholder="Full Name" 
              onChange={handleChange} 
              required 
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <span className="input-icon"><EmailIcon /></span>
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              onChange={handleChange} 
              required 
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <span className="input-icon"><LockIcon /></span>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <span className="toggle-eye" onClick={() => setShowPass(!showPass)}>
              {showPass ? <EyeOffIcon /> : <EyeIcon />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <span className="input-icon"><LockIcon /></span>
            <input
              type={showConfirmPass ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
            <span className="toggle-eye" onClick={() => setShowConfirmPass(!showConfirmPass)}>
              {showConfirmPass ? <EyeOffIcon /> : <EyeIcon />}
            </span>
          </div>

          {/* Role Selection */}
          <div className="role-selection">
            <label>I am a:</label>
            <div className="role-options">
              <label className={`role-option ${formData.role === 'user' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="role" 
                  value="user" 
                  checked={formData.role === 'user'} 
                  onChange={handleChange} 
                />
                Customer
              </label>
              <label className={`role-option ${formData.role === 'supplier' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="role" 
                  value="supplier" 
                  checked={formData.role === 'supplier'} 
                  onChange={handleChange} 
                />
                Supplier
              </label>
            </div>
          </div>

          <button className="register-btn" type="submit" disabled={loading}>
            {loading ? <span className="loader"></span> : "Register Now"}
          </button>
        </form>

        <div className="register-footer">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
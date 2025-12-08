import React, { useState } from "react";
import { sendResetOTP, resetPassword } from "../api/userApi";
import "./ForgotPassword.css";


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSend = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const { data } = await sendResetOTP({ email });
      setMessage(data.message || 'OTP sent');
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send OTP');
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const { data } = await resetPassword({ email, otp, newPassword });
      setMessage(data.message || 'Password reset successful');
      setStep(3);
    } catch (err) {
      setError(err.response?.data?.message || 'Reset failed');
    }
  };

  return (
    <section className="form-container">
      <h2>Forgot Password</h2>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
      {step === 1 && (
        <form onSubmit={handleSend}>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button type="submit">Send OTP</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleReset}>
          <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
          <input type="password" placeholder="New password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
          <button type="submit">Reset Password</button>
        </form>
      )}
      {step === 3 && <p>Done — try logging in with new password.</p>}
    </section>
  );
}

export default ForgotPassword;

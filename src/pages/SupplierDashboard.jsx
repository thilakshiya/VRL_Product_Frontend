
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import "./SupplierDashboard.css";


// // const UserIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
// // const MapIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
// // const MailIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
// // const PhoneIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
// // const BoxIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
// // const CheckIcon = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
// // const WalletIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>;

// // const SupplierDashboard = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     address: "",
// //     email: "",
// //     contact: "",
// //     stock: "",
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const [message, setMessage] = useState("");
// //   const [supplies, setSupplies] = useState([]); 
// //   const [showAgreementPopup, setShowAgreementPopup] = useState(true);
// //   const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  
// //   const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
// //   const token = userInfo?.token;
  
// //   const config = {
// //     headers: {
// //       "Content-Type": "application/json",
// //       Authorization: `Bearer ${token}`,
// //     },
// //   };

// //   const fetchSupplies = async () => {
// //     if (!token) return;
// //     try {
// //       const res = await axios.get("https://vrl-product-backend-stru.onrender.com/api/suppliers/mine", config);
// //       setSupplies(res.data);
// //     } catch (err) {
// //       console.error("Error loading supplies:", err);
// //     }
// //   };

// //   useEffect(() => {
// //     if (!showAgreementPopup && token) {
// //       fetchSupplies();
// //     }
// //   }, [showAgreementPopup, token]);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //     setMessage(""); 
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setMessage("");

// //     try {
// //       const payload = {
// //         name: formData.name,
// //         address: formData.address,
// //         email: formData.email,
// //         contactNo: formData.contact,
// //         quantity: Number(formData.stock),
// //         price: 10, 
// //       };

// //       await axios.post("https://vrl-product-backend-stru.onrender.com/api/suppliers", payload, config);
// //       setShowPaymentPopup(true);

// //     } catch (error) {
// //       setMessage(error.response?.data?.message || "Error submitting details");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handlePaymentConfirm = () => {
// //     setShowPaymentPopup(false);
// //     setMessage("Success! Supply has been registered.");
// //     setFormData({ name: "", address: "", email: "", contact: "", stock: "" });
// //     fetchSupplies();
// //   };

// //   // Calculate Stats
// //   const totalSupplied = supplies.reduce((acc, curr) => acc + curr.quantity, 0);
// //   const totalEarnings = supplies.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0);

// //   return (
// //     <div className="dashboard-container">
      
// //       {/* --- Agreement Modal --- */}
// //       {showAgreementPopup && (
// //         <div className="modal-overlay backdrop-blur">
// //           <div className="modal-card animate-pop">
// //             <div className="modal-header-img"></div>
// //             <div className="modal-content">
// //               <h3>Supplier Agreement</h3>
// //               <p className="text-muted">To ensure fair market practices, VRL Products operates on a fixed pricing model.</p>
// //               <div className="price-tag">
// //                 <span className="label">Fixed Rate</span>
// //                 <span className="value">10 Rs / kg</span>
// //               </div>
// //               <p className="terms-small">By clicking "Accept", you agree to our Terms of Supply & Service.</p>
// //               <div className="modal-actions">
// //                 <button className="btn-ghost" onClick={() => alert("Please logout.")}>Decline</button>
// //                 <button className="btn-primary" onClick={() => setShowAgreementPopup(false)}>Accept & Enter</button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* --- Payment Success Modal --- */}
// //       {showPaymentPopup && (
// //         <div className="modal-overlay backdrop-blur">
// //           <div className="modal-card payment-card animate-pop">
// //             <div className="success-icon-wrapper">
// //               <CheckIcon />
// //             </div>
// //             <h3>Supply Registered!</h3>
// //             <p className="text-muted">Your details have been successfully recorded in our system.</p>
            
// //             <div className="payment-summary">
// //               <div className="summary-row">
// //                 <span>Payment Method</span>
// //                 <span className="bold">Cash On Delivery (COD)</span>
// //               </div>
// //               <div className="summary-row">
// //                 <span>Est. Amount</span>
// //                 <span className="bold highlight">Rs {formData.stock * 10}</span>
// //               </div>
// //             </div>

// //             <button className="btn-primary full-width" onClick={handlePaymentConfirm}>Done</button>
// //           </div>
// //         </div>
// //       )}

// //       {/* --- Main Dashboard Content --- */}
// //       {!showAgreementPopup && (
// //         <div className="main-content">
          
// //           {/* Header & Stats */}
// //           <header className="dashboard-header">
// //             <div>
// //               <h1>Welcome Back, Supplier</h1>
// //               <p className="text-muted">Manage your supplies and track your earnings.</p>
// //             </div>
      
// //           </header>

// //           <div className="dashboard-grid">
            
// //             {/* Left Column: Form */}
// //             <section className="form-section">
// //               <div className="card">
// //                 <div className="card-header">
// //                   <h2>Register New Supply</h2>
// //                 </div>
                
// //                 {message && (
// //                   <div className={`notification ${message.includes("Error") ? "error" : "success"}`}>
// //                     {message}
// //                   </div>
// //                 )}

// //                 <form onSubmit={handleSubmit}>
// //                   <div className="input-group two-col">
// //                     <div className="input-wrapper">
// //                       <label>Full Name</label>
// //                       <div className="input-field">
// //                         <UserIcon />
// //                         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ex: John Doe" required />
// //                       </div>
// //                     </div>
// //                     <div className="input-wrapper">
// //                       <label>Contact Number</label>
// //                       <div className="input-field">
// //                         <PhoneIcon />
// //                         <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="+94 77..." required />
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="input-wrapper">
// //                     <label>Email Address</label>
// //                     <div className="input-field">
// //                       <MailIcon />
// //                       <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="supplier@email.com" required />
// //                     </div>
// //                   </div>

// //                   <div className="input-wrapper">
// //                     <label>Pickup Address</label>
// //                     <div className="input-field">
// //                       <MapIcon />
// //                       <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="House No, Street, City" required />
// //                     </div>
// //                   </div>

// //                   <div className="input-wrapper">
// //                     <label>Stock Quantity (kg)</label>
// //                     <div className="input-field">
// //                       <BoxIcon />
// //                       <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="0" required />
// //                     </div>
// //                   </div>
                  
// //                   <div className="price-preview">
// //                     <span>Estimated Payout:</span>
// //                     <strong>Rs {formData.stock ? formData.stock * 10 : 0}</strong>
// //                   </div>

// //                   <button type="submit" disabled={loading} className="btn-submit">
// //                     {loading ? <span className="loader"></span> : "Submit Supply"}
// //                   </button>
// //                 </form>
// //               </div>
// //             </section>

          

// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SupplierDashboard;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./SupplierDashboard.css";

// // Modern SVG Icons
// const Icons = {
//   User: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
//   Map: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
//   Mail: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
//   Phone: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
//   Box: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
//   Check: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
//   Trending: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
// };

// const SupplierDashboard = () => {
//   const [formData, setFormData] = useState({ name: "", address: "", email: "", contact: "", stock: "" });
//   const [loading, setLoading] = useState(false);
//   const [supplies, setSupplies] = useState([]); 
//   const [showAgreementPopup, setShowAgreementPopup] = useState(true);
//   const [showPaymentPopup, setShowPaymentPopup] = useState(false);

//   const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
//   const token = userInfo?.token;
//   const config = { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } };

//   const fetchSupplies = async () => {
//     if (!token) return;
//     try {
//       const res = await axios.get("https://vrl-product-backend-stru.onrender.com/api/suppliers/mine", config);
//       setSupplies(res.data);
//     } catch (err) { console.error(err); }
//   };

//   useEffect(() => { if (!showAgreementPopup && token) fetchSupplies(); }, [showAgreementPopup, token]);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const payload = { name: formData.name, address: formData.address, email: formData.email, contactNo: formData.contact, quantity: Number(formData.stock), price: 10 };
//       await axios.post("https://vrl-product-backend-stru.onrender.com/api/suppliers", payload, config);
//       setShowPaymentPopup(true);
//     } catch (error) { alert("Error submitting"); } finally { setLoading(false); }
//   };

//   const handlePaymentConfirm = () => {
//     setShowPaymentPopup(false);
//     setFormData({ name: "", address: "", email: "", contact: "", stock: "" });
//     fetchSupplies();
//   };

//   const totalSupplied = supplies.reduce((acc, curr) => acc + curr.quantity, 0);
//   const totalEarnings = supplies.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0);

//   return (
//     <div className="dashboard-app">
//       <div className="bg-blur-elements">
//         <div className="blob blob-1"></div>
//         <div className="blob blob-2"></div>
//       </div>

//       {/* --- Agreement Modal --- */}
//       {showAgreementPopup && (
//         <div className="glass-modal-overlay">
//           <div className="glass-card agreement-modal animate-in">
//             <div className="agreement-badge">Official Partner</div>
//             <h2>Welcome to the Network</h2>
//             <p>Our fixed-price model ensures stability for every supplier in our ecosystem.</p>
//             <div className="price-orb">
//               <span>Current Rate</span>
//               <h1>Rs. 10.00 <small>/kg</small></h1>
//             </div>
//             <button className="glass-btn-primary" onClick={() => setShowAgreementPopup(false)}>Accept Terms</button>
//             <button className="glass-btn-text" onClick={() => window.history.back()}>Go Back</button>
//           </div>
//         </div>
//       )}

//       {/* --- Success Modal --- */}
//       {showPaymentPopup && (
//         <div className="glass-modal-overlay">
//           <div className="glass-card success-modal animate-pop">
//             <div className="success-icon-ring"><Icons.Check /></div>
//             <h2>Order Placed!</h2>
//             <p>Your supply has been added to our pickup queue.</p>
//             <div className="receipt-glass">
//               <div className="receipt-row"><span>Quantity:</span> <strong>{formData.stock} kg</strong></div>
//               <div className="receipt-row"><span>Payout:</span> <strong>Rs. {formData.stock * 10}</strong></div>
//             </div>
//             <button className="glass-btn-primary full" onClick={handlePaymentConfirm}>Excellent</button>
//           </div>
//         </div>
//       )}

//       {!showAgreementPopup && (
//         <main className="dashboard-content">
//           <header className="glass-header">
//             <div className="user-profile">
//               <div className="avatar">{userInfo?.name?.charAt(0) || "S"}</div>
//               <div>
//                 <h1>Hello, {userInfo?.name || "Supplier"}</h1>
//                 <p>Track your inventory and earnings in real-time.</p>
//               </div>
//             </div>
//             <div className="header-stats">
//               <div className="header-stat-item">
//                 <Icons.Trending />
//                 <div><span>Total Earnings</span> <strong>Rs. {totalEarnings.toLocaleString()}</strong></div>
//               </div>
//             </div>
//           </header>

//           <div className="dashboard-grid">
//             {/* Left: Form */}
//             <section className="glass-card form-section">
//               <div className="card-top">
//                 <h3>New Supply Entry</h3>
//                 <span className="live-tag">LIVE MARKET</span>
//               </div>
//               <form onSubmit={handleSubmit}>
//                 <div className="glass-input-group">
//                   <div className="field">
//                     <label><Icons.User /> Full Name</label>
//                     <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter full name" />
//                   </div>
//                   <div className="field">
//                     <label><Icons.Phone /> Contact</label>
//                     <input type="text" name="contact" value={formData.contact} onChange={handleChange} required placeholder="077..." />
//                   </div>
//                 </div>

//                 <div className="field">
//                   <label><Icons.Mail /> Email</label>
//                   <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email@example.com" />
//                 </div>

//                 <div className="field">
//                   <label><Icons.Map /> Pickup Address</label>
//                   <input type="text" name="address" value={formData.address} onChange={handleChange} required placeholder="Full street address" />
//                 </div>

//                 <div className="field">
//                   <label><Icons.Box /> Quantity (kg)</label>
//                   <input type="number" name="stock" value={formData.stock} onChange={handleChange} required placeholder="0.00" />
//                 </div>

//                 <div className="estimate-glass">
//                   <span>ESTIMATED PAYOUT</span>
//                   <h2>Rs. {formData.stock ? (formData.stock * 10).toLocaleString() : "0"}</h2>
//                 </div>

//                 <button type="submit" className="glass-btn-submit" disabled={loading}>
//                   {loading ? <div className="spinner"></div> : "Submit Supply Request"}
//                 </button>
//               </form>
//             </section>

//             {/* Right: History & Stats */}
//             <div className="right-column">
//               <div className="glass-card mini-stat">
//                 <div className="mini-icon"><Icons.Box /></div>
//                 <div className="mini-info">
//                   <h3>{totalSupplied} kg</h3>
//                   <p>Total Material Supplied</p>
//                 </div>
//               </div>

//               <section className="glass-card history-section">
//                 <div className="card-top">
//                   <h3>Recent Submissions</h3>
//                 </div>
//                 <div className="history-list">
//                   {supplies.length > 0 ? supplies.map((s, i) => (
//                     <div className="history-item" key={i}>
//                       <div className="h-date">{new Date(s.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</div>
//                       <div className="h-qty">{s.quantity} kg</div>
//                       <div className="h-amt">Rs. {s.quantity * s.price}</div>
//                       <div className="h-status"><span className="dot"></span> Pending</div>
//                     </div>
//                   )) : (
//                     <div className="empty-state">No supplies registered yet.</div>
//                   )}
//                 </div>
//               </section>
//             </div>
//           </div>
//         </main>
//       )}
//     </div>
//   );
// };

// export default SupplierDashboard;







import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SupplierDashboard.css";

// Icons
const UserIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const MapIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const MailIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const PhoneIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const BoxIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
const CheckIcon = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
const WalletIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>;
const TrendUpIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>;
const ClockIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const StarIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
const TruckIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>;
const CalendarIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const BellIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
const SettingsIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
const LogoutIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
const PlusIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const EyeIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
const DownloadIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;

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
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);

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
  const totalEarnings = supplies.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
  const avgQuantity = supplies.length > 0 ? Math.round(totalSupplied / supplies.length) : 0;

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Get status badge
  const getStatusBadge = (status) => {
    const statusMap = {
      pending: { class: "pending", text: "Pending" },
      approved: { class: "approved", text: "Approved" },
      completed: { class: "completed", text: "Completed" },
      rejected: { class: "rejected", text: "Rejected" },
    };
    return statusMap[status] || statusMap.pending;
  };

  return (
    <div className="dashboard-wrapper">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>

      {/* --- Agreement Modal --- */}
      {showAgreementPopup && (
        <div className="modal-overlay backdrop-blur">
          <div className="modal-card animate-pop">
            <div className="modal-header-img">
              <div className="floating-icons">
                <span className="float-icon">📦</span>
                <span className="float-icon">💰</span>
                <span className="float-icon">🚚</span>
              </div>
            </div>
            <div className="modal-content">
              <div className="modal-badge">Welcome to VRL</div>
              <h3>Supplier Agreement</h3>
              <p className="text-muted">
                To ensure fair market practices, VRL Products operates on a fixed pricing model for all suppliers.
              </p>

              <div className="price-tag">
                <div className="price-icon">
                  <WalletIcon />
                </div>
                <div className="price-details">
                  <span className="label">Fixed Rate Per Kilogram</span>
                  <span className="value">
                    <span className="currency">Rs</span> 10
                  </span>
                </div>
              </div>

              <div className="benefits-list">
                <div className="benefit-item">
                  <CheckIcon />
                  <span>Guaranteed Payment within 24hrs</span>
                </div>
                <div className="benefit-item">
                  <CheckIcon />
                  <span>Free Pickup from your location</span>
                </div>
                <div className="benefit-item">
                  <CheckIcon />
                  <span>Real-time tracking & updates</span>
                </div>
              </div>

              <p className="terms-small">
                By clicking "Accept", you agree to our <a href="#">Terms of Supply</a> & <a href="#">Service Agreement</a>.
              </p>

              <div className="modal-actions">
                <button className="btn-ghost" onClick={() => alert("Please logout.")}>
                  <LogoutIcon />
                  Decline
                </button>
                <button className="btn-primary" onClick={() => setShowAgreementPopup(false)}>
                  Accept & Continue
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- Payment Success Modal --- */}
      {showPaymentPopup && (
        <div className="modal-overlay backdrop-blur">
          <div className="modal-card payment-card animate-pop">
            <div className="confetti">
              {[...Array(20)].map((_, i) => (
                <span key={i} className="confetti-piece"></span>
              ))}
            </div>

            <div className="success-icon-wrapper">
              <div className="success-ring"></div>
              <CheckIcon />
            </div>

            <h3>Supply Registered!</h3>
            <p className="text-muted">Your supply request has been successfully submitted.</p>

            <div className="payment-summary">
              <div className="summary-header">
                <span>Order Summary</span>
                <span className="order-id">#VRL{Date.now().toString().slice(-6)}</span>
              </div>

              <div className="summary-row">
                <span>Quantity</span>
                <span className="bold">{formData.stock} kg</span>
              </div>
              <div className="summary-row">
                <span>Rate</span>
                <span className="bold">Rs 10/kg</span>
              </div>
              <div className="summary-row">
                <span>Payment Method</span>
                <span className="bold">Cash On Delivery</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Total Payout</span>
                <span className="bold highlight">Rs {formData.stock * 10}</span>
              </div>
            </div>

            <div className="next-steps">
              <h4>What's Next?</h4>
              <div className="step-item">
                <div className="step-number">1</div>
                <span>Our team will review your request</span>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <span>You'll receive a pickup confirmation</span>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <span>Payment after successful pickup</span>
              </div>
            </div>

            <button className="btn-primary full-width" onClick={handlePaymentConfirm}>
              Done
            </button>
          </div>
        </div>
      )}

      {/* --- Main Dashboard Content --- */}
      {!showAgreementPopup && (
        <div className="dashboard-layout">
          {/* Sidebar */}
          <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
            <div className="sidebar-header">
              <div className="logo">
                <div className="logo-icon">
                  <BoxIcon />
                </div>
                <span className="logo-text">VRL Supply</span>
              </div>
              <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <span></span>
              </button>
            </div>

            <nav className="sidebar-nav">
              <div className="nav-section">
                <span className="nav-label">Main Menu</span>
                <button
                  className={`nav-item ${activeTab === "dashboard" ? "active" : ""}`}
                  onClick={() => setActiveTab("dashboard")}
                >
                  <TrendUpIcon />
                  <span>Dashboard</span>
                </button>
                <button
                  className={`nav-item ${activeTab === "new-supply" ? "active" : ""}`}
                  onClick={() => setActiveTab("new-supply")}
                >
                  <PlusIcon />
                  <span>New Supply</span>
                  <span className="nav-badge">New</span>
                </button>
                <button
                  className={`nav-item ${activeTab === "history" ? "active" : ""}`}
                  onClick={() => setActiveTab("history")}
                >
                  <ClockIcon />
                  <span>History</span>
                </button>
              </div>

              <div className="nav-section">
                <span className="nav-label">Account</span>
                <button className="nav-item">
                  <SettingsIcon />
                  <span>Settings</span>
                </button>
                <button className="nav-item logout">
                  <LogoutIcon />
                  <span>Logout</span>
                </button>
              </div>
            </nav>

            <div className="sidebar-footer">
              <div className="user-card">
                <div className="user-avatar">
                  <span>{userInfo?.name?.charAt(0) || "S"}</span>
                </div>
                <div className="user-info">
                  <span className="user-name">{userInfo?.name || "Supplier"}</span>
                  <span className="user-role">Verified Supplier</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="main-content">
            {/* Top Header */}
            <header className="top-header">
              <div className="header-left">
                <h1>
                  {activeTab === "dashboard" && "Dashboard"}
                  {activeTab === "new-supply" && "New Supply"}
                  {activeTab === "history" && "Supply History"}
                </h1>
                <p className="text-muted">
                  {activeTab === "dashboard" && "Welcome back! Here's your supply overview."}
                  {activeTab === "new-supply" && "Register a new supply request."}
                  {activeTab === "history" && "View all your past supplies."}
                </p>
              </div>

              <div className="header-right">
                <div className="header-actions">
                  <button
                    className={`icon-btn notification-btn ${showNotifications ? "active" : ""}`}
                    onClick={() => setShowNotifications(!showNotifications)}
                  >
                    <BellIcon />
                    <span className="notification-dot"></span>
                  </button>

                  {showNotifications && (
                    <div className="notification-dropdown">
                      <div className="dropdown-header">
                        <h4>Notifications</h4>
                        <button className="mark-read">Mark all read</button>
                      </div>
                      <div className="notification-list">
                        <div className="notification-item unread">
                          <div className="notif-icon success">
                            <CheckIcon />
                          </div>
                          <div className="notif-content">
                            <p>Your supply #VRL001 was approved!</p>
                            <span>2 hours ago</span>
                          </div>
                        </div>
                        <div className="notification-item">
                          <div className="notif-icon info">
                            <TruckIcon />
                          </div>
                          <div className="notif-content">
                            <p>Pickup scheduled for tomorrow</p>
                            <span>5 hours ago</span>
                          </div>
                        </div>
                        <div className="notification-item">
                          <div className="notif-icon payment">
                            <WalletIcon />
                          </div>
                          <div className="notif-content">
                            <p>Payment of Rs 500 received</p>
                            <span>1 day ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="date-display">
                    <CalendarIcon />
                    <span>{new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </div>
                </div>
              </div>
            </header>

            {/* Dashboard Tab */}
            {activeTab === "dashboard" && (
              <div className="dashboard-content">
                {/* Stats Grid */}
                <div className="stats-grid">
                  <div className="stat-card gradient-purple">
                    <div className="stat-header">
                      <div className="stat-icon">
                        <BoxIcon />
                      </div>
                      <div className="stat-trend up">
                        <TrendUpIcon />
                        <span>+12%</span>
                      </div>
                    </div>
                    <div className="stat-body">
                      <h3>{totalSupplied}</h3>
                      <p>Total Supplied (kg)</p>
                    </div>
                    <div className="stat-footer">
                      <span>vs last month</span>
                    </div>
                  </div>

                  <div className="stat-card gradient-green">
                    <div className="stat-header">
                      <div className="stat-icon">
                        <WalletIcon />
                      </div>
                      <div className="stat-trend up">
                        <TrendUpIcon />
                        <span>+8%</span>
                      </div>
                    </div>
                    <div className="stat-body">
                      <h3>Rs {totalEarnings.toLocaleString()}</h3>
                      <p>Total Earnings</p>
                    </div>
                    <div className="stat-footer">
                      <span>Lifetime earnings</span>
                    </div>
                  </div>

                  <div className="stat-card gradient-blue">
                    <div className="stat-header">
                      <div className="stat-icon">
                        <TruckIcon />
                      </div>
                    </div>
                    <div className="stat-body">
                      <h3>{supplies.length}</h3>
                      <p>Total Deliveries</p>
                    </div>
                    <div className="stat-footer">
                      <span>All time</span>
                    </div>
                  </div>

                  <div className="stat-card gradient-orange">
                    <div className="stat-header">
                      <div className="stat-icon">
                        <StarIcon />
                      </div>
                    </div>
                    <div className="stat-body">
                      <h3>{avgQuantity}</h3>
                      <p>Avg. Quantity (kg)</p>
                    </div>
                    <div className="stat-footer">
                      <span>Per delivery</span>
                    </div>
                  </div>
                </div>

                {/* Charts Row */}
                <div className="charts-row">
                  <div className="chart-card">
                    <div className="chart-header">
                      <h3>Earnings Overview</h3>
                      <div className="chart-tabs">
                        <button className="active">Week</button>
                        <button>Month</button>
                        <button>Year</button>
                      </div>
                    </div>
                    <div className="chart-body">
                      <div className="bar-chart">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                          <div className="bar-group" key={day}>
                            <div
                              className="bar"
                              style={{ height: `${Math.random() * 60 + 20}%` }}
                            ></div>
                            <span className="bar-label">{day}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="chart-card donut-chart-card">
                    <div className="chart-header">
                      <h3>Supply Status</h3>
                    </div>
                    <div className="chart-body donut-body">
                      <div className="donut-chart">
                        <svg viewBox="0 0 36 36">
                          <path
                            className="donut-ring"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="donut-segment segment-1"
                            strokeDasharray="60, 100"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="donut-segment segment-2"
                            strokeDasharray="25, 100"
                            strokeDashoffset="-60"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="donut-segment segment-3"
                            strokeDasharray="15, 100"
                            strokeDashoffset="-85"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <div className="donut-center">
                          <span className="donut-value">{supplies.length}</span>
                          <span className="donut-label">Total</span>
                        </div>
                      </div>
                      <div className="donut-legend">
                        <div className="legend-item">
                          <span className="legend-dot completed"></span>
                          <span>Completed (60%)</span>
                        </div>
                        <div className="legend-item">
                          <span className="legend-dot pending"></span>
                          <span>Pending (25%)</span>
                        </div>
                        <div className="legend-item">
                          <span className="legend-dot processing"></span>
                          <span>Processing (15%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Supplies */}
                <div className="recent-section">
                  <div className="section-header">
                    <h3>Recent Supplies</h3>
                    <button className="btn-link" onClick={() => setActiveTab("history")}>
                      View All →
                    </button>
                  </div>

                  <div className="table-container">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Date</th>
                          <th>Quantity</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {supplies.slice(0, 5).map((supply, index) => {
                          const status = getStatusBadge(supply.status || "pending");
                          return (
                            <tr key={supply._id || index}>
                              <td className="order-id">#VRL{(supply._id || "").slice(-6).toUpperCase() || `00${index + 1}`}</td>
                              <td>{formatDate(supply.createdAt || new Date())}</td>
                              <td>{supply.quantity} kg</td>
                              <td className="amount">Rs {supply.quantity * supply.price}</td>
                              <td>
                                <span className={`status-badge ${status.class}`}>{status.text}</span>
                              </td>
                              <td>
                                <div className="table-actions">
                                  <button className="action-btn" title="View">
                                    <EyeIcon />
                                  </button>
                                  <button className="action-btn" title="Download">
                                    <DownloadIcon />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                        {supplies.length === 0 && (
                          <tr>
                            <td colSpan="6" className="empty-state">
                              <div className="empty-content">
                                <BoxIcon />
                                <p>No supplies yet</p>
                                <button className="btn-primary small" onClick={() => setActiveTab("new-supply")}>
                                  Create First Supply
                                </button>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="quick-actions">
                  <h3>Quick Actions</h3>
                  <div className="actions-grid">
                    <button className="action-card" onClick={() => setActiveTab("new-supply")}>
                      <div className="action-icon gradient-purple">
                        <PlusIcon />
                      </div>
                      <span>New Supply</span>
                    </button>
                    <button className="action-card">
                      <div className="action-icon gradient-green">
                        <DownloadIcon />
                      </div>
                      <span>Download Report</span>
                    </button>
                    <button className="action-card">
                      <div className="action-icon gradient-blue">
                        <MailIcon />
                      </div>
                      <span>Contact Support</span>
                    </button>
                    <button className="action-card">
                      <div className="action-icon gradient-orange">
                        <SettingsIcon />
                      </div>
                      <span>Settings</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* New Supply Tab */}
            {activeTab === "new-supply" && (
              <div className="new-supply-content">
                <div className="form-layout">
                  <div className="form-card">
                    <div className="card-header">
                      <div className="header-icon">
                        <BoxIcon />
                      </div>
                      <div>
                        <h2>Register New Supply</h2>
                        <p>Fill in the details below to register your supply</p>
                      </div>
                    </div>

                    {message && (
                      <div className={`notification ${message.includes("Error") ? "error" : "success"}`}>
                        <span className="notif-icon">{message.includes("Error") ? "✕" : "✓"}</span>
                        {message}
                      </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      <div className="form-section">
                        <h3 className="section-title">Personal Information</h3>
                        <div className="input-grid">
                          <div className="input-wrapper">
                            <label>
                              <UserIcon />
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your full name"
                              required
                            />
                          </div>
                          <div className="input-wrapper">
                            <label>
                              <PhoneIcon />
                              Contact Number
                            </label>
                            <input
                              type="text"
                              name="contact"
                              value={formData.contact}
                              onChange={handleChange}
                              placeholder="+94 77 123 4567"
                              required
                            />
                          </div>
                        </div>

                        <div className="input-wrapper full-width">
                          <label>
                            <MailIcon />
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-section">
                        <h3 className="section-title">Supply Details</h3>
                        <div className="input-wrapper full-width">
                          <label>
                            <MapIcon />
                            Pickup Address
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="House No, Street, City, State"
                            required
                          />
                        </div>

                        <div className="input-wrapper stock-input">
                          <label>
                            <BoxIcon />
                            Stock Quantity (kg)
                          </label>
                          <div className="stock-field">
                            <input
                              type="number"
                              name="stock"
                              value={formData.stock}
                              onChange={handleChange}
                              placeholder="0"
                              min="1"
                              required
                            />
                            <span className="unit">KG</span>
                          </div>
                        </div>
                      </div>

                      <div className="payout-card">
                        <div className="payout-header">
                          <WalletIcon />
                          <span>Estimated Payout</span>
                        </div>
                        <div className="payout-body">
                          <div className="payout-row">
                            <span>Quantity</span>
                            <span>{formData.stock || 0} kg</span>
                          </div>
                          <div className="payout-row">
                            <span>Rate</span>
                            <span>Rs 10/kg</span>
                          </div>
                          <div className="payout-divider"></div>
                          <div className="payout-row total">
                            <span>Total</span>
                            <span className="payout-amount">Rs {formData.stock ? formData.stock * 10 : 0}</span>
                          </div>
                        </div>
                      </div>

                      <button type="submit" disabled={loading} className="btn-submit">
                        {loading ? (
                          <span className="loader"></span>
                        ) : (
                          <>
                            <TruckIcon />
                            Submit Supply Request
                          </>
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Side Info */}
                  <div className="form-sidebar">
                    <div className="info-card">
                      <div className="info-icon">
                        <TruckIcon />
                      </div>
                      <h4>Free Pickup</h4>
                      <p>We provide free pickup service from your location</p>
                    </div>

                    <div className="info-card">
                      <div className="info-icon">
                        <ClockIcon />
                      </div>
                      <h4>Quick Processing</h4>
                      <p>Your request will be processed within 24 hours</p>
                    </div>

                    <div className="info-card">
                      <div className="info-icon">
                        <WalletIcon />
                      </div>
                      <h4>Instant Payment</h4>
                      <p>Receive payment immediately after successful pickup</p>
                    </div>

                    <div className="help-card">
                      <h4>Need Help?</h4>
                      <p>Our support team is available 24/7</p>
                      <a href="tel:+94771234567" className="help-link">
                        <PhoneIcon />
                        +94 77 123 4567
                      </a>
                      <a href="mailto:support@vrl.com" className="help-link">
                        <MailIcon />
                        support@vrl.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* History Tab */}
            {activeTab === "history" && (
              <div className="history-content">
                <div className="history-header">
                  <div className="search-filter">
                    <div className="search-box">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="M21 21l-4.35-4.35"></path>
                      </svg>
                      <input type="text" placeholder="Search by ID, date..." />
                    </div>
                    <div className="filter-group">
                      <select>
                        <option>All Status</option>
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Completed</option>
                      </select>
                      <select>
                        <option>Last 30 days</option>
                        <option>Last 60 days</option>
                        <option>Last 90 days</option>
                        <option>All time</option>
                      </select>
                    </div>
                  </div>
                  <button className="btn-export">
                    <DownloadIcon />
                    Export
                  </button>
                </div>

                <div className="history-table-container">
                  <table className="data-table full-table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {supplies.map((supply, index) => {
                        const status = getStatusBadge(supply.status || "pending");
                        return (
                          <tr key={supply._id || index}>
                            <td className="order-id">#VRL{(supply._id || "").slice(-6).toUpperCase() || `00${index + 1}`}</td>
                            <td>{supply.name}</td>
                            <td>{formatDate(supply.createdAt || new Date())}</td>
                            <td>{supply.quantity} kg</td>
                            <td className="amount">Rs {supply.quantity * supply.price}</td>
                            <td>
                              <span className={`status-badge ${status.class}`}>{status.text}</span>
                            </td>
                            <td>
                              <div className="table-actions">
                                <button className="action-btn" title="View">
                                  <EyeIcon />
                                </button>
                                <button className="action-btn" title="Download">
                                  <DownloadIcon />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                  {supplies.length === 0 && (
                    <div className="empty-table-state">
                      <BoxIcon />
                      <h3>No Supplies Found</h3>
                      <p>You haven't made any supplies yet.</p>
                      <button className="btn-primary" onClick={() => setActiveTab("new-supply")}>
                        Create Your First Supply
                      </button>
                    </div>
                  )}
                </div>

                {supplies.length > 0 && (
                  <div className="table-footer">
                    <span className="showing-text">Showing {supplies.length} of {supplies.length} entries</span>
                    <div className="pagination">
                      <button disabled>Previous</button>
                      <button className="active">1</button>
                      <button>2</button>
                      <button>3</button>
                      <button>Next</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
};

export default SupplierDashboard;
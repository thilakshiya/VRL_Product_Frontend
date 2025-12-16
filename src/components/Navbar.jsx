
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo01 from "../assets/logo01.png";
import "./Navbar.css";

// --- Icons (Feather Icons Style) ---
const MenuIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const CloseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const ChevronDown = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>;
const CartIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>;
const SearchIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const LogoutIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => location.pathname === path ? "active" : "";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateUserStatus = () => {
    const stored = localStorage.getItem("userInfo");
    setCurrentUser(stored ? JSON.parse(stored) : null);
  };

  useEffect(() => {
    updateUserStatus();
    window.addEventListener("auth-change", updateUserStatus);
    setIsMobileOpen(false);
    setIsProfileOpen(false);
    return () => window.removeEventListener("auth-change", updateUserStatus);
  }, [location]);

  const handleLogout = () => {
    setIsProfileOpen(false);
    setIsMobileOpen(false);
    setShowConfirm(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("userInfo");
    window.dispatchEvent(new Event("auth-change"));
    setCurrentUser(null);
    setShowConfirm(false);
    navigate("/");
  };

  return (
    <>
      {/* Navbar Outer Wrapper */}
      <nav className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-glass">
          
          {/* Left: Logo */}
          <Link to="/" className="navbar-logo">
            <img src={Logo01} alt="VRL" className="logo-img" />
            <span className="logo-text">VRL<span className="logo-accent">Product</span></span>
          </Link>

          {/* Center: Links (Desktop) */}
          <div className="nav-center">
            <ul className="nav-links-container">
              <li className="nav-item"><Link to="/" className={`nav-pill ${isActive("/")}`}>Home</Link></li>
              <li className="nav-item"><Link to="/product" className={`nav-pill ${isActive("/product")}`}>Products</Link></li>
              <li className="nav-item"><Link to="/about" className={`nav-pill ${isActive("/about")}`}>About</Link></li>
              {currentUser?.role === "user" && (
                <li className="nav-item"><Link to="/my-orders" className={`nav-pill ${isActive("/my-orders")}`}>Orders</Link></li>
              )}
              {currentUser?.role === "supplier" && (
                <li className="nav-item"><Link to="/my-supplies" className={`nav-pill ${isActive("/my-supplies")}`}>Supplies</Link></li>
              )}
            </ul>
          </div>

          {/* Right: Actions */}
          <div className="nav-right">
            
            {/* Search Trigger */}
            <button className="action-icon-btn search-btn">
              <SearchIcon />
            </button>

            {currentUser ? (
              <>
                <Link to="/cart" className="action-icon-btn cart-desktop">
                  <CartIcon />
                  {/* <span className="dot-badge"></span> */}
                </Link>

                <div className="profile-wrapper">
                  <button 
                    className={`profile-btn ${isProfileOpen ? "active" : ""}`} 
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                  >
                    <div className="avatar-gradient">{currentUser.name.charAt(0)}</div>
                    <span className="user-name-text">{currentUser.name.split(" ")[0]}</span>
                    <ChevronDown />
                  </button>

                  <div className={`dropdown-card ${isProfileOpen ? "show" : ""}`}>
                    <div className="dropdown-user-info">
                      <p className="label">Signed in as</p>
                      <p className="value">{currentUser.email}</p>
                    </div>
                    <div className="divider"></div>
                    <Link to="/profile" className="dropdown-row">Settings</Link>
                    <button className="dropdown-row danger" onClick={handleLogout}>
                      <LogoutIcon /> Sign Out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="auth-stack">
                <Link to="/login" className="link-text">Log in</Link>
                <Link to="/register" className="btn-gradient">Get Started</Link>
              </div>
            )}

            {/* Mobile Toggle */}
            <button className="mobile-toggle-btn" onClick={() => setIsMobileOpen(!isMobileOpen)}>
              {isMobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-container ${isMobileOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
            <div className="mobile-links">
                <Link to="/" className="mobile-link-large">Home</Link>
                <Link to="/product" className="mobile-link-large">Products</Link>
                <Link to="/about" className="mobile-link-large">About</Link>
                {currentUser && <Link to="/cart" className="mobile-link-large">My Cart</Link>}
            </div>
            
            <div className="mobile-footer">
                {currentUser ? (
                    <button className="btn-gradient full-width" onClick={handleLogout}>Sign Out</button>
                ) : (
                    <Link to="/login" className="btn-gradient full-width">Log In / Sign Up</Link>
                )}
            </div>
        </div>
      </div>

      {/* Logout Modal */}
      {showConfirm && (
        <div className="modal-overlay-blur">
          <div className="modal-card">
            <div className="modal-header-icon">
               <LogoutIcon />
            </div>
            <h3>Sign out?</h3>
            <p>You will need to log in again to access your account.</p>
            <div className="modal-grid-btns">
              <button className="btn-secondary" onClick={() => setShowConfirm(false)}>Cancel</button>
              <button className="btn-primary-danger" onClick={confirmLogout}>Sign Out</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;




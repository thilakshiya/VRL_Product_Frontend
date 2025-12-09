

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";


// import HeroImage from "../assets/image01.avif";
// import ProductImg1 from "../assets/image02.jpg";
// import ProductImg2 from "../assets/image03.jpeg";


// const CheckIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
// const TruckIcon = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>;
// const StarIcon = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
// const ShieldIcon = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
// const ArrowRight = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
// const CartIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>;

// function Home() {
//   // Mock data for featured products
//   const featuredProducts = [
//     { id: 1, name: "Premium Cocoa", price: 1200, img: ProductImg1, category: "Raw Material" },
//     { id: 2, name: "Industrial Steel", price: 5400, img: ProductImg2, category: "Construction" },
//     { id: 3, name: "Organic Spices", price: 850, img: HeroImage, category: "Agriculture" },
//     { id: 4, name: "Textile Fabric", price: 2100, img: ProductImg1, category: "Textile" },
//   ];

//   return (
//     <div className="home-container">
      
//       {/* --- 1. HERO SECTION --- */}
//       <header className="hero-section">
//         <div className="hero-content">
//           <span className="hero-badge">New Collection 2025</span>
//           <h1 className="hero-title">
//             Quality Products <br /> 
//             <span className="highlight">Delivered Fast.</span>
//           </h1>
//           <p className="hero-subtitle">
//             Your trusted partner for premium supplies. We connect suppliers and customers with a seamless, secure platform.
//           </p>
          
//           <div className="hero-actions">
//             <Link to="/product" className="btn-primary">Shop Now</Link>
//             <Link to="/register" className="btn-outline">Join Us</Link>
//           </div>

//           <div className="hero-stats">
//             <div className="stat-item"><strong>5k+</strong> <span>Products</span></div>
//             <div className="stat-item"><strong>1.2k+</strong> <span>Users</span></div>
//             <div className="stat-item"><strong>24/7</strong> <span>Support</span></div>
//           </div>
//         </div>

//         <div className="hero-image-container">
//           <img src={HeroImage} alt="VRL Hero" className="hero-main-img" />
//           <div className="floating-card card-1">
//             <CheckIcon /> <span>Verified Quality</span>
//           </div>
//         </div>
//       </header>

   

//       {/* --- 3. FEATURES SECTION --- */}
//       <section className="features-section">
//         <div className="section-header">
//           <h2>Why Choose VRL?</h2>
//           <p>We provide the best experience for our customers.</p>
//         </div>

//         <div className="features-grid">
//           <div className="feature-card">
//             <div className="icon-box"><ShieldIcon /></div>
//             <h3>Trusted Platform</h3>
//             <p>Secure payments and verified suppliers ensure a safe buying experience every time.</p>
//           </div>
//           <div className="feature-card">
//             <div className="icon-box"><TruckIcon /></div>
//             <h3>Fast Delivery</h3>
//             <p>Our optimized logistics network ensures your products arrive on time, every time.</p>
//           </div>
//           <div className="feature-card">
//             <div className="icon-box"><StarIcon /></div>
//             <h3>Premium Quality</h3>
//             <p>We strictly quality check every product listed to maintain high standards.</p>
//           </div>
//         </div>
//       </section>

//       {/* --- 4. FEATURED PRODUCTS (New) --- */}
//       <section className="featured-products">
//         <div className="section-header">
//           <h2>Best Selling Products</h2>
//           <p>Grab the best deals before stocks run out.</p>
//         </div>
        
//         <div className="products-grid">
//           {featuredProducts.map((item) => (
//             <div key={item.id} className="product-card-mini">
//               <div className="pc-img-wrap">
//                 <img src={item.img} alt={item.name} />
//                 <span className="category-tag">{item.category}</span>
//               </div>
//               <div className="pc-details">
//                 <h4>{item.name}</h4>
//                 <div className="pc-bottom">
//                   <span className="pc-price">Rs {item.price}</span>
//                   <Link to="/product" className="pc-btn"><CartIcon /></Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="center-btn">
//           <Link to="/product" className="btn-text">View All Products <ArrowRight /></Link>
//         </div>
//       </section>

//       {/* --- 5. SUPPLIER CTA BANNER (New) --- */}
//       <section className="supplier-banner">
//         <div className="banner-content">
//           <h2>Grow Your Business with VRL</h2>
//           <p>Join thousands of suppliers selling their products to a global audience. Low fees, high reach.</p>
//           <Link to="/register" className="btn-white">Start Selling Today</Link>
//         </div>
//       </section>

//       {/* --- 6. TESTIMONIALS (New) --- */}
//       <section className="testimonials-section">
//         <div className="section-header">
//           <h2>What Our Clients Say</h2>
//         </div>
//         <div className="testimonials-grid">
//           <div className="testimonial-card">
//             <p>"VRL has completely transformed how we source raw materials. The delivery is always on time."</p>
//             <div className="user-info">
//               <div className="avatar">JD</div>
//               <div><strong>John Doe</strong><span>Construction Mgr.</span></div>
//             </div>
//           </div>
//           <div className="testimonial-card">
//             <p>"As a supplier, the fixed price model ensures I always get paid fairly without negotiation hassles."</p>
//             <div className="user-info">
//               <div className="avatar">AS</div>
//               <div><strong>Anita S.</strong><span>Organic Farmer</span></div>
//             </div>
//           </div>
//           <div className="testimonial-card">
//             <p>"The customer support is outstanding. They helped me track my bulk order at every step."</p>
//             <div className="user-info">
//               <div className="avatar">MK</div>
//               <div><strong>Mike K.</strong><span>Retailer</span></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- 7. NEWSLETTER FOOTER (New) --- */}
//       <footer className="newsletter-footer">
//         <div className="newsletter-content">
//           <h3>Subscribe to our Newsletter</h3>
//           <p>Get the latest product updates and exclusive offers sent to your inbox.</p>
//           <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
//             <input type="email" placeholder="Enter your email address" />
//             <button>Subscribe</button>
//           </form>
//         </div>
//       </footer>

//     </div>
//   );
// }

// export default Home;



import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ChatBot from "./ChatBot"; 

// Import Images (Ensure paths are correct)
import HeroImage from "../assets/Copilot_20251208_144053-removebg-preview (1).png";
import ProductImg1 from "../assets/image02.jpg";
import ProductImg2 from "../assets/image03.jpeg";

// Icons
const CheckIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
const TruckIcon = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>;
const StarIcon = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
const ShieldIcon = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const ArrowRight = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
const CartIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>;

function Home() {
  const featuredProducts = [
    { id: 1, name: "Premium Cocoa", price: 1200, img: ProductImg1, category: "Raw Material" },
    { id: 2, name: "Industrial Steel", price: 5400, img: ProductImg2, category: "Construction" },
    { id: 3, name: "Organic Spices", price: 850, img: HeroImage, category: "Agriculture" },
    { id: 4, name: "Textile Fabric", price: 2100, img: ProductImg1, category: "Textile" },
  ];

  return (
    <div className="home-container">
      
      {/* --- Animated Background Shapes --- */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* --- 1. HERO SECTION --- */}
      <header className="hero-section">
        <div className="hero-content glass-card">
          <span className="hero-badge">New Collection 2025</span>
          <h1 className="hero-title">
            Quality Products <br /> 
            <span className="highlight">Delivered Fast.</span>
          </h1>
          <p className="hero-subtitle">
            Your trusted partner for premium supplies. We connect suppliers and customers with a seamless, secure platform.
          </p>
          
          <div className="hero-actions">
            <Link to="/product" className="btn-primary">Shop Now</Link>
            <Link to="/register" className="btn-outline">Join Us</Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item"><strong>5k+</strong> <span>Products</span></div>
            <div className="stat-item"><strong>1.2k+</strong> <span>Users</span></div>
            <div className="stat-item"><strong>24/7</strong> <span>Support</span></div>
          </div>
        </div>

        <div className="hero-image-container">
          <img src={HeroImage} alt="VRL Hero" className="hero-main-img" />
          <div className="floating-card glass-card-small">
            <CheckIcon /> <span>Verified Quality</span>
          </div>
        </div>
      </header>

      {/* --- 3. FEATURES SECTION --- */}
      <section className="features-section">
        <div className="section-header">
          <h2>Why Choose VRL?</h2>
          <p>We provide the best experience for our customers.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card glass-panel">
            <div className="icon-box"><ShieldIcon /></div>
            <h3>Trusted Platform</h3>
            <p>Secure payments and verified suppliers ensure a safe buying experience every time.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="icon-box"><TruckIcon /></div>
            <h3>Fast Delivery</h3>
            <p>Our optimized logistics network ensures your products arrive on time, every time.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="icon-box"><StarIcon /></div>
            <h3>Premium Quality</h3>
            <p>We strictly quality check every product listed to maintain high standards.</p>
          </div>
        </div>
      </section>

      {/* --- 4. FEATURED PRODUCTS --- */}
      <section className="featured-products">
        <div className="section-header">
          <h2>Best Selling Products</h2>
          <p>Grab the best deals before stocks run out.</p>
        </div>
        
        <div className="products-grid">
          {featuredProducts.map((item) => (
            <div key={item.id} className="product-card-mini glass-panel">
              <div className="pc-img-wrap">
                <img src={item.img} alt={item.name} />
                <span className="category-tag">{item.category}</span>
              </div>
              <div className="pc-details">
                <h4>{item.name}</h4>
                <div className="pc-bottom">
                  <span className="pc-price">Rs {item.price}</span>
                  <Link to="/product" className="pc-btn"><CartIcon /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="center-btn">
          <Link to="/product" className="btn-text">View All Products <ArrowRight /></Link>
        </div>
      </section>

      {/* --- 5. SUPPLIER CTA BANNER --- */}
      <section className="supplier-banner glass-panel">
        <div className="banner-content">
          <h2>Grow Your Business with VRL</h2>
          <p>Join thousands of suppliers selling their products to a global audience. Low fees, high reach.</p>
          <Link to="/register" className="btn-white">Start Selling Today</Link>
        </div>
      </section>

      {/* --- 6. TESTIMONIALS --- */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card glass-panel">
            <p>"VRL has completely transformed how we source raw materials. The delivery is always on time."</p>
            <div className="user-info">
              <div className="avatar">JD</div>
              <div><strong>John Doe</strong><span>Construction Mgr.</span></div>
            </div>
          </div>
          <div className="testimonial-card glass-panel">
            <p>"As a supplier, the fixed price model ensures I always get paid fairly without negotiation hassles."</p>
            <div className="user-info">
              <div className="avatar">AS</div>
              <div><strong>Anita S.</strong><span>Organic Farmer</span></div>
            </div>
          </div>
          <div className="testimonial-card glass-panel">
            <p>"The customer support is outstanding. They helped me track my bulk order at every step."</p>
            <div className="user-info">
              <div className="avatar">MK</div>
              <div><strong>Mike K.</strong><span>Retailer</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. NEWSLETTER FOOTER --- */}
      <footer className="newsletter-footer glass-panel">
        <div className="newsletter-content">
          <h3>Subscribe to our Newsletter</h3>
          <p>Get the latest product updates and exclusive offers sent to your inbox.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </form>
        </div>
      </footer>
      <ChatBot />

    </div>
  );
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Truck, 
  Star, 
  Check, 
  Leaf, 
  Users 
} from 'lucide-react';

// --- MOCK DATA ---
const productsData = [
  { id: 1, name: "Premium Cocoa", price: 1200, img: "src/assets/veg.png" },
  { id: 2, name: "Industrial Steel", price: 5400, img: "src/assets/pro.webp" },
  { id: 3, name: "Organic Spices", price: 850, img: "src/assets/pro02.webp" },
];

const LandingPage = () => {
  return (
    <div style={styles.container}>
      {/* GLOBAL STYLES FOR FONTS, HOVER EFFECTS, AND MEDIA QUERIES */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Inter:wght@300;400;600&display=swap');
          
          body { margin: 0; padding: 0; box-sizing: border-box; }
          * { box-sizing: border-box; }

          /* Hover Effects */
          .hover-card:hover { transform: translateY(-5px); transition: transform 0.3s ease; }
          .btn-hover:hover { opacity: 0.9; transform: scale(1.02); }
          .img-zoom:hover { transform: scale(1.05); transition: transform 0.5s ease; }

          /* Responsive Grid Logic */
          .responsive-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
          .responsive-flex { display: flex; flex-wrap: wrap; }
          
          @media (max-width: 900px) {
            .hero-wrap { flex-direction: column-reverse; text-align: center; }
            .hero-left { align-items: center; padding-right: 0 !important; }
            .hero-stats { justify-content: center; width: 100%; }
            .sus-section { flex-direction: column; }
          }
        `}
      </style>

      {/* --- HERO SECTION --- */}
      <header className="hero-wrap" style={styles.heroSection}>
        <div className="hero-left" style={styles.heroLeft}>
          <h1 style={styles.h1}>
            Quality Products <br /> 
            <span style={styles.highlight}>Delivered Fast.</span>
          </h1>
          <p style={styles.subtitle}>
            Your trusted partner for premium supplies. We connect suppliers and customers with a seamless, secure platform.
          </p>
          
          <div style={styles.heroActions}>
            <Link to="/product" className="btn-hover" style={styles.btnPrimary}>Shop Now</Link>
            <Link to="/register" className="btn-hover" style={styles.btnSecondary}>Join Us</Link>
          </div>

          <div className="hero-stats" style={styles.statsBar}>
            <div style={styles.statItem}>
              <strong style={styles.statNum}>5k+</strong> <span style={styles.statLabel}>Products</span>
            </div>
            <div style={styles.divider}></div>
            <div style={styles.statItem}>
              <strong style={styles.statNum}>1.2k+</strong> <span style={styles.statLabel}>Users</span>
            </div>
            <div style={styles.divider}></div>
            <div style={styles.statItem}>
              <Leaf size={18} color="#568c76"/> <span style={styles.statLabel}>24/7 Support</span>
            </div>
          </div>
        </div>

        <div style={styles.heroRight}>
          <img 
            src="src/assets/Copilot_20251208_144053-removebg-preview (1).png" 
            alt="Hero" 
            style={styles.heroImg} 
          />
        </div>
      </header>

      {/* --- FEATURES (ICONS) --- */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.h2}>Why Choose VRL?</h2>
        </div>

        <div className="responsive-grid">
          {/* Card 1 */}
          <div className="hover-card" style={styles.featureCard}>
            <div style={styles.iconBox}><Shield size={32} /></div>
            <h3 style={styles.h3}>Trusted Platform</h3>
            <p style={styles.pSmall}>Secure payments and verified suppliers ensure a safe buying experience.</p>
            <span style={styles.linkText}>Read More</span>
          </div>
          {/* Card 2 */}
          <div className="hover-card" style={styles.featureCard}>
            <div style={styles.iconBox}><Truck size={32} /></div>
            <h3 style={styles.h3}>Fast Delivery</h3>
            <p style={styles.pSmall}>Optimized logistics network ensures your products arrive on time.</p>
            <span style={styles.linkText}>Read More</span>
          </div>
          {/* Card 3 */}
          <div className="hover-card" style={styles.featureCard}>
            <div style={styles.iconBox}><Star size={32} /></div>
            <h3 style={styles.h3}>Premium Quality</h3>
            <p style={styles.pSmall}>Strict quality checks for top-notch products every time.</p>
            <span style={styles.linkText}>Read More</span>
          </div>
           {/* Card 4 */}
           <div className="hover-card" style={styles.featureCard}>
            <div style={styles.iconBox}><Leaf size={32} /></div>
            <h3 style={styles.h3}>Eco-Friendly</h3>
            <p style={styles.pSmall}>We support sustainable trading practices globally.</p>
            <span style={styles.linkText}>Read More</span>
          </div>
        </div>
      </section>

      {/* --- PRODUCTS SECTION --- */}
      <section style={styles.section}>
        <div style={{...styles.sectionHeader, textAlign: 'left'}}>
          <h2 style={styles.h2}>Best Selling Products</h2>
          <p style={styles.p}>Grab the best deals before stocks run out.</p>
        </div>
        
        <div className="responsive-grid">
          {productsData.map((item) => (
            <div key={item.id} className="hover-card" style={styles.productCard}>
              <div style={styles.productImgWrap}>
                <img src={item.img} alt={item.name} className="img-zoom" style={styles.productImg} />
              </div>
              <div style={styles.productDetails}>
                <h4 style={styles.h4}>{item.name}</h4>
                <p style={styles.price}>Rs {item.price}</p>
                <button className="btn-hover" style={styles.btnAdd}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SUSTAINABLE SECTION --- */}
      <section className="sus-section" style={styles.sustainableSection}>
        <div style={styles.susContent}>
          <h2 style={styles.h2}>Sustainable Trading</h2>
          <p style={styles.p}>We bridge the gap between suppliers and eco-conscious businesses.</p>
          
          <div style={styles.susFeatureList}>
            <div style={styles.susItem}>
              <div style={{...styles.susIcon, background: '#568c76'}}><Check color="white" /></div>
              <div>
                <h4 style={styles.h4Small}>Supplier Partnership</h4>
                <p style={styles.pSmall}>Join our network of verified suppliers who prioritize sustainable practices.</p>
              </div>
            </div>
            <div style={styles.susItem}>
              <div style={{...styles.susIcon, background: '#2d4f43'}}><Leaf color="white" /></div>
              <div>
                <h4 style={styles.h4Small}>Eco-Conscious Buyers</h4>
                <p style={styles.pSmall}>Connect with businesses committed to environmentally friendly products.</p>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.susImageWrap}>
           <img 
             src="src/assets/image5.jpeg" 
             alt="Sustainable" 
             style={styles.susImg} 
           />
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.h2}>What Our Clients Say</h2>
          <p style={styles.p}>Join thousands of suppliers selling their products to a global audience.</p>
        </div>
        
        <div className="responsive-grid">
          {/* Testimonial 1 */}
          <div className="hover-card" style={styles.testimonialCard}>
            <div style={styles.userHeader}>
               <img src="https://i.pravatar.cc/150?img=68" alt="John" style={styles.avatar}/>
               <div>
                 <strong style={styles.userName}>John Doe</strong>
                 <span style={styles.userRole}>Construction Mgr.</span>
               </div>
            </div>
            <p style={styles.quote}>"VRL has completely transformed how we source raw materials. The delivery is always on time."</p>
            <button style={styles.btnPill}>+ See Profile</button>
          </div>
          
          {/* Testimonial 2 */}
          <div className="hover-card" style={styles.testimonialCard}>
            <div style={styles.userHeader}>
               <img src="https://i.pravatar.cc/150?img=44" alt="Anita" style={styles.avatar}/>
               <div>
                 <strong style={styles.userName}>Anita S.</strong>
                 <span style={styles.userRole}>Organic Farmer</span>
               </div>
            </div>
            <p style={styles.quote}>"As a supplier, the fixed price model ensures I always get paid fairly without negotiation hassles."</p>
            <button style={styles.btnPill}>+ See Profile</button>
          </div>

          {/* Testimonial 3 */}
          <div className="hover-card" style={styles.testimonialCard}>
            <div style={styles.userHeader}>
               <img src="src/assets/images.jpeg" alt="Mike" style={styles.avatar}/>
               <div>
                 <strong style={styles.userName}>Mike K.</strong>
                 <span style={styles.userRole}>Retailer</span>
               </div>
            </div>
            <p style={styles.quote}>"The customer support is outstanding. They helped me track my bulk order at every step."</p>
            <button style={styles.btnPill}>+ See Profile</button>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      {/* <footer style={styles.footer}>
         <h2 style={{...styles.h2, color: 'white'}}>Grow Your Business with VRL</h2>
         <p style={{color: '#ebf3f0', marginBottom: '30px'}}>Ready to get started?</p>
         <Link to="/register" className="btn-hover" style={styles.btnWhite}>Start Selling Today</Link>
      </footer> */}

    </div>
  );
};

// --- INLINE STYLES OBJECT ---
const styles = {
  container: {
    fontFamily: '"Inter", sans-serif',
    backgroundColor: '#f8fbf9',
    color: '#1f2b26',
    overflowX: 'hidden',
    width: '100%',
  },
  
  // TYPOGRAPHY
  h1: {
    fontFamily: '"Merriweather", serif',
    color: '#2d4f43',
    fontSize: '3.5rem',
    fontWeight: '700',
    lineHeight: '1.1',
    margin: '0 0 20px 0',
  },
  h2: {
    fontFamily: '"Merriweather", serif',
    color: '#2d4f43',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '15px',
  },
  h3: {
    fontFamily: '"Merriweather", serif',
    color: '#2d4f43',
    fontSize: '1.3rem',
    margin: '15px 0 10px 0',
  },
  h4: {
    fontFamily: '"Merriweather", serif',
    fontSize: '1.2rem',
    margin: '0 0 5px 0',
    color: '#2d4f43',
  },
  h4Small: {
    fontFamily: '"Merriweather", serif',
    fontSize: '1.1rem',
    margin: '0 0 5px 0',
    color: '#2d4f43',
  },
  highlight: {
    color: '#568c76',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#6b7c75',
    lineHeight: '1.6',
    marginBottom: '35px',
    maxWidth: '480px',
  },
  p: {
    color: '#6b7c75',
    lineHeight: '1.6',
  },
  pSmall: {
    color: '#6b7c75',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },

  // HERO
  heroSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '60px 8%',
    background: 'linear-gradient(135deg, #f1f7f5 0%, #ffffff 100%)',
    minHeight: '85vh',
  },
  heroLeft: {
    flex: '1',
    zIndex: '2',
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '40px',
  },
  heroActions: {
    display: 'flex',
    gap: '15px',
    marginBottom: '50px',
  },
  btnPrimary: {
    backgroundColor: '#568c76',
    color: '#ffffff',
    padding: '14px 36px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(86, 140, 118, 0.3)',
  },
  btnSecondary: {
    backgroundColor: '#ffffff',
    color: '#2d4f43',
    padding: '13px 35px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    border: '1px solid #d1dcd7',
    cursor: 'pointer',
  },
  statsBar: {
    background: '#edf4f2',
    padding: '15px 30px',
    borderRadius: '16px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '25px',
    width: 'fit-content',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  statNum: {
    fontSize: '1.2rem',
    color: '#2d4f43',
  },
  statLabel: {
    fontSize: '0.9rem',
    color: '#6b7c75',
  },
  divider: {
    width: '1px',
    height: '20px',
    background: '#cbdad5',
  },
  heroRight: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
  },
  heroImg: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', // The Organic Blob Shape
    boxShadow: '20px 20px 0px rgba(86, 140, 118, 0.1)',
    objectFit: 'cover',
  },

  // COMMON SECTION
  section: {
    padding: '80px 8%',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '50px',
  },

  // FEATURES
  featureCard: {
    background: '#ffffff',
    padding: '30px 25px',
    borderRadius: '24px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(86, 140, 118, 0.05)',
  },
  iconBox: {
    background: '#ebf3f0',
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    color: '#568c76',
  },
  linkText: {
    color: '#568c76',
    fontWeight: '600',
    fontSize: '0.9rem',
    cursor: 'pointer',
    display: 'block',
    marginTop: '15px',
  },

  // PRODUCTS
  productCard: {
    background: '#ffffff',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(86, 140, 118, 0.08)',
  },
  productImgWrap: {
    height: '240px',
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  productImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  productDetails: {
    padding: '25px',
  },
  price: {
    fontWeight: '600',
    color: '#6b7c75',
    margin: '10px 0 20px 0',
  },
  btnAdd: {
    width: '100%',
    backgroundColor: '#568c76',
    color: 'white',
    padding: '12px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },

  // SUSTAINABLE SECTION
  sustainableSection: {
    background: '#ebf3f0',
    padding: '80px 8%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '60px',
    margin: '40px 4%',
    borderRadius: '40px',
  },
  susContent: {
    flex: '1',
  },
  susFeatureList: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  susItem: {
    display: 'flex',
    gap: '20px',
  },
  susIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
  },
  susImageWrap: {
    flex: '1',
  },
  susImg: {
    width: '100%',
    borderRadius: '30px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
  },

  // TESTIMONIALS
  testimonialCard: {
    background: '#ffffff',
    padding: '35px',
    borderRadius: '24px',
    boxShadow: '0 10px 30px rgba(86, 140, 118, 0.05)',
    display: 'flex',
    flexDirection: 'column',
  },
  userHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  userName: {
    display: 'block',
    color: '#2d4f43',
    fontSize: '1rem',
  },
  userRole: {
    fontSize: '0.85rem',
    color: '#6b7c75',
  },
  quote: {
    fontStyle: 'italic',
    color: '#568c76',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  btnPill: {
    backgroundColor: '#568c76',
    color: 'white',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '50px',
    width: 'fit-content',
    fontSize: '0.8rem',
    cursor: 'pointer',
    marginTop: 'auto',
  },

  // FOOTER
  footer: {
    background: '#2d4f43',
    color: 'white',
    textAlign: 'center',
    padding: '80px 20px',
  },
  btnWhite: {
    backgroundColor: '#ffffff',
    color: '#2d4f43',
    padding: '14px 40px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
  }
};

export default LandingPage;
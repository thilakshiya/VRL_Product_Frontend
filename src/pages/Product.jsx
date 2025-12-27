
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { 
  Search, Filter, Heart, 
  ChevronDown, Star, Eye 
} from "lucide-react"; 
import image01 from "../assets/image02.jpg"; 

const Product = () => {
  // --- STATE ---
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  
  const navigate = useNavigate();

  const categories = ["All", "Spices", "Tea", "Coconut", "Handicrafts", "Textiles"];

  // --- FETCH DATA ---
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setTimeout(async () => {
          const res = await axios.get("https://vrl-product-backend-stru.onrender.com/api/products");
          setProducts(res.data);
          console.log(res.data,"All Products")
          setFilteredProducts(res.data);
          setLoading(false);
        }, 1000); 
      } catch (err) {
        console.error("Error fetching data");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // --- FILTER & SORT LOGIC ---
  useEffect(() => {
    let result = [...products];

    if (searchTerm) {
      result = result.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (activeCategory !== "All") {
      result = result.filter((_, i) => i % 2 === 0); // Mock filter
    }
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [searchTerm, activeCategory, sortBy, products]);

  // --- ORDER LOGIC (Navigate to Order Page) ---
  const handleOrder = (id, e) => {
    e.stopPropagation(); // Card click தடுக்க
    
    let userInfo = localStorage.getItem("userInfo");
    
    // Check Login
    if (!userInfo || userInfo === "null") {
      alert("Please login to place an order.");
      navigate("/login");
      return;
    }
    
    // Navigate to Order Page
    navigate(`/order/${id}`);
  };

  // --- CURRENCY FORMATTER (LKR) ---
  const formatLKR = (price) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 2
    }).format(price);
  };

  // --- SKELETON LOADER ---
  const Skeleton = () => (
    <div style={styles.skeletonCard}>
      <div className="shimmer" style={styles.skeletonImg}></div>
      <div style={{padding: '15px'}}>
        <div className="shimmer" style={styles.skeletonText}></div>
        <div className="shimmer" style={{...styles.skeletonText, width: '60%'}}></div>
      </div>
    </div>
  );

  return (
    <div style={styles.pageWrapper}>
      
      {/* GLOBAL CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
        
        @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
        .shimmer { animation: shimmer 2s infinite linear; background: linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%); background-size: 1000px 100%; }
        
        .fade-in { animation: fadeIn 0.5s ease-out forwards; opacity: 0; }
        @keyframes fadeIn { to { opacity: 1; transform: translateY(0); } from { opacity: 0; transform: translateY(20px); } }

        .product-card { transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }
        .product-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(38, 95, 97, 0.15); }
        
        .img-zoom { transition: transform 0.6s ease; width: 100%; height: 100%; object-fit: cover; }
        .product-card:hover .img-zoom { transform: scale(1.1); }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        
        /* Button Hover Effect */
        .order-btn-hover:hover { background-color: #1e4b4d !important; transform: translateY(-2px); }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <span style={styles.heroBadge}>New Collection 2025</span>
          <h1 style={styles.heroTitle}>Authentic Quality.</h1>
        </div>
      </section>

      {/* --- FILTER BAR --- */}
      <div style={styles.stickyBar}>
        <div style={styles.barContainer}>
          <div className="no-scrollbar" style={styles.categoryRow}>
            {categories.map(cat => (
              <button 
                key={cat} 
                style={activeCategory === cat ? styles.catBtnActive : styles.catBtn}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={styles.controlsRow}>
            <div style={styles.searchWrapper}>
              <Search size={18} color="#265f61" />
              <input 
                placeholder="Search..." 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={styles.searchInput}
              />
            </div>
            
            <div style={styles.sortWrapper}>
              <select style={styles.sortSelect} value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={14} style={{position: 'absolute', right: 10, pointerEvents: 'none'}} color="#265f61"/>
            </div>
          </div>
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <div style={styles.mainContent}>
        
        <div style={styles.headerRow}>
          <h2 style={styles.sectionTitle}>Featured Products</h2>
          <span style={styles.count}>{filteredProducts.length} Items Found</span>
        </div>

        {loading ? (
          <div style={styles.grid}>
             {[1,2,3,4,5,6,7,8].map(n => <Skeleton key={n} />)}
          </div>
        ) : (
          <div style={styles.grid}>
            {filteredProducts.map((product) => (
              <div key={product._id} className="product-card fade-in" style={styles.card}>
                
                {/* Image Section */}
                <div style={styles.imgContainer}>
                  <div style={styles.badges}>
                     {product.stock > 0 ? (
                       <span style={styles.badgeStock}>In Stock</span>
                     ) : (
                       <span style={styles.badgeOut}>Out of Stock</span>
                     )}
                  </div>
                  <button style={styles.wishlistBtn}><Heart size={18} /></button>
                  <img src={product.image || image01} alt={product.name} className="img-zoom" />
                </div>

                {/* Details Section */}
                <div style={styles.cardBody}>
                  <div style={styles.rowBetween}>
                    <span style={styles.unitText}>{product.unit || "Unit"}</span>
                    <div style={styles.rating}><Star size={12} fill="#f1c40f" color="#f1c40f"/> 4.8</div>
                  </div>
                  
                  <h3 style={styles.productName}>{product.name}</h3>
                  <p style={styles.desc}>{product.description?.substring(0, 50)}...</p>

                  <div style={styles.priceRow}>
                    <div style={styles.priceBlock}>
                      <span style={styles.currency}>LKR</span>
                      <span style={styles.priceValue}>
                        {formatLKR(product.price).replace('LKR', '').trim()}
                      </span>
                    </div>
                  </div>

                  {/* --- ORDER NOW BUTTON --- */}
                  <button 
                    className="order-btn-hover"
                    style={product.stock > 0 ? styles.orderBtn : styles.btnDisabled}
                    onClick={(e) => product.stock > 0 && handleOrder(product._id, e)}
                    disabled={product.stock <= 0}
                  >
                    {product.stock > 0 ? "Order Now" : "Out of Stock"}
                  </button>
                  
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredProducts.length === 0 && (
          <div style={styles.emptyState}>
             <Search size={48} color="#ddd" />
             <p>No products found.</p>
          </div>
        )}

      </div>
    </div>
  );
};

// --- STYLES OBJECT ---
const styles = {
  pageWrapper: {
    backgroundColor: '#F7F9F9',
    minHeight: '100vh',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    color: '#1a1a1a',
  },

  // HERO
  hero: {
    backgroundColor: '#265f61',
    position: 'relative',
    padding: '80px 20px 100px',
    textAlign: 'center',
    color: 'white',
    backgroundImage: 'linear-gradient(135deg, #265f61 0%, #1c4a4c 100%)',
    borderBottomLeftRadius: '40px',
    borderBottomRightRadius: '40px',
  },
  heroContent: { position: 'relative', zIndex: 2 },
  heroBadge: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(5px)',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '15px',
    display: 'inline-block',
  },
  heroTitle: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '3rem',
    marginBottom: '10px',
    letterSpacing: '-1px',
  },

  // STICKY FILTER BAR
  stickyBar: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    marginTop: '-40px',
    padding: '0 20px',
  },
  barContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    padding: '15px 20px',
  },
  categoryRow: {
    display: 'flex',
    gap: '10px',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    paddingBottom: '15px',
    borderBottom: '1px solid #eee',
    marginBottom: '15px',
  },
  catBtn: {
    background: 'transparent',
    border: '1px solid #ddd',
    padding: '8px 20px',
    borderRadius: '30px',
    color: '#666',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'all 0.2s',
  },
  catBtnActive: {
    background: '#265f61',
    border: '1px solid #265f61',
    padding: '8px 20px',
    borderRadius: '30px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '600',
  },
  controlsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '15px',
    flexWrap: 'wrap',
  },
  searchWrapper: {
    flex: 1,
    minWidth: '250px',
    display: 'flex',
    alignItems: 'center',
    background: '#f4f6f6',
    borderRadius: '10px',
    padding: '10px 15px',
    gap: '10px',
  },
  searchInput: {
    border: 'none',
    background: 'transparent',
    width: '100%',
    outline: 'none',
    color: '#265f61',
    fontWeight: '500',
  },
  sortWrapper: {
    position: 'relative',
    width: '180px',
    display: 'flex',
    alignItems: 'center',
  },
  sortSelect: {
    width: '100%',
    appearance: 'none',
    background: '#f4f6f6',
    border: 'none',
    padding: '12px 15px',
    borderRadius: '10px',
    color: '#265f61',
    fontWeight: '600',
    cursor: 'pointer',
    outline: 'none',
  },

  // CONTENT
  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px 80px',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '30px',
  },
  sectionTitle: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '2rem',
    color: '#265f61',
    margin: 0,
  },
  count: { color: '#888', fontWeight: '500' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '30px',
  },

  // PRODUCT CARD
  card: {
    backgroundColor: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    position: 'relative',
    border: '1px solid #f0f0f0',
    display: 'flex',
    flexDirection: 'column',
  },
  imgContainer: {
    height: '240px',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#f8f8f8',
  },
  badges: { position: 'absolute', top: '15px', left: '15px', zIndex: 2 },
  badgeStock: {
    background: '#dcfce7',
    color: '#166534',
    padding: '5px 10px',
    borderRadius: '6px',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  badgeOut: {
    background: '#fee2e2',
    color: '#991b1b',
    padding: '5px 10px',
    borderRadius: '6px',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  wishlistBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    zIndex: 2,
    background: 'white',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    color: '#ccc',
  },

  // CARD BODY
  cardBody: {
    padding: '20px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  rowBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  unitText: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    color: '#999',
    fontWeight: '600',
    letterSpacing: '0.5px',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: '#555',
  },
  productName: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '1.25rem',
    color: '#1a1a1a',
    margin: '0 0 8px 0',
  },
  desc: {
    fontSize: '0.9rem',
    color: '#666',
    lineHeight: '1.5',
    marginBottom: '15px',
    flex: 1,
  },
  priceRow: {
    borderTop: '1px solid #f0f0f0',
    paddingTop: '15px',
    marginBottom: '15px',
  },
  priceBlock: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '4px',
  },
  currency: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#265f61',
  },
  priceValue: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#265f61',
  },

  // ORDER BUTTON STYLES
  orderBtn: {
    width: '100%',
    backgroundColor: '#265f61',
    color: 'white',
    border: 'none',
    padding: '14px',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(38, 95, 97, 0.2)',
  },
  btnDisabled: {
    width: '100%',
    backgroundColor: '#e5e7eb',
    color: '#9ca3af',
    border: 'none',
    padding: '14px',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'not-allowed',
  },

  // UTILS
  skeletonCard: {
    height: '400px',
    backgroundColor: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid #f0f0f0',
  },
  skeletonImg: {
    height: '260px',
    width: '100%',
    backgroundColor: '#eee',
  },
  skeletonText: {
    height: '15px',
    backgroundColor: '#eee',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  emptyState: {
    textAlign: 'center',
    padding: '80px',
    color: '#ccc',
  }
};

export default Product;
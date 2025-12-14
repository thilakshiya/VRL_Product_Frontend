
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./order.css";
// Ensure this path is correct relative to this file
import image01 from "../assets/image02.jpg"; 

// --- Modern Icons ---
const MapIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const BuildingIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="2"></line><path d="M5 12h14"></path><path d="M5 7h14"></path><path d="M5 17h14"></path></svg>;
const GlobeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
const PhoneIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const ArrowRight = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;

const API = "https://vrl-product-backend-stru.onrender.com/api";

const Order = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [createdOrderId, setCreatedOrderId] = useState(null);
  const [order, setOrder] = useState({
    qty: 1,
    address: "",
    city: "",
    country: "",
    phone: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${API}/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
        setMessage("Failed to load product.");
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product) return;

    const userToke = cookies.getItem("userInfo");
    if (!userToke) {
      setMessage("You must log in to place an order!");
      return;
    }

    const user = JSON.parse(userToke);
    const token = user.token;
    const totalPrice = order.qty * product.price;

    const bodyData = {
      orderItems: [
        {
          product: product._id,
          name: product.name,
          qty: order.qty,
          price: product.price,
        }
      ],
      shippingAddress: {
        address: order.address,
        city: order.city,
        country: order.country,
      },
      paymentMethod: "Cash on Delivery",
      itemsPrice: totalPrice,
      totalPrice: totalPrice
    };

    setLoading(true);
    try {
      const res = await axios.post(`${API}/orders`, bodyData, {
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      setMessage("Order placed successfully!");
      setCreatedOrderId(res.data._id);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Order failed!");
    } finally {
      setLoading(false);
    }
  };

  const goToPayment = () => {
    if (createdOrderId && product) {
      const totalAmount = order.qty * product.price;
      navigate(`/user-payments`, { 
        state: { 
          orderId: createdOrderId, 
          amount: totalAmount 
        } 
      });
    }
  };

  if (!product) return <div className="loader-container"><div className="spinner"></div></div>;

  const totalPrice = order.qty * product.price;

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        
        {/* --- LEFT COLUMN: Product Summary --- */}
        <div className="checkout-summary">
          <div className="product-image-wrapper">
            <img src={image01} alt={product.name} />
          </div>
          
          <div className="summary-details">
            <h3>{product.name}</h3>
            <p className="product-desc">{product.description || "High quality product"}</p>
            
            <div className="price-row">
              <span>Price per unit</span>
              <strong>Rs {product.price}</strong>
            </div>

            <div className="divider"></div>

            <div className="total-row">
              <span>Total Amount</span>
              <span className="total-highlight">Rs {totalPrice}</span>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: Shipping Form --- */}
        <div className="checkout-form-section">
          <div className="form-header">
            <h2>Shipping Details</h2>
            <p>Please enter your delivery information.</p>
          </div>

          {message && (
            <div className={`alert ${createdOrderId ? 'alert-success' : 'alert-error'}`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className={`modern-form ${createdOrderId ? 'disabled-form' : ''}`}>
            
            {/* Quantity Input */}
            <div className="input-group">
              <label>Quantity</label>
              <input 
                type="number" 
                name="qty" 
                min="1" 
                value={order.qty} 
                onChange={handleChange} 
                required 
                disabled={!!createdOrderId}
              />
            </div>

            {/* Address */}
            <div className="input-group">
              <label>Street Address</label>
              <div className="input-wrapper">
                <span className="icon"><MapIcon /></span>
                <input type="text" name="address" value={order.address} onChange={handleChange} placeholder="123 Main St" required disabled={!!createdOrderId}/>
              </div>
            </div>

            <div className="row-group">
              {/* City */}
              <div className="input-group">
                <label>City</label>
                <div className="input-wrapper">
                  <span className="icon"><BuildingIcon /></span>
                  <input type="text" name="city" value={order.city} onChange={handleChange} placeholder="Colombo" required disabled={!!createdOrderId}/>
                </div>
              </div>

              {/* Country */}
              <div className="input-group">
                <label>Country</label>
                <div className="input-wrapper">
                  <span className="icon"><GlobeIcon /></span>
                  <input type="text" name="country" value={order.country} onChange={handleChange} placeholder="Sri Lanka" required disabled={!!createdOrderId}/>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="input-group">
              <label>Phone Number</label>
              <div className="input-wrapper">
                <span className="icon"><PhoneIcon /></span>
                <input type="text" name="phone" value={order.phone} onChange={handleChange} placeholder="+94 77..." required disabled={!!createdOrderId}/>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            {!createdOrderId ? (
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? "Placing Order..." : "Place Order"}
              </button>
            ) : (
              <button type="button" className="btn-success-payment" onClick={goToPayment}>
                Proceed to Payment <ArrowRight />
              </button>
            )}

          </form>
        </div>

      </div>
    </div>
  );
};

export default Order;
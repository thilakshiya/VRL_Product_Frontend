




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Product.css";
// import { getProducts } from "../api/productApi";
import image01 from "../assets/image02.jpg";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // React Router hook

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://vrl-product-backend-stru.onrender.com/api/products");// Replace with your API
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

 


const handleOrder = (id) => {
  let userInfo = cookies.getItem("userInfo");

  // If nothing stored → user not logged in
  if (!userInfo || userInfo === "null" || userInfo === "undefined") {
    alert("Please sign up or login to place an order.");
    navigate("/login");
   
    return;
  }

  // Convert string → object
  userInfo = JSON.parse(userInfo);

  // If token missing → not a valid login
  if (!userInfo.token) {
    alert("Please sign up or login to place an order.");
    navigate("/login");
    return;
  }

  // User logged in → allow order
  navigate(`/order/${id}`);
};



  if (loading) return <div className="loader">Loading products...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <div className="product-image">
            <img
              src={image01}
              alt={product.name}
            />
          </div>
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>{product.description || "No description available"}</p>
            <p className="price">Price: ${product.price.toFixed(2)}</p>
            <p>Stock: {product.stock}</p>
            <p>Unit: {product.unit}</p>
            {product.supplier && <p>Supplier ID: {product.supplier}</p>}

            {/* Order Now Button */}
            <button
              className="order-button"
              onClick={() => handleOrder(product._id)}
            >
              Order Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./MyOrders.css"; // We will create this CSS next

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        
        if (!userInfo) {
            navigate("/login");
            return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };

        // Call the backend route we just created
        const { data } = await axios.get("ttps:/vrl-product-backend-stru.onrender.com/api/orders/myorders", config);
        setOrders(data);
        setLoading(false);
      } catch (err) {
        setError(
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        );
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  // Helper to format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="my-orders-container">
      <h2>My Orders</h2>
      
      {loading ? (
        <p>Loading orders...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{formatDate(order.createdAt)}</td>
                <td>Rs {order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    <span className="status-success">Paid ({formatDate(order.paidAt)})</span>
                  ) : (
                    <span className="status-fail">Not Paid</span>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    <span className="status-success">Delivered</span>
                  ) : (
                    <span className="status-fail">Processing</span>
                  )}
                </td>
                <td>
                    {/* If not paid, show Pay button, else show details */}
                    {!order.isPaid ? (
                         <button 
                         className="btn-pay-small"
                         onClick={() => navigate('/user-payments', { 
                             state: { orderId: order._id, amount: order.totalPrice } 
                         })}
                       >
                         Pay Now
                       </button>
                    ) : (
                        <button className="btn-details">View</button>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyOrders;
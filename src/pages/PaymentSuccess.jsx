// import React from "react";
// import { Link } from "react-router-dom";
// import "./CashSuccess.css";

// export default function CashSuccess() {
//   return (
//     <div className="cash-success-container">
//       <div className="success-box">
//         <h1>✔ Cash Payment Successful!</h1>
//         <p>Your order has been placed successfully.</p>

//         <Link to="/orders" className="btn-view">
//           View My Orders
//         </Link>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import "./PaymentSuccess.css";

const PaymentSuccess = () => {
  return (
    <div className="payment-success-container">
      <div className="success-card">
        <div className="success-icon-container">
          <span className="checkmark">✔</span>
        </div>
        
        <h1>Payment Successful!</h1>
        <p className="success-text">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <div className="success-buttons">
          <Link to="/orders" className="btn btn-primaryp">
            View My Orders
          </Link>
          <Link to="/" className="btn btn-secondary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;

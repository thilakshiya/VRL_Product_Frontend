import React from "react";
import "./ConfirmModal.css";

export default function ConfirmModal({ show, onClose, onConfirm }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Confirm Payment</h2>
        <p>Are you sure you want to continue?</p>

        <div className="modal-buttons">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-confirm" onClick={onConfirm}>Yes, Proceed</button>
        </div>
      </div>
    </div>
  );
}

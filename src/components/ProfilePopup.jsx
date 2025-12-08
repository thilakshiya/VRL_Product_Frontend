import React, { useState } from "react";

const ProfilePopup = ({ open, onClose }) => {
  if (!open) return null;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    about: ""
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="popup-bg">
      <div className="popup-box">

        <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
          Edit Profile
        </h2>

        <input name="firstName" placeholder="First Name" onChange={onChange} />
        <input name="lastName" placeholder="Last Name" onChange={onChange} />
        <input name="dob" type="date" onChange={onChange} />
        <textarea name="about" placeholder="About" onChange={onChange} />

        <div className="popup-actions">
          <button className="save-btn">Save</button>
          <button className="delete-btn">Delete</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>

      </div>
    </div>
  );
};

export default ProfilePopup;





import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">

      {/* HEADER */}
      <section className="about-header fade-in">
        <h1>
          About <span>VRL Product</span>
        </h1>
        <p>Your trusted marketplace for products and supplies.</p>
      </section>

      {/* COMPANY INFO */}
      <section className="about-section slide-up">
        <h2>Who We Are</h2>
        <p>
          VRL Product is a growing platform that connects customers and suppliers 
          in a simple and efficient way.<br /> 
          We focus on delivering high-quality products, fast service, and a trusted 
          buying experience for every user.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="mv-section slide-up">
        <div className="mv-card fade-in">
          <h3>Our Mission</h3>
          <p>
            To provide high-quality products at affordable prices while helping 
            suppliers grow their businesses through a reliable platform.
          </p>
        </div>

        <div className="mv-card fade-in">
          <h3>Our Vision</h3>
          <p>
            To become one of the most trusted product distribution networks, 
            connecting customers and suppliers with transparency and speed.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-section slide-up">
        <h2>Our Values</h2>

        <ul className="value-list">
          <li>✔ Quality and Trust</li>
          <li>✔ Customer Satisfaction</li>
          <li>✔ Fast and Safe Delivery</li>
          <li>✔ Support for Local Suppliers</li>
        </ul>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section fade-in">
        <h2>Our Team</h2>

        <div className="team-grid">
          <div className="team-card slide-up">
            <h3>Founder</h3>
            <p>Dedicated to building a trusted product platform.</p>
          </div>

          <div className="team-card slide-up">
            <h3>Manager</h3>
            <p>Ensures quality, delivery, and customer support.</p>
          </div>

          <div className="team-card slide-up">
            <h3>Support Team</h3>
            <p>Always ready to help customers and suppliers.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
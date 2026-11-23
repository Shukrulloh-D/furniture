import React from "react";
import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-col">
        <h3>Get's your discount</h3>
        <p>Check now</p>
      </div>
      <div className="footer-col">
        <h4>Our services</h4>
        <ul>
          <li>Collection</li>
          <li>How its work</li>
          <li>Estimates</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li>Terms of use</li>
          <li>Privacy policy</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Contact</h4>
        <ul>
          <li>Furniture20@furniture.com</li>
          <li>(888) 315-500</li>
          <li>55 Village, New York</li>
        </ul>
      </div>
    </footer>
  );
};

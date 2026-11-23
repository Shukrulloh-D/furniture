import React from "react";
import "./Features.css";

export const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="features-image">
        <img src="/images/features.png" alt="Living room" />
      </div>
      <div className="features-cards">
        <div className="feature-card">
          <span className="feature-card-num">1</span>
          <div>
            <h4>Full services</h4>
            <p>Provide the best service and you can trust.</p>
          </div>
        </div>
        <div className="feature-card">
          <span className="feature-card-num">2</span>
          <div>
            <h4>Long warranty</h4>
            <p>With a 5-year warranty, you will feel secure.</p>
          </div>
        </div>
        <div className="feature-card">
          <span className="feature-card-num">3</span>
          <div>
            <h4>Modern design</h4>
            <p>Modern style and modern design.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

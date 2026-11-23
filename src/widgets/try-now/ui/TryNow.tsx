import React from "react";
import { Button } from "@/shared/ui/button";
import "./TryNow.css";

export const TryNow: React.FC = () => {
  return (
    <section className="try-now">
      <div className="try-now-content">
        <h2 className="try-now-title">
          <span className="outline-text">Let's</span> <br />
          Try Now
        </h2>
        <Button variant="primary">Explore</Button>
      </div>
      <div className="try-now-image">
        <img src="/images/try-now.png" alt="Chair near window" />
      </div>
    </section>
  );
};

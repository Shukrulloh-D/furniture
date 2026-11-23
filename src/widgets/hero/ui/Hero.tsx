import React from "react";
import { Button } from "@/shared/ui/button";
import "./Hero.css";

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-subtitle">DECORATE HOME</span>
        <h1 className="hero-title">
          Feel your home with a modern design space
        </h1>
        <div className="hero-actions">
          <Button variant="primary">Discover</Button>
          <Button variant="secondary">
            <span className="play-icon">▶</span> Watch Video
          </Button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero.png" alt="Modern interior" />
      </div>
    </section>
  );
};

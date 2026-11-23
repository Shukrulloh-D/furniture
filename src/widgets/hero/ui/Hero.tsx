import React from 'react';
import { Button } from '@/shared/ui/button';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__subtitle">DECORATE HOME</span>
        <h1 className="hero__title">Feel your home with a modern design space</h1>
        <div className="hero__actions">
          <Button variant="primary">Discover</Button>
          <Button variant="secondary">
            <span className="play-icon">▶</span> Watch Video
          </Button>
        </div>
      </div>
      <div className="hero__image">
        {/* Замените на ваш путь */}
        <img src="/images/hero.png" alt="Modern interior" />
      </div>
    </section>
  );
};

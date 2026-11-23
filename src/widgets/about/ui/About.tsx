import React from 'react';
import { Button } from '@/shared/ui/button';
import './About.css';

export const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about__image-container">
        <img src="/images/about.png" alt="About furniture" className="about__img" />
        <div className="about__pattern"></div>
      </div>
      <div className="about__content">
        <h2 className="about__title">About <br /><span className="outline-text">Furniture</span></h2>
        <p className="about__desc">
          People have been using natural objects, such as tree stumps, rocks and moss, as furniture since the beginning of human civilisation.
        </p>
        <Button variant="primary">Read More</Button>
      </div>
    </section>
  );
};

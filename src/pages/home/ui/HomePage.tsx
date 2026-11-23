import React from 'react';
import { Header } from '@/widgets/header/ui';
import { Hero } from '@/widgets/hero/ui';
import { About } from '@/widgets/about/ui';
import { Features } from '@/widgets/features/ui';
import { Products } from '@/widgets/products/ui';
import { TryNow } from '@/widgets/try-now/ui';
import { Footer } from '@/widgets/footer/ui';
import './HomePage.css';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <About />
      <Features />
      <Products />
      <TryNow />
      <Footer />
    </div>
  );
};

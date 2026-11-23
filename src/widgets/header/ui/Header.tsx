import React from 'react';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">Furnitr.</div>
      <nav className="header__nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#collection">Collection</a>
        <a href="#shop">Shop</a>
      </nav>
      <div className="header__icons">
        <span>🛒</span>
        <span>🔍</span>
      </div>
    </header>
  );
};

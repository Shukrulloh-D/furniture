import React from 'react';
import './Products.css';

const products = [
  { id: 1, name: 'Modern lamp study', price: '$14', img: '/images/prod1.png' },
  { id: 2, name: 'Modern lamp study', price: '$15', img: '/images/prod2.png' },
  { id: 3, name: 'Classic lamp', price: '$12', img: '/images/prod3.png' },
  { id: 4, name: 'Clock cute', price: '$11', img: '/images/prod4.png' },
];

export const Products: React.FC = () => {
  return (
    <section className="products">
      <div className="products__header">
        <div>
          <h3 className="products__subtitle">Our you have to buy</h3>
          <h2 className="products__title outline-text">Product</h2>
        </div>
        <div className="products__nav">
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
      </div>
      <div className="products__grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <div className="product-card__img-wrapper">
              <img src={p.img} alt={p.name} />
            </div>
            <h4>{p.name}</h4>
            <span>{p.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

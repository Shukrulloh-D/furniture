import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, className = '' }) => {
  return (
    <button className={`btn btn--${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

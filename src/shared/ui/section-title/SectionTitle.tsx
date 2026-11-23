import React from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'left' }) => {
  return (
    <div className={`section-title section-title--${align}`}>
      {subtitle && <span className="section-title__subtitle">{subtitle}</span>}
      <h2 className="section-title__title">{title}</h2>
    </div>
  );
};

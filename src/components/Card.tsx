import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true 
}) => {
  return (
    <div
      className={`
        bg-[#1c2331] border border-[#2a3446] rounded-lg overflow-hidden shadow-md
        ${hoverEffect ? 'transition-all duration-300 hover:shadow-purple-500/20 hover:scale-[1.02] hover:border-purple-500/50' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
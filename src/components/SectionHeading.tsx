import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold mb-2">
        <span className="relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            {title}
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded"></span>
        </span>
      </h2>
      {subtitle && <p className="text-gray-400 mt-3 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
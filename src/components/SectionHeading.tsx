import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  isLight?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, isLight = false }) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isLight ? 'text-white' : 'text-primary-900'}`}>
        {title}
      </h2>
      <p className={`text-lg ${isLight ? 'text-gray-200' : 'text-gray-600'}`}>
        {subtitle}
      </p>
      <div className={`w-24 h-1 mx-auto mt-6 ${isLight ? 'bg-accent-400' : 'bg-accent-500'}`}></div>
    </div>
  );
};

export default SectionHeading;
import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageBefore: string;
  imageAfter: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  category, 
  imageBefore, 
  imageAfter 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full">
        <img 
          src={imageBefore} 
          alt={`${title} - Before`} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img 
          src={imageAfter} 
          alt={`${title} - After`} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block bg-accent-500 text-white text-xs px-3 py-1 rounded-full mb-2">
            {category}
          </span>
          <h3 className="text-white text-xl font-semibold">{title}</h3>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 text-primary-900 text-sm font-medium px-4 py-2 rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100">
            {isHovered ? 'After' : 'Before'}
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-primary-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#contact" className="inline-flex items-center text-accent-500 font-medium hover:text-accent-600 transition-colors">
          Learn more <ArrowRight className="ml-1" size={16} />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
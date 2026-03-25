import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transform Your Space with Professional Excellence
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Comprehensive cleaning, maintenance, and renovation services to revitalize your property. Quality craftsmanship backed by years of industry experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/#services" 
              className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center"
            >
              Explore Services
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a 
              href="/#contact" 
              className="bg-white hover:bg-gray-100 text-primary-900 font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import ServiceCard from './ServiceCard';
import SectionHeading from './SectionHeading';
import { Workflow, Paintbrush, Construction, Home, Wrench, Droplet } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Residential Cleaning',
    description: 'Complete house cleaning services from top to bottom. Regular maintenance or deep cleaning options available to keep your home spotless.',
    icon: <Home className="w-8 h-8 text-primary-600" />,
    image: 'https://images.pexels.com/photos/4107108/pexels-photo-4107108.jpeg?auto=compress&cs=tinysrgb&w=1280'
  },
  {
    id: 2,
    title: 'Commercial Cleaning',
    description: 'Professional cleaning services for offices, retail spaces, and commercial buildings. Maintaining a clean environment for your business.',
    icon: <Workflow className="w-8 h-8 text-primary-600" />,
    image: 'https://images.pexels.com/photos/4108714/pexels-photo-4108714.jpeg?auto=compress&cs=tinysrgb&w=1280'
  },
  {
    id: 3,
    title: 'Renovation Services',
    description: 'Complete renovation services for kitchens, bathrooms, basements, and more. Transform your outdated spaces into something spectacular.',
    icon: <Construction className="w-8 h-8 text-primary-600" />,
    image: 'https://images.pexels.com/photos/2287523/pexels-photo-2287523.jpeg?auto=compress&cs=tinysrgb&w=1280'
  },
  {
    id: 4,
    title: 'Painting',
    description: 'Interior and exterior painting services with premium quality paints and expert application techniques for a flawless finish.',
    icon: <Paintbrush className="w-8 h-8 text-primary-600" />,
    image: 'https://images.pexels.com/photos/6368836/pexels-photo-6368836.jpeg?auto=compress&cs=tinysrgb&w=1280'
  },
  {
    id: 5,
    title: 'Maintenance & Repairs',
    description: 'Regular maintenance and repair services to keep your property in excellent condition, preventing costly future repairs.',
    icon: <Wrench className="w-8 h-8 text-primary-600" />,
    image: 'https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg?auto=compress&cs=tinysrgb&w=1280'
  },
  {
    id: 6,
    title: 'Pressure Washing',
    description: 'High-pressure cleaning for driveways, decks, siding, and more. Restore the appearance of your exterior surfaces.',
    icon: <Droplet className="w-8 h-8 text-primary-600" />,
    image: 'https://images.pexels.com/photos/3845970/pexels-photo-3845970.jpeg?auto=compress&cs=tinysrgb&w=1280'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive solutions for all your property needs"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
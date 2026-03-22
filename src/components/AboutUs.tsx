import React from 'react';
import SectionHeading from './SectionHeading';
import { Shield, Award, Clock, Users } from 'lucide-react';

const AboutUs: React.FC = () => {
  const stats = [
    { id: 1, value: '15+', label: 'Years Experience', icon: <Clock className="w-6 h-6 text-accent-500" /> },
    { id: 2, value: '500+', label: 'Projects Completed', icon: <Award className="w-6 h-6 text-accent-500" /> },
    { id: 3, value: '100%', label: 'Satisfaction Rate', icon: <Shield className="w-6 h-6 text-accent-500" /> },
    { id: 4, value: '25+', label: 'Expert Team Members', icon: <Users className="w-6 h-6 text-accent-500" /> }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About MasterCraft"
          subtitle="Excellence in cleaning, maintenance, and renovation since 2008"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg?auto=compress&cs=tinysrgb&w=1280" 
                alt="Team of professionals" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-accent-500 text-white p-8 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-primary-900 mb-4">Your Trusted Partner for Property Excellence</h3>
            <p className="text-gray-600 mb-6">
              At MasterCraft, we're dedicated to transforming and maintaining spaces with unmatched quality and attention to detail. Our comprehensive range of services covers everything from routine cleaning to complete property renovations.
            </p>
            <p className="text-gray-600 mb-6">
              Founded in 2008, our team of skilled professionals brings expertise and passion to every project, ensuring results that exceed expectations. We believe in transparent communication, quality craftsmanship, and customer satisfaction at every step.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you're looking for regular cleaning services, maintenance solutions, or planning a major renovation, MasterCraft delivers excellence with professionalism and integrity.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <p className="text-2xl font-bold text-primary-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
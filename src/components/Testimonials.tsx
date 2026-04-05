import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'The renovation team at Master Property Care exceeded our expectations with their attention to detail and quality workmanship. Our kitchen has been completely transformed and we couldn\'t be happier with the results.',
    rating: 5,
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=128'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Office Manager',
    content: 'We\'ve been using Master Property Care\'s commercial cleaning services for our office building for the past 3 years, and they consistently deliver excellent results. Our workspace is always immaculate, and their staff is professional and thorough.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=128'
  },
  {
    id: 3,
    name: 'Emily Thompson',
    role: 'Property Manager',
    content: 'Master Property Care has been our go-to maintenance partner for multiple properties. Their response time is quick, their work is high quality, and they\'re always professional. I highly recommend their services for any property maintenance needs.',
    rating: 4,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=128'
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Restaurant Owner',
    content: 'The team at Master Property Care did an amazing job renovating our restaurant. They worked efficiently to minimize downtime and delivered a beautiful space that our customers love. The attention to detail was impressive.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=128'
  },
  {
    id: 5,
    name: 'Jennifer Adams',
    role: 'Homeowner',
    content: 'We hired Master Property Care for a deep cleaning service and were blown away by the results. Every corner of our home was spotless, and the team was friendly and professional. We\'ve now signed up for regular cleaning services.',
    rating: 5,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=128'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Customer Testimonials"
          subtitle="What our satisfied clients have to say about our services"
          isLight={true}
        />
        
        <div className="max-w-4xl mx-auto mt-16 relative">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-accent-500">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
              ))}
            </div>
            
            <blockquote className="text-xl italic mb-8">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            <div className="mb-8">
              <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-gray-300">{testimonials[currentIndex].role}</p>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-primary-800 hover:bg-primary-700 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-primary-800 hover:bg-primary-700 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -left-16 hidden lg:block">
            <button 
              onClick={prevTestimonial}
              className="p-4 rounded-full bg-primary-800 hover:bg-primary-700 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-16 hidden lg:block">
            <button 
              onClick={nextTestimonial}
              className="p-4 rounded-full bg-primary-800 hover:bg-primary-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
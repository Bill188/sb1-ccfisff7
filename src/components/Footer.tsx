import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: email.trim() }]);

      if (error) {
        if (error.code === '23505') {
          setSubscribeStatus('success'); // Already subscribed, still show success
        } else {
          throw error;
        }
      } else {
        setSubscribeStatus('success');
      }
      setEmail('');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    } catch {
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-primary-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">MasterCraft</h2>
            <p className="mb-6">
              Professional cleaning, maintenance, and renovation services for residential and commercial properties.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#services" className="hover:text-accent-400 transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Residential Cleaning
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-accent-400 transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Commercial Cleaning
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-accent-400 transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Renovation Services
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-accent-400 transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Painting
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-accent-400 transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Maintenance & Repairs
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#about" className="hover:text-accent-400 transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  About Us
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-accent-400 transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Our Projects
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="hover:text-accent-400 transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-accent-400 transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-accent-400 transition-colors inline-flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for tips, news and special offers.</p>
            <form className="mb-4" onSubmit={handleSubscribe}>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
              {subscribeStatus === 'success' && (
                <p className="text-green-400 text-sm mt-2">Thank you for subscribing!</p>
              )}
              {subscribeStatus === 'error' && (
                <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again.</p>
              )}
            </form>
            <p className="text-sm">
              By subscribing, you agree to our privacy policy and consent to receive marketing emails.
            </p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} MasterCraft. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/terms-of-service" className="text-sm hover:text-accent-400 transition-colors mr-6">
              Terms of Service
            </Link>
            <Link to="/privacy-policy" className="text-sm hover:text-accent-400 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-primary-900' : 'text-white'}`}>
              Master Property Care
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#services" isScrolled={isScrolled}>Services</NavLink>
          <NavLink href="#about" isScrolled={isScrolled}>About</NavLink>
          <NavLink href="#projects" isScrolled={isScrolled}>Projects</NavLink>
          <NavLink href="#testimonials" isScrolled={isScrolled}>Testimonials</NavLink>
          <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
          <a 
            href="tel:+64276888616" 
            className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            <Phone size={18} />
            <span className="font-medium">Call Us</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-primary-900 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 z-50">
          <nav className="flex flex-col space-y-4">
            <NavLink href="#services" isScrolled={true} onClick={() => setIsMenuOpen(false)}>Services</NavLink>
            <NavLink href="#about" isScrolled={true} onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink href="#projects" isScrolled={true} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
            <NavLink href="#testimonials" isScrolled={true} onClick={() => setIsMenuOpen(false)}>Testimonials</NavLink>
            <NavLink href="#contact" isScrolled={true} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            <a 
              href="tel:+64276888616" 
              className="flex items-center gap-2 bg-accent-500 text-white px-4 py-2 rounded-md w-full justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={18} />
              <span className="font-medium">Call Us</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
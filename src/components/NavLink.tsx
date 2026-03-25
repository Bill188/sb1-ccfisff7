import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isScrolled, onClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        e.preventDefault();
        navigate('/' + href);
      }
    }
    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`font-medium hover:text-accent-500 transition-colors ${
        isScrolled ? 'text-primary-900' : 'text-white'
      }`}
    >
      {children}
    </a>
  );
};

export default NavLink;
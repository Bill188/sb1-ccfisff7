import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isScrolled, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`font-medium hover:text-accent-500 transition-colors ${
        isScrolled ? 'text-primary-900' : 'text-white'
      }`}
    >
      {children}
    </a>
  );
};

export default NavLink;
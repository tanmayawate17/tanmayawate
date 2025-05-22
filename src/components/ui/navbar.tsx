
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    setIsOpen(false);
    
    // Check if we're on the homepage
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'About Me', path: '/about', id: 'about' },
    { name: 'Skills', path: '/skills', id: 'skills' },
    { name: 'Education', path: '/education', id: 'education' },
    { name: 'Experience', path: '/experience', id: 'experience' },
    { name: 'Certifications', path: '/certifications', id: 'certifications' },
    { name: 'Industry Visits', path: '/industry-visits', id: 'industry-visits' },
    { name: 'Contact Me', path: '/contact', id: 'contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-heading font-bold neon-text-blue">
            TA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => {
                  if (location.pathname === '/' && link.id) {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }
                }}
                className={cn(
                  'text-sm font-medium transition-all duration-300 hover:text-neon-blue whitespace-nowrap',
                  location.pathname === link.path
                    ? 'text-neon-blue'
                    : 'text-gray-300'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-gray-200 focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-neon-blue" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 bg-[#0A0A0A]/98 backdrop-blur-lg transition-all duration-300 ease-in-out z-40',
          isOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-full pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 py-10 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={(e) => {
                if (location.pathname === '/' && link.id) {
                  e.preventDefault();
                  scrollToSection(link.id);
                }
                setIsOpen(false);
              }}
              className={cn(
                'text-xl font-medium transition-all duration-300 hover:text-neon-blue w-full text-center py-2',
                location.pathname === link.path
                  ? 'text-neon-blue'
                  : 'text-gray-300'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

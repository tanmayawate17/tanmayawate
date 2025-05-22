
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

  // Enable smooth scrolling
  useEffect(() => {
    // Check if there's a hash in the URL when component mounts or location changes
    if (location.hash) {
      // Delay scrolling slightly to ensure DOM is ready
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'About', path: '/#about' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Education', path: '/#education' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Certifications', path: '/#certifications' },
    { name: 'Industry Visits', path: '/industry-visits' },
    { name: 'Contact', path: '/#contact' },
  ];

  const handleNavClick = (e, path) => {
    // Only handle hash links on the same page
    if (path.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const id = path.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md py-3 shadow-md' 
          : 'bg-[#0A0A0A]/90 backdrop-blur-sm py-4'
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
                onClick={(e) => handleNavClick(e, link.path)}
                className={cn(
                  'text-sm font-medium transition-all duration-300 hover:text-neon-blue whitespace-nowrap',
                  (location.pathname === '/' && location.hash === link.path.replace('/', '')) || 
                  (location.pathname === link.path && !link.path.includes('#'))
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
              <X className="h-6 w-6 text-[#00FFDD]" />
            ) : (
              <Menu className="h-6 w-6 text-[#00FFDD]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 bg-black transition-all duration-300 ease-in-out z-40',
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full w-full">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={cn(
                'text-xl font-medium transition-all duration-300 py-5 px-5 text-center w-full',
                (location.pathname === '/' && location.hash === link.path.replace('/', '')) || 
                (location.pathname === link.path && !link.path.includes('#'))
                  ? 'text-[#00FFDD] font-semibold'
                  : 'text-white hover:text-[#00FFDD] hover:shadow-[0_0_5px_#00FFDD]'
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


import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    window.scrollTo(0, 0);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
    navigate(path);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Industry Visits', path: '/industry-visits' },
    { name: 'Contact Me', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed w-full z-50 transition-all duration-300',
          scrolled 
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md py-3 shadow-lg border-b border-[#333]' 
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-heading font-bold neon-text-blue z-50 relative">
              TA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={cn(
                    'text-sm font-medium transition-all duration-300 hover:text-neon-blue whitespace-nowrap px-3 py-2 rounded-md',
                    location.pathname === link.path
                      ? 'text-neon-blue bg-[#111]'
                      : 'text-gray-300 hover:bg-[#111]'
                  )}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden text-gray-200 focus:outline-none z-50 relative p-2"
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
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
            <div className="w-full max-w-sm space-y-6">
              {navLinks.map((link, index) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={cn(
                    'block w-full text-center text-xl font-medium transition-all duration-300 py-4 px-6 rounded-lg border animate-fade-in-up',
                    location.pathname === link.path
                      ? 'text-neon-blue border-neon-blue bg-[#111] shadow-neon-blue'
                      : 'text-gray-300 border-[#333] hover:text-neon-blue hover:border-neon-blue hover:bg-[#111]'
                  )}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 neon-text-blue">Tanmay Awate</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Chemical Engineering Innovator passionate about technology and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/tanmay-awate-027792282/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/tanmay_awate1729/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:tanmayawate0017@gmail.com" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">About</Link></li>
              <li><Link to="/skills" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">Skills</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-white">Contact</h3>
            <p className="text-gray-400 mb-2 text-sm">Mumbai, India</p>
            <p className="text-gray-400 mb-2 text-sm">tanmayawate0017@gmail.com</p>
            <p className="text-gray-400 text-sm">Institute of Chemical Technology</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#222] text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Tanmay Awate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

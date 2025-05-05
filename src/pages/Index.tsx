
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const Index = () => {
  useEffect(() => {
    // Add animation class to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Background elements - abstract shapes */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-blue blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-pink blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Hi, I'm </span>
                <span className="neon-text-blue">Tanmay Awate</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-8">
                Chemical Engineering Innovator
              </h2>
              <p className="text-gray-300 mb-8 text-lg max-w-lg">
                A third-year undergraduate at the Institute of Chemical Technology, Mumbai, 
                driven by a passion for innovation and excellence in the field of chemical engineering.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="neon-btn">
                  Explore My Work
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
                <Link to="/contact" className="px-6 py-2 border-2 border-gray-700 rounded-md text-gray-300 hover:border-white hover:text-white transition-colors duration-300">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#222] shadow-xl">
                {/* Replace with actual image when available */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#121212] to-[#2a2a2a] flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-700">TA</span>
                </div>
                {/* <img 
                  src="/path-to-headshot.jpg" 
                  alt="Tanmay Awate" 
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="py-24 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-white">About </span>
              <span className="neon-text-blue">Me</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              My journey revolves around exploring advanced technologies to transform the chemical industry. 
              I'm channeling my energy into industry automation and envisioning how technologies like artificial intelligence can revolutionize chemical processes.
            </p>
            <Link to="/about" className="inline-flex items-center text-neon-blue hover:underline">
              Read more about me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">My </span>
              <span className="neon-text-pink">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A combination of technical, business, and creative skills that fuel my innovation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            {/* Technical Skills Card */}
            <div className="bg-[#0c0c0c] border border-[#222] rounded-lg p-6 transition-all duration-300 hover:shadow-neon-blue">
              <h3 className="text-xl font-semibold mb-4 text-white">Technical</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-2"></span>
                  MATLAB & Simulink
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-2"></span>
                  Python
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-2"></span>
                  JavaScript, CSS, HTML
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/skills" className="text-sm text-neon-blue hover:underline flex items-center">
                  View all technical skills
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
            
            {/* Business Skills Card */}
            <div className="bg-[#0c0c0c] border border-[#222] rounded-lg p-6 transition-all duration-300 hover:shadow-neon-pink">
              <h3 className="text-xl font-semibold mb-4 text-white">Business</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-pink rounded-full mr-2"></span>
                  Business Analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-pink rounded-full mr-2"></span>
                  Digital Marketing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-pink rounded-full mr-2"></span>
                  Finance & Stock Analysis
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/skills" className="text-sm text-neon-pink hover:underline flex items-center">
                  View all business skills
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
            
            {/* Creative Skills Card */}
            <div className="bg-[#0c0c0c] border border-[#222] rounded-lg p-6 transition-all duration-300 hover:shadow-neon-green">
              <h3 className="text-xl font-semibold mb-4 text-white">Creative</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-green rounded-full mr-2"></span>
                  Drawing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-green rounded-full mr-2"></span>
                  Sketching
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon-green rounded-full mr-2"></span>
                  Nature Landscapes
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/skills" className="text-sm text-neon-green hover:underline flex items-center">
                  View all creative skills
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Featured </span>
              <span className="neon-text-green">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Some of my recent work in chemical engineering and digital marketing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
            {/* Project Card 1 */}
            <div className="neon-card">
              <h3 className="text-xl font-semibold mb-2 text-white">Chemical Process Simulation</h3>
              <p className="text-gray-400 mb-4">A comprehensive simulation of chemical processes using DWSIM, focusing on efficiency optimization and sustainable practices.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded-md">DWSIM</span>
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded-md">Process Engineering</span>
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded-md">Simulation</span>
              </div>
              <Link to="/projects" className="text-neon-green hover:underline flex items-center text-sm">
                View project details
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>

            {/* Project Card 2 */}
            <div className="neon-card">
              <h3 className="text-xl font-semibold mb-2 text-white">Digital Marketing Campaign</h3>
              <p className="text-gray-400 mb-4">A comprehensive social media marketing strategy for a startup, focusing on brand awareness and audience engagement.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded-md">Digital Marketing</span>
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded-md">Social Media</span>
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded-md">Analytics</span>
              </div>
              <Link to="/projects" className="text-neon-green hover:underline flex items-center text-sm">
                View project details
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12 animate-on-scroll">
            <Link to="/projects" className="neon-btn">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-neon-pink blur-[100px]"></div>
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-neon-blue blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Let's Connect and </span>
              <span className="neon-text-blue">Collaborate</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Link to="/contact" className="neon-btn">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

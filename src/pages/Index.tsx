
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Briefcase, Award } from 'lucide-react';
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
                Transforming Ideas into Impact
              </h2>
              <p className="text-gray-300 mb-8 text-lg max-w-lg">
                A third-year undergraduate at the Institute of Chemical Technology, Mumbai, 
                driven by a passion for innovation and excellence in the field of chemical engineering and artificial intelligence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/skills" className="neon-btn">
                  Explore My Skills
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
                <Link to="/contact" className="px-6 py-2 border-2 border-gray-700 rounded-md text-gray-300 hover:border-white hover:text-white transition-colors duration-300">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#222] shadow-xl">
                <img 
                  src="/lovable-uploads/f7a2c5c2-0d92-486a-9136-a08d8069bb9b.png" 
                  alt="Tanmay Awate" 
                  className="w-full h-full object-cover"
                />
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

      {/* Education Section */}
      <section className="py-24 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">My </span>
              <span className="neon-text-blue">Education</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Academic journey and educational qualifications
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <div className="bg-[#0A0A0A] border border-[#222] rounded-lg p-8 transition-all duration-300 hover:shadow-neon-blue">
              <div className="flex items-start">
                <GraduationCap className="h-12 w-12 text-neon-blue mr-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">B.E Chemical Engineering</h3>
                  <p className="text-neon-blue mb-2">Institute of Chemical Technology, Mumbai</p>
                  <p className="text-gray-400">2023–Present, Third Year</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link to="/education" className="inline-flex items-center text-neon-blue hover:underline">
                View complete education details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">My </span>
              <span className="neon-text-pink">Experience</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional journey and industry experience
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6 animate-on-scroll">
            <div className="bg-[#0c0c0c] border border-[#222] rounded-lg p-8 transition-all duration-300 hover:shadow-neon-pink">
              <div className="flex items-start">
                <Briefcase className="h-12 w-12 text-neon-pink mr-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">CFD Research Internship</h3>
                  <p className="text-neon-pink mb-2">ICT Mumbai, under Prof. Yogesh Shinde</p>
                  <p className="text-gray-400 mb-4">May 2025–Present</p>
                  <p className="text-gray-300">Researching impeller performance in CSTRs using ANSYS Fluent, aiming to publish a paper.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0c0c0c] border border-[#222] rounded-lg p-8 transition-all duration-300 hover:shadow-neon-pink">
              <div className="flex items-start">
                <Briefcase className="h-12 w-12 text-neon-pink mr-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">ICT Skin Donation Community Project</h3>
                  <p className="text-neon-pink mb-2">ICT Mumbai</p>
                  <p className="text-gray-400 mb-4">May 2025–Present</p>
                  <p className="text-gray-300">Raising awareness for skin donation, supporting medical advancements.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0c0c0c] border border-[#222] rounded-lg p-8 transition-all duration-300 hover:shadow-neon-pink">
              <div className="flex items-start">
                <Briefcase className="h-12 w-12 text-neon-pink mr-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Industry Visits</h3>
                  <p className="text-neon-pink mb-2">Various Chemical Industries</p>
                  <p className="text-gray-400 mb-4">2024–2025</p>
                  <p className="text-gray-300">Toured Gharda Chemicals, Ahuja Engineering Services, NFC Effluent Treatment, Reliance Technology Center, Aarti Industries, gaining insights into chemical processes.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link to="/experience" className="inline-flex items-center text-neon-pink hover:underline">
                View all experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">My </span>
              <span className="neon-text-green">Certifications</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional certifications and courses
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <div className="bg-[#0A0A0A] border border-[#222] rounded-lg p-8 transition-all duration-300 hover:shadow-neon-green">
              <div className="flex items-start">
                <Award className="h-12 w-12 text-neon-green mr-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">HubSpot Digital Marketing Certifications</h3>
                  <p className="text-neon-green mb-2">HubSpot Academy</p>
                  <p className="text-gray-400 mb-4">2025</p>
                  <p className="text-gray-300">Completed courses in SEO, content marketing, and social media strategy.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link to="/certifications" className="inline-flex items-center text-neon-green hover:underline">
                View all certifications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
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

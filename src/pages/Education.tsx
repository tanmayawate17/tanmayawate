
import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const Education = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-neon-blue blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">My </span>
              <span className="neon-text-blue">Education</span>
            </h1>
            <p className="text-xl text-gray-400">Academic journey and qualifications</p>
          </div>
        </div>
      </section>
      
      {/* Main Education Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 animate-fade-in">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/3">
                  <div className="bg-[#0A0A0A] p-6 rounded-lg border border-[#333] shadow-neon-blue">
                    <GraduationCap className="h-16 w-16 text-neon-blue mb-4" />
                    <h3 className="text-xl font-semibold text-white">B.Tech in Chemical Engineering</h3>
                    <p className="text-gray-400 mb-2">2022 - Present</p>
                    <p className="text-gray-400">Institute of Chemical Technology, Mumbai</p>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Institute of Chemical Technology, Mumbai</h3>
                  <p className="text-gray-300 mb-4">
                    Pursuing a Bachelor of Technology degree in Chemical Engineering at one of India's most prestigious institutions for chemical sciences and engineering.
                  </p>
                  <p className="text-gray-300 mb-4">
                    ICT Mumbai (formerly UDCT) is known for its excellence in chemical engineering education and research, consistently ranked among the top institutions in India for chemical engineering.
                  </p>
                  <div className="bg-[#0A0A0A] p-4 rounded-md border border-[#333] mb-4">
                    <h4 className="text-lg font-medium mb-2 text-white">Key Coursework</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <li className="flex items-center text-gray-400">
                        <span className="w-2 h-2 bg-neon-blue rounded-full mr-2"></span>
                        Chemical Process Calculations
                      </li>
                      <li className="flex items-center text-gray-400">
                        <span className="w-2 h-2 bg-neon-blue rounded-full mr-2"></span>
                        Heat Transfer Operations
                      </li>
                      <li className="flex items-center text-gray-400">
                        <span className="w-2 h-2 bg-neon-blue rounded-full mr-2"></span>
                        Mass Transfer Operations
                      </li>
                      <li className="flex items-center text-gray-400">
                        <span className="w-2 h-2 bg-neon-blue rounded-full mr-2"></span>
                        Chemical Reaction Engineering
                      </li>
                      <li className="flex items-center text-gray-400">
                        <span className="w-2 h-2 bg-neon-blue rounded-full mr-2"></span>
                        Process Control & Instrumentation
                      </li>
                      <li className="flex items-center text-gray-400">
                        <span className="w-2 h-2 bg-neon-blue rounded-full mr-2"></span>
                        Process Design & Economics
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-300">
                    The rigorous curriculum at ICT combines theoretical knowledge with practical applications, preparing students to tackle complex engineering challenges and drive innovation in the chemical industry.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Certifications Section */}
            <div className="mb-16 animate-fade-in">
              <h2 className="text-2xl font-bold mb-8 text-center">
                <span className="text-white">Professional </span>
                <span className="neon-text-pink">Certifications</span>
              </h2>
              
              <div className="bg-[#0A0A0A] rounded-lg border border-[#333] p-6 mb-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-neon-pink mr-4" />
                  <h3 className="text-xl font-semibold text-white">HubSpot Digital Marketing Certifications</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Currently pursuing a comprehensive suite of digital marketing certifications to develop expertise in modern marketing strategies and techniques.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="border border-[#333] rounded-md p-4 hover:border-neon-pink transition-duration-300">
                    <h4 className="text-white font-medium mb-1">Digital Marketing Fundamentals</h4>
                    <p className="text-gray-400 text-sm">In Progress</p>
                  </div>
                  <div className="border border-[#333] rounded-md p-4 hover:border-neon-pink transition-duration-300">
                    <h4 className="text-white font-medium mb-1">Content Marketing</h4>
                    <p className="text-gray-400 text-sm">In Progress</p>
                  </div>
                  <div className="border border-[#333] rounded-md p-4 hover:border-neon-pink transition-duration-300">
                    <h4 className="text-white font-medium mb-1">Social Media Marketing</h4>
                    <p className="text-gray-400 text-sm">In Progress</p>
                  </div>
                  <div className="border border-[#333] rounded-md p-4 hover:border-neon-pink transition-duration-300">
                    <h4 className="text-white font-medium mb-1">Digital Advertising</h4>
                    <p className="text-gray-400 text-sm">In Progress</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0A0A0A] rounded-lg border border-[#333] p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-neon-green mr-4" />
                  <h3 className="text-xl font-semibold text-white">Future Certifications</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Planning to pursue specialized certifications in chemical engineering and related fields to enhance professional qualifications.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="border border-[#333] rounded-md p-4 hover:border-neon-green transition-duration-300">
                    <h4 className="text-white font-medium mb-1">Process Safety Management</h4>
                    <p className="text-gray-400 text-sm">Planned</p>
                  </div>
                  <div className="border border-[#333] rounded-md p-4 hover:border-neon-green transition-duration-300">
                    <h4 className="text-white font-medium mb-1">Sustainable Process Engineering</h4>
                    <p className="text-gray-400 text-sm">Planned</p>
                  </div>
                  <div className="border border-[#333] rounded-md p-4 hover:border-neon-green transition-duration-300">
                    <h4 className="text-white font-medium mb-1">Advanced Process Control</h4>
                    <p className="text-gray-400 text-sm">Planned</p>
                  </div>
                  <div className="border border-[#333] rounded-md p-4 hover:border-neon-green transition-duration-300">
                    <h4 className="text-white font-medium mb-1">Chemical Process Simulation</h4>
                    <p className="text-gray-400 text-sm">Planned</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;


import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
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
                    <h3 className="text-xl font-semibold text-white">B.E in Chemical Engineering</h3>
                    <p className="text-gray-400 mb-2">2023 - Present</p>
                    <p className="text-gray-400">Institute of Chemical Technology, Mumbai</p>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Institute of Chemical Technology, Mumbai</h3>
                  <p className="text-gray-300 mb-4">
                    Pursuing a Bachelor of Engineering degree in Chemical Engineering at one of India's most prestigious institutions for chemical sciences and engineering.
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
            
            {/* Higher Secondary Education */}
            <div className="animate-fade-in">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/3">
                  <div className="bg-[#0A0A0A] p-6 rounded-lg border border-[#333] shadow-neon-pink">
                    <BookOpen className="h-16 w-16 text-neon-pink mb-4" />
                    <h3 className="text-xl font-semibold text-white">Higher Secondary Education</h3>
                    <p className="text-gray-400 mb-2">2021 - 2023</p>
                    <p className="text-gray-400">Chate Coaching Classes Jrn. Clg. of Science, Pune</p>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Higher Secondary Education</h3>
                  <p className="text-gray-300 mb-4">
                    Completed my 12th standard education at Chate Coaching Classes Junior College of Science in Pune, with a focus on Physics, Chemistry, and Mathematics.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-[#0A0A0A] p-4 rounded-md border border-[#333]">
                      <h4 className="text-lg font-medium mb-2 text-white">Academic Performance</h4>
                      <p className="text-gray-300 mb-2">
                        <span className="text-neon-pink">HSC:</span> 91.17%
                      </p>
                    </div>
                    
                    <div className="bg-[#0A0A0A] p-4 rounded-md border border-[#333]">
                      <h4 className="text-lg font-medium mb-2 text-white">Competitive Exams</h4>
                      <ul className="space-y-2">
                        <li className="text-gray-300">
                          <span className="text-neon-pink">JEE Main:</span> 96.28 percentile
                        </li>
                        <li className="text-gray-300">
                          <span className="text-neon-pink">JEE Advanced:</span> AIR 15445
                        </li>
                        <li className="text-gray-300">
                          <span className="text-neon-pink">MHT-CET:</span> 99.64 percentile
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-gray-300">
                    My strong academic performance and competitive exam results secured my admission to the prestigious Institute of Chemical Technology, Mumbai, for pursuing a degree in Chemical Engineering.
                  </p>
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

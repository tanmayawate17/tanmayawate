
import React from 'react';
import { Factory, CheckCircle, Calendar } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const IndustryVisits = () => {
  const keyLearnings = [
    "Comprehensive Process Safety Management (PSM) protocols and implementation",
    "Advanced Effluent Treatment Plant (ETP) operations and environmental compliance",
    "Batch process optimization and quality control procedures",
    "Sustainable manufacturing practices and energy efficiency measures",
    "Industrial automation and control systems in chemical manufacturing",
    "Supply chain management and logistics in the chemical industry"
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-neon-blue blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-neon-pink blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Industry </span>
              <span className="neon-text-blue">Visits</span>
            </h1>
            <p className="text-xl text-gray-400">Learning through practical industry exposure</p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0A0A0A] rounded-lg border border-[#333] p-8 mb-16 animate-fade-in hover:shadow-neon-blue transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-[#111] p-6 rounded-lg border border-[#333] text-center">
                    <Factory className="h-16 w-16 text-neon-blue mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Gharda Chemicals</h3>
                    <p className="text-gray-400 mb-1">Dombivali, Maharashtra</p>
                    <div className="flex items-center justify-center text-gray-400 mt-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>April 2025 (Upcoming)</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Gharda Chemicals Industrial Visit</h3>
                  <div className="mb-6">
                    <p className="text-gray-300 mb-4">
                      This upcoming industrial visit to Gharda Chemicals' facility in Dombivali represents a significant opportunity to
                      observe and learn from one of India's leading chemical manufacturing companies. The visit is scheduled for April 2025
                      and will provide valuable insights into industrial-scale chemical processes.
                    </p>
                    <p className="text-gray-300 mb-4">
                      Gharda Chemicals is renowned for its innovative approach to chemical manufacturing and has established itself as a
                      pioneer in the development of agrochemicals, specialty chemicals, and high-performance polymers. The company's commitment
                      to research and development, quality control, and sustainable practices makes it an ideal learning environment for
                      chemical engineering students.
                    </p>
                    <p className="text-gray-300">
                      During this visit, I expect to gain practical knowledge about industrial chemical processes, safety protocols,
                      quality control measures, and environmental compliance procedures that are essential for a comprehensive understanding
                      of chemical engineering in practice.
                    </p>
                  </div>
                  
                  <div className="bg-[#111] rounded-lg p-6 border border-[#333]">
                    <h4 className="text-xl font-medium mb-4 text-white">Key Learning Objectives</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {keyLearnings.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-neon-blue mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Future Visits Section */}
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-8 text-center">
                <span className="text-white">Future Industry </span>
                <span className="neon-text-pink">Visits</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0A0A0A] rounded-lg border border-[#333] p-6 hover:border-neon-pink transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-white">Reliance Industries</h3>
                  <p className="text-gray-400 mb-4">Jamnagar Refinery Complex</p>
                  <p className="text-gray-300">
                    Planned visit to one of the world's largest refining complexes to understand large-scale petroleum processing operations.
                  </p>
                </div>
                
                <div className="bg-[#0A0A0A] rounded-lg border border-[#333] p-6 hover:border-neon-green transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-white">Hindustan Unilever</h3>
                  <p className="text-gray-400 mb-4">Manufacturing Facility</p>
                  <p className="text-gray-300">
                    Planned visit to observe consumer product manufacturing processes and quality control systems.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Value of Industry Visits */}
            <div className="mt-16 animate-fade-in">
              <h2 className="text-2xl font-bold mb-8 text-center">
                <span className="text-white">Value of Industry </span>
                <span className="neon-text-green">Exposure</span>
              </h2>
              
              <div className="bg-[#0A0A0A] rounded-lg border border-[#333] p-8">
                <p className="text-gray-300 mb-4">
                  Industrial visits are a crucial component of my educational journey as they bridge the gap between theoretical knowledge and practical application. These experiences provide invaluable insights into real-world chemical engineering practices, challenges, and innovations.
                </p>
                <p className="text-gray-300 mb-4">
                  Through these visits, I aim to:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neon-green rounded-full mr-2 mt-2"></span>
                    <span className="text-gray-300">Observe industrial-scale processes and equipment operation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neon-green rounded-full mr-2 mt-2"></span>
                    <span className="text-gray-300">Understand practical implementation of process safety and environmental management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neon-green rounded-full mr-2 mt-2"></span>
                    <span className="text-gray-300">Learn about quality control procedures and industry standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neon-green rounded-full mr-2 mt-2"></span>
                    <span className="text-gray-300">Network with industry professionals and gain career insights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neon-green rounded-full mr-2 mt-2"></span>
                    <span className="text-gray-300">Identify areas for innovation and improvement in current processes</span>
                  </li>
                </ul>
                <p className="text-gray-300">
                  These visits significantly enhance my understanding of the chemical engineering profession and help shape my career aspirations and specialization interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryVisits;

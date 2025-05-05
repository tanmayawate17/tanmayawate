
import React from 'react';
import { Factory, CheckCircle, Calendar, MapPin } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const IndustryVisits = () => {
  const visits = [
    {
      company: "HPCL Mumbai Refinery",
      location: "Mumbai, Maharashtra",
      date: "February 2024",
      description: "My visit to the HPCL Mumbai Refinery was an insightful experience into the world of petroleum refining. Established in 1954, this refinery processes 7.5 MMTPA of crude oil. During the visit, I observed various processing units like the Crude Distillation Unit, Catalytic Reformer, and Fluidized Catalytic Cracking Unit. I learned about refinery operations, safety protocols, environmental management systems, and quality control measures. It was fascinating to see the application of chemical engineering principles in a real-world industrial setting.",
      highlights: [
        "Observed various processing units including Crude Distillation Unit, Catalytic Reformer, and Fluidized Catalytic Cracking Unit",
        "Learned about refinery operations, safety protocols, and environmental management systems",
        "Understood quality control measures and product testing procedures",
        "Gained insights into energy optimization strategies used in the refinery",
        "Explored the integration of automation and control systems in refinery operations"
      ]
    },
    {
      company: "Gharda Chemicals Limited",
      location: "Dombivali, Maharashtra",
      date: "March 2024",
      description: "Visiting Gharda Chemicals Limited in Dombivali was a valuable learning opportunity in specialty chemical manufacturing. Founded by Dr. K.H. Gharda, this company is known for its innovative approach to chemical manufacturing processes. The visit covered pesticide manufacturing, polymer production, and the company's R&D facilities. I learned about batch processing methods, quality control protocols, and effluent treatment systems. The company's commitment to research and innovation in developing novel chemical compounds and improving manufacturing processes was particularly inspiring.",
      highlights: [
        "Explored pesticide manufacturing and polymer production processes",
        "Understood batch processing methods and scale-up challenges",
        "Studied their quality control protocols for ensuring product consistency",
        "Observed their effluent treatment systems and environmental compliance measures",
        "Learned about Dr. Gharda's approach to innovation and process improvement"
      ]
    },
    {
      company: "Aarti Industries Limited",
      location: "Vapi, Gujarat",
      date: "April 2024",
      description: "The visit to Aarti Industries Limited in Vapi provided comprehensive insights into integrated chemical manufacturing. As a leading manufacturer of specialty chemicals and pharmaceuticals, the company demonstrates exceptional operational efficiency. I toured their manufacturing facilities for benzene-based intermediates and observed continuous process operations. Their focus on process intensification, safety management, and sustainable practices was evident throughout the facility. I gained valuable knowledge about speciality chemicals manufacturing and the importance of vertical integration in the chemical industry.",
      highlights: [
        "Toured manufacturing facilities for benzene-based intermediates",
        "Observed continuous process operations and reactor design principles",
        "Learned about process intensification strategies to improve efficiency",
        "Understood their safety management systems and hazard control measures",
        "Explored their sustainable practices and waste minimization approaches"
      ]
    }
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
          <div className="max-w-4xl mx-auto space-y-16">
            {visits.map((visit, index) => (
              <div 
                key={index}
                className="bg-[#0A0A0A] rounded-lg border border-[#333] p-8 animate-fade-in hover:shadow-neon-blue transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-[#111] p-6 rounded-lg border border-[#333] text-center">
                      <Factory className="h-16 w-16 text-neon-blue mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">{visit.company}</h3>
                      <div className="flex items-center justify-center text-gray-400 mb-1">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{visit.location}</span>
                      </div>
                      <div className="flex items-center justify-center text-gray-400 mt-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{visit.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-4 text-white">{visit.company} Visit</h3>
                    <div className="mb-6">
                      <p className="text-gray-300 mb-4">
                        {visit.description}
                      </p>
                    </div>
                    
                    <div className="bg-[#111] rounded-lg p-6 border border-[#333]">
                      <h4 className="text-xl font-medium mb-4 text-white">Key Learnings</h4>
                      <div className="space-y-3">
                        {visit.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-neon-blue mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Value of Industry Visits */}
            <div className="animate-fade-in">
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

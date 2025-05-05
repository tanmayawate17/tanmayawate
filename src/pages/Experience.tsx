
import React from 'react';
import { Briefcase, CalendarDays } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const Experience = () => {
  const experiences = [
    {
      title: "Content Creation for Startups",
      company: "Freelance",
      period: "2023 - Present",
      description: "Creating engaging digital content for technology startups, focusing on social media presence and audience engagement strategies.",
      responsibilities: [
        "Developing comprehensive social media content calendars",
        "Creating engaging posts optimized for different platforms",
        "Analyzing performance metrics and optimizing content strategy",
        "Collaborating with graphic designers for visual content"
      ]
    },
    {
      title: "Digital Marketing Intern",
      company: "Future Position",
      period: "Upcoming",
      description: "Placeholder for future internship opportunity in digital marketing, focusing on strategy development and implementation for businesses in the technology sector.",
      responsibilities: [
        "Assist in developing and implementing digital marketing strategies",
        "Conduct market research and competitor analysis",
        "Manage social media accounts and create engaging content",
        "Track and analyze campaign performance metrics"
      ]
    },
    {
      title: "Chemical Engineering Intern",
      company: "Future Position",
      period: "Upcoming",
      description: "Placeholder for future internship in chemical engineering, focusing on process simulation, optimization, and sustainable practices.",
      responsibilities: [
        "Assist in process design and optimization projects",
        "Conduct simulations using industry-standard software",
        "Collect and analyze experimental data",
        "Contribute to research on sustainable chemical processes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-neon-green blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Work </span>
              <span className="neon-text-green">Experience</span>
            </h1>
            <p className="text-xl text-gray-400">Professional journey and industry experience</p>
          </div>
        </div>
      </section>
      
      {/* Experience Timeline */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative space-y-16 animate-fade-in">
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-green via-neon-blue to-neon-pink opacity-30 transform md:-translate-x-px"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-[#0A0A0A] border-2 border-neon-blue shadow-neon-blue transform -translate-x-1/2 md:-translate-x-3 z-10"></div>
                  
                  {/* Date indicator */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8 md:text-left' : 'md:pr-8 md:text-right'}`}>
                    <div className="flex items-center mb-2 md:mb-0">
                      <CalendarDays className={`h-4 w-4 ${index % 2 === 0 ? 'mr-2 md:mr-2 md:order-1' : 'mr-2 md:ml-2 md:order-last'}`} />
                      <span className="text-gray-400">{exp.period}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className={`bg-[#0A0A0A] p-6 rounded-lg border border-[#333] hover:border-neon-blue transition-colors duration-300 ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <p className="text-neon-blue font-medium mb-3">{exp.company}</p>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-white font-medium">Key Responsibilities:</h4>
                        <ul className={`space-y-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-gray-400 flex items-center">
                              <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 flex-shrink-0"></span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Looking Forward Section */}
            <div className="mt-24 text-center animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#333]"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-[#0c0c0c] px-4 text-gray-400">Future Opportunities</span>
                </div>
              </div>
              
              <div className="mt-12">
                <Briefcase className="h-16 w-16 text-neon-pink mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Looking for New Opportunities</h3>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                  I am actively seeking internships and project collaborations in chemical engineering, process automation, 
                  and digital marketing to expand my practical experience and contribute to innovative solutions.
                </p>
                <a 
                  href="/contact" 
                  className="neon-btn inline-flex items-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experience;

import React from 'react';
import { Briefcase } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const Experience = () => {
  const experiences = [
    {
      title: "Research Internship - Computational Fluid Dynamics",
      company: "Institute of Chemical Technology, Mumbai",
      period: "May 2025 - Present",
      description: "Currently pursuing a research internship under Prof. Yogesh Shinde, focusing on simulating different impeller types in Continuous Stirred Tank Reactors (CSTR) and analyzing the computational fluid dynamics. The research aims to optimize reactor design and improve mixing efficiency through advanced CFD techniques.",
      responsibilities: [
        "Simulating various impeller designs in CSTR using computational fluid dynamics software",
        "Analyzing flow patterns, mixing efficiency, and shear stress distribution",
        "Optimizing reactor designs based on simulation results",
        "Documenting findings for potential publication in academic journals"
      ]
    },
    {
      title: "Social Media Manager",
      company: "ICT-Skin Donation Awareness Campaign",
      period: "February 2025 - May 2025",
      description: "Managed social media presence for the Skin Donation Awareness Campaign at ICT, focusing on creating engaging content and expanding the campaign's digital reach to promote awareness about skin donation.",
      responsibilities: [
        "Managed LinkedIn and X accounts, creating engaging content for project visibility",
        "Enhanced audience engagement through responsive communication and strategic posts",
        "Designed user-friendly Google Forms for inquiries and skin donation pledges",
        "Collaborated with teams to align social media efforts with campaign goals"
      ]
    },
    {
      title: "Digital Marketing Intern",
      company: "Om Industries, Islampur, Maharashtra",
      period: "May 2024 - July 2024",
      description: "Served as a Digital Marketing Intern, establishing and enhancing the company's online presence through strategic digital marketing initiatives.",
      responsibilities: [
        "Created a comprehensive company profile highlighting key services and capabilities",
        "Set up and optimized the company's LinkedIn page for professional networking",
        "Enhanced online visibility through strategic content creation",
        "Established digital marketing best practices for ongoing implementation"
      ]
    },
    {
      title: "Academic Content Developer",
      company: "Mohim Academy, Kolhapur, Maharashtra",
      period: "July 2023 - September 2023",
      description: "Worked as an Academic Content Developer, creating educational materials for students preparing for competitive exams like CET and JEE.",
      responsibilities: [
        "Developed comprehensive lecture notes, assignments, and tests for CET/JEE students",
        "Collaborated with faculty to ensure quality materials for student success",
        "Created problem-solving strategies for complex science and mathematics concepts",
        "Designed materials tailored to different learning styles and ability levels"
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
                    <span className="text-gray-400">{exp.period}</span>
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
                  artificial intelligence, and digital marketing to expand my practical experience and contribute to innovative solutions.
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

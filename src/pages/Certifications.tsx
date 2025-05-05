
import React from 'react';
import { Award, Calendar, BookOpen } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const Certifications = () => {
  const completedCertifications = [
    {
      title: "Career Essentials in Generative AI",
      provider: "Microsoft and LinkedIn",
      date: "2023",
      description: "Comprehensive introduction to generative AI technologies, applications, and ethical considerations.",
      skills: ["AI Fundamentals", "Prompt Engineering", "AI Applications", "Ethics in AI"],
      color: "blue"
    },
    {
      title: "Career Essentials in Business Analysis",
      provider: "Microsoft and LinkedIn",
      date: "2023",
      description: "In-depth training on business analysis methodologies, requirements gathering, and stakeholder management.",
      skills: ["Requirements Analysis", "Process Modeling", "Data Analysis", "Stakeholder Management"],
      color: "green"
    },
    {
      title: "Python for Data Science",
      provider: "NPTEL",
      date: "2023",
      description: "Detailed course on using Python for data manipulation, analysis, and visualization.",
      skills: ["Python Programming", "Data Analysis", "Data Visualization", "Statistical Methods"],
      color: "pink"
    },
    {
      title: "MATLAB On-ramp and Foundational Certifications",
      provider: "MathWorks",
      date: "2023",
      description: "Comprehensive training on MATLAB fundamentals, data analysis, and algorithm development.",
      skills: ["MATLAB Programming", "Data Analysis", "Algorithm Development", "Scientific Computing"],
      color: "blue"
    },
    {
      title: "Simulink On-ramp Certification",
      provider: "MathWorks",
      date: "2023",
      description: "Specialized training on Simulink for modeling, simulating, and analyzing dynamic systems.",
      skills: ["Simulink Modeling", "Dynamic Systems", "Simulation", "Control Systems"],
      color: "green"
    }
  ];

  const ongoingCertifications = [
    {
      title: "Digital Marketing Fundamentals",
      provider: "HubSpot Academy",
      date: "In Progress",
      description: "Comprehensive overview of digital marketing principles, strategies, and best practices.",
      skills: ["SEO", "Content Marketing", "Social Media", "Analytics"],
      color: "blue"
    },
    {
      title: "Content Marketing",
      provider: "HubSpot Academy",
      date: "In Progress",
      description: "Specialized course on creating and distributing valuable content to attract and engage audiences.",
      skills: ["Content Strategy", "Blogging", "Content Creation", "SEO Writing"],
      color: "pink"
    },
    {
      title: "Social Media Marketing",
      provider: "HubSpot Academy",
      date: "In Progress", 
      description: "In-depth training on leveraging social media platforms for business and personal branding.",
      skills: ["Platform Strategy", "Community Management", "Content Planning", "Analytics"],
      color: "green"
    },
    {
      title: "Digital Advertising",
      provider: "HubSpot Academy",
      date: "In Progress",
      description: "Comprehensive course on paid digital advertising strategies across multiple platforms.",
      skills: ["PPC", "Display Ads", "Campaign Management", "Budget Optimization"],
      color: "blue"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-neon-pink blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">My </span>
              <span className="neon-text-pink">Certifications</span>
            </h1>
            <p className="text-xl text-gray-400">Professional qualifications and ongoing education</p>
          </div>
        </div>
      </section>
      
      {/* Completed Certifications */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-white">Completed </span>
              <span className="neon-text-green">Certifications</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              {completedCertifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={`bg-[#0A0A0A] border border-[#333] rounded-lg p-6 transition-all duration-300 hover:shadow-neon-${cert.color} group`}
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-md bg-[#111] border border-[#333] group-hover:border-neon-${cert.color} transition-all duration-300`}>
                      <Award className={`h-6 w-6 text-gray-400 group-hover:text-neon-${cert.color} transition-colors duration-300`} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-neon-blue transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <div className="flex items-center text-gray-400 mt-1 mb-3">
                        <span className="mr-3">{cert.provider}</span>
                        <div className="flex items-center text-sm">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{cert.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className={`text-xs px-2 py-1 bg-[#111] border border-[#333] rounded-md text-gray-400 group-hover:border-neon-${cert.color} transition-all duration-300`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Ongoing Certifications */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-white">Ongoing </span>
              <span className="neon-text-blue">Certifications</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              {ongoingCertifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={`bg-[#0A0A0A] border border-[#333] rounded-lg p-6 transition-all duration-300 hover:shadow-neon-${cert.color} group`}
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-md bg-[#111] border border-[#333] group-hover:border-neon-${cert.color} transition-all duration-300`}>
                      <BookOpen className={`h-6 w-6 text-gray-400 group-hover:text-neon-${cert.color} transition-colors duration-300`} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-neon-blue transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <div className="flex items-center text-gray-400 mt-1 mb-3">
                        <span className="mr-3">{cert.provider}</span>
                        <div className="flex items-center text-sm">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{cert.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className={`text-xs px-2 py-1 bg-[#111] border border-[#333] rounded-md text-gray-400 group-hover:border-neon-${cert.color} transition-all duration-300`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Educational Philosophy */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-white">My Learning </span>
              <span className="neon-text-blue">Philosophy</span>
            </h2>
            
            <div className="bg-[#0c0c0c] p-8 rounded-lg border border-[#333] relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-gray-300 mb-6">
                  I believe that continuous learning is essential in today's rapidly evolving technological landscape. 
                  My approach to education combines formal academic knowledge with practical skills development and 
                  self-directed learning.
                </p>
                <p className="text-gray-300">
                  I'm committed to lifelong learning and constantly seek opportunities to expand my knowledge and skills 
                  across chemical engineering, technology, business, and creative domains. This multidisciplinary approach 
                  enables me to bring innovative perspectives to complex challenges.
                </p>
              </div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-blue rounded-full opacity-5"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-neon-pink rounded-full opacity-5"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;

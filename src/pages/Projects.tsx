
import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import ProjectCard from '@/components/project-card';

const Projects = () => {
  const academicProjects = [
    {
      title: "Chemical Process Simulation in DWSIM",
      description: "Designed and simulated a comprehensive chemical process involving distillation columns and heat exchangers to optimize energy efficiency and product purity.",
      tools: ["DWSIM", "Process Engineering", "Thermodynamics"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=500"
    },
    {
      title: "Heat Exchanger Optimization",
      description: "Developed a mathematical model using MATLAB to optimize heat exchanger design for maximum efficiency and minimal pressure drop.",
      tools: ["MATLAB", "Heat Transfer", "Optimization"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=500"
    },
    {
      title: "Batch Reactor Kinetics",
      description: "Analyzed reaction kinetics in batch reactors using computational methods to predict conversion rates and optimize reaction conditions.",
      tools: ["Python", "Chemical Kinetics", "Data Analysis"],
    }
  ];

  const digitalProjects = [
    {
      title: "Social Media Marketing Campaign",
      description: "Developed and executed a comprehensive social media strategy for a mock startup, resulting in significant improvements in brand awareness metrics.",
      tools: ["Digital Marketing", "Content Creation", "Analytics"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&h=500"
    },
    {
      title: "Stock Market Analysis Dashboard",
      description: "Created an interactive dashboard for tracking and analyzing stock market trends, focusing on chemical and technology sectors.",
      tools: ["Python", "Data Visualization", "Financial Analysis"],
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-neon-green blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">My </span>
              <span className="neon-text-green">Projects</span>
            </h1>
            <p className="text-xl text-gray-400">A showcase of my work in chemical engineering and digital marketing</p>
          </div>
        </div>
      </section>
      
      {/* Academic Projects */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-white">Chemical Engineering </span>
              <span className="neon-text-blue">Projects</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {academicProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tools={project.tools}
                  image={project.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Digital Projects */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-white">Digital & Business </span>
              <span className="neon-text-pink">Projects</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              {digitalProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tools={project.tools}
                  image={project.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Future Projects */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-white">Future </span>
              <span className="neon-text-green">Endeavors</span>
            </h2>
            <p className="text-gray-300 mb-8">
              I'm constantly exploring new ideas and technologies. Some areas I'm looking to explore in upcoming projects:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
              <div className="bg-[#0A0A0A] border border-[#333] rounded-lg p-5 hover:border-neon-green transition-colors">
                <h3 className="text-lg font-medium mb-2 text-white">AI in Process Control</h3>
                <p className="text-gray-400 text-sm">Exploring machine learning applications for optimizing chemical processes</p>
              </div>
              <div className="bg-[#0A0A0A] border border-[#333] rounded-lg p-5 hover:border-neon-blue transition-colors">
                <h3 className="text-lg font-medium mb-2 text-white">Sustainable Engineering</h3>
                <p className="text-gray-400 text-sm">Developing eco-friendly approaches to chemical production</p>
              </div>
              <div className="bg-[#0A0A0A] border border-[#333] rounded-lg p-5 hover:border-neon-pink transition-colors">
                <h3 className="text-lg font-medium mb-2 text-white">FinTech Applications</h3>
                <p className="text-gray-400 text-sm">Creating tools for financial analysis in the chemical industry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;

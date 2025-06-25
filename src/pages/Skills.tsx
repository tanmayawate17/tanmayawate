
import React from 'react';
import { Code, Database, PenTool, ChartBar, FileText, Users, Settings } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import SkillCard from '@/components/skill-card';

const Skills = () => {
  const technicalSkills = [
    {
      title: 'MATLAB & Simulink',
      icon: Code,
      description: 'Advanced simulation and computational analysis',
      color: 'blue'
    },
    {
      title: 'Python',
      icon: Code,
      description: 'Data analysis and process automation',
      color: 'blue'
    },
    {
      title: 'JavaScript',
      icon: Code,
      description: 'Web application development',
      color: 'blue'
    },
    {
      title: 'HTML & CSS',
      icon: Code,
      description: 'Frontend web development',
      color: 'blue'
    },
    {
      title: 'DWSIM',
      icon: Database,
      description: 'Chemical process simulation',
      color: 'blue'
    },
    {
      title: 'Ansys Fluent',
      icon: Settings,
      description: 'Advanced computational fluid dynamics simulation',
      color: 'blue'
    },
    {
      title: 'Computational Fluid Dynamics',
      icon: Settings,
      description: 'Flow analysis and heat transfer modeling',
      color: 'blue'
    },
    {
      title: 'Process Engineering',
      icon: Database,
      description: 'Design and optimization of chemical processes',
      color: 'blue'
    }
  ];

  const businessSkills = [
    {
      title: 'Business Analysis',
      icon: ChartBar,
      description: 'Strategic analysis and planning',
      color: 'pink'
    },
    {
      title: 'Digital Marketing',
      icon: FileText,
      description: 'Social media and content marketing',
      color: 'pink'
    },
    {
      title: 'Finance',
      icon: ChartBar,
      description: 'Financial planning and stock market analysis',
      color: 'pink'
    },
    {
      title: 'Content Creation',
      icon: FileText,
      description: 'Development of engaging digital content',
      color: 'pink'
    },
    {
      title: 'Social Media Management',
      icon: FileText,
      description: 'Platform strategy and community engagement',
      color: 'pink'
    },
    {
      title: 'Teamwork',
      icon: Users,
      description: 'Collaborative problem-solving and communication',
      color: 'pink'
    },
    {
      title: 'Strong Work Ethic',
      icon: ChartBar,
      description: 'Dedication, reliability, and commitment to excellence',
      color: 'pink'
    }
  ];

  const creativeSkills = [
    {
      title: 'Drawing',
      icon: PenTool,
      description: 'Freehand drawing and illustration',
      color: 'green'
    },
    {
      title: 'Sketching',
      icon: PenTool,
      description: 'Detailed sketch creation',
      color: 'green'
    },
    {
      title: 'Nature Landscapes',
      icon: PenTool,
      description: 'Artistic representation of natural scenery',
      color: 'green'
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
              <span className="neon-text-pink">Skills</span>
            </h1>
            <p className="text-xl text-gray-400">A diverse set of technical, business, and creative abilities</p>
          </div>
        </div>
      </section>
      
      {/* Technical Skills */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-white">Technical </span>
              <span className="neon-text-blue">Skills</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
              {technicalSkills.map((skill, index) => (
                <SkillCard
                  key={index}
                  title={skill.title}
                  icon={skill.icon}
                  description={skill.description}
                  color={skill.color as 'blue' | 'pink' | 'green'}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Skills */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-white">Business </span>
              <span className="neon-text-pink">Skills</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
              {businessSkills.map((skill, index) => (
                <SkillCard
                  key={index}
                  title={skill.title}
                  icon={skill.icon}
                  description={skill.description}
                  color={skill.color as 'blue' | 'pink' | 'green'}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Creative Skills */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-white">Creative </span>
              <span className="neon-text-green">Skills</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in">
              {creativeSkills.map((skill, index) => (
                <SkillCard
                  key={index}
                  title={skill.title}
                  icon={skill.icon}
                  description={skill.description}
                  color={skill.color as 'blue' | 'pink' | 'green'}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;

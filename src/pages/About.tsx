
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const About = () => {
  const journeyItems = [
    {
      year: "2021",
      title: "Excelled in 10th Standard",
      description: "Achieved stellar performance in 10th board exams, igniting my passion for science and engineering."
    },
    {
      year: "2023",
      title: "Conquered Competitive Exams",
      description: "Scored 99.47 percentile in CET, 97.86 percentile in JEE Mains, and cleared JEE Advanced, and completed 12th boards with 83%, opening doors to top institutes."
    },
    {
      year: "2023",
      title: "Joined ICT, Mumbai",
      description: "Enrolled in B.E Chemical Engineering at ICT, Mumbai, exploring thermodynamics and process control."
    },
    {
      year: "2023–2024",
      title: "Immersed in Chemical Engineering",
      description: "Learned MATLAB, Simulink, Python, and started HubSpot digital marketing certifications."
    },
    {
      year: "Jan 2025",
      title: "Expanded Industry Exposure",
      description: "Toured Ahuja Engineering Services and NFC Effluent Treatment Company, Hyderabad, learning biogas production and effluent treatment."
    },
    {
      year: "Apr 2025",
      title: "Explored Advanced Technologies",
      description: "Visited Reliance Technology Center, Patalganga, and Aarti Industries, Mumbai, gaining insights into automation, polymer production, and zero liquid discharge."
    },
    {
      year: "May 2025",
      title: "Research Focus and Community Impact",
      description: "Successfully completed ICT Skin Donation Community Project as Social Media Manager and currently pursuing CFD research internship under Prof. Yogesh Shinde, focusing on CSTR impeller performance optimization."
    }
  ];

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
              <span className="text-white">About </span>
              <span className="neon-text-blue">Me</span>
            </h1>
            <p className="text-xl text-gray-400">Personal summary and professional journey</p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 neon-text-blue">Personal Summary</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Greetings! I'm Tanmay Awate, a third-year undergraduate at the prestigious Institute of Chemical Technology, Mumbai, driven by a passion for innovation and excellence in the field of chemical engineering.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    My journey revolves around exploring advanced technologies to transform the chemical industry. I'm channeling my energy into industry automation and envisioning how technologies like artificial intelligence can revolutionize chemical processes.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Proficient in MATLAB, Simulink, Python, JavaScript, CSS, HTML, and also Business Analysis. In addition to my technical pursuits, I have a keen interest in Finance and Digital Marketing, continuously sharpening my business and strategic acumen through stock market analysis and digital explorations.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    I also immerse myself in self-help books and innovation-focused content, fueling my aspirations to become a trailblazer in both technology and entrepreneurship.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Creativity and holistic well-being are essential to me. I express my artistic side through drawing, sketching, and painting nature landscapes while staying active as a fitness enthusiast. I am committed to lifelong learning and self-improvement, striving to make a meaningful impact in the ever-evolving landscape of technology and industry.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Let's connect and collaborate to explore endless possibilities and drive transformative change together!
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 neon-text-blue">My Journey</h2>
                <p className="text-gray-300 leading-relaxed mb-8 neon-text-blue">
                  My journey reflects a passion for chemical engineering, innovation, and social impact.
                </p>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-pink to-neon-green"></div>
                  
                  {/* Timeline items */}
                  <div className="space-y-12">
                    {journeyItems.map((item, index) => (
                      <div key={index} className="relative pl-24">
                        {/* Year marker */}
                        <div className="absolute left-0 top-0">
                          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#111] border border-neon-blue text-neon-blue font-semibold shadow-neon-blue p-2">
                            {item.year}
                          </div>
                        </div>
                        {/* Content */}
                        <div className="bg-[#0A0A0A] p-5 rounded-lg border border-[#333] hover:border-neon-blue hover:shadow-neon-blue transition-all duration-300 hover:scale-[1.02]">
                          <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 neon-text-blue">My Vision</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I envision a future where chemical engineering and digital technologies converge to create sustainable and efficient solutions for global challenges. My goal is to be at the forefront of this transformation, combining technical expertise with business acumen.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Through continuous learning and innovation, I aspire to contribute to the evolution of the chemical industry and make a meaningful impact on society and the environment.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-12">
                <Link to="/skills" className="neon-btn">
                  Explore My Skills
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
                <Link to="/contact" className="px-6 py-2 border-2 border-gray-700 rounded-md text-gray-300 hover:border-white hover:text-white transition-colors duration-300">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

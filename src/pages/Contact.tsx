
import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, MapPin, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-neon-blue blur-[100px]"></div>
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-neon-pink blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Get In </span>
              <span className="neon-text-blue">Touch</span>
            </h1>
            <p className="text-xl text-gray-400">Let's connect and explore opportunities to collaborate</p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300 text-white"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300 text-white"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300 text-white"
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300 text-white"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full neon-btn flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="inline-flex items-center">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6 text-white">Contact Information</h2>
                
                <div className="bg-[#0A0A0A] border border-[#333] rounded-lg p-6 mb-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#111] border border-[#333]">
                          <Mail className="h-6 w-6 text-neon-blue" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">Email</h3>
                        <a href="mailto:tanmayawate0017@gmail.com" className="text-gray-400 hover:text-neon-blue transition-colors">
                          tanmayawate0017@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#111] border border-[#333]">
                          <MapPin className="h-6 w-6 text-neon-pink" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">Location</h3>
                        <p className="text-gray-400">Mumbai, Maharashtra, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#111] border border-[#333]">
                          <Linkedin className="h-6 w-6 text-neon-blue" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/tanmay-awate-027792282/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors flex items-center">
                          <Linkedin className="h-5 w-5 mr-2" />
                          <span>Tanmay Awate</span>
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#111] border border-[#333]">
                          <Instagram className="h-6 w-6 text-neon-pink" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">Instagram</h3>
                        <a href="https://www.instagram.com/tanmay_awate1729/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-pink transition-colors flex items-center">
                          <Instagram className="h-5 w-5 mr-2" />
                          <span>@tanmay_awate1729</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Resume Download */}
                <div className="bg-[#0A0A0A] border border-[#333] rounded-lg p-6 mb-8 relative overflow-hidden group">
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-3 text-white">Download Resume</h3>
                    <p className="text-gray-400 mb-4">
                      Get a copy of my detailed resume to learn more about my skills, education, and experience.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 border border-neon-pink text-neon-pink rounded-md hover:bg-neon-pink hover:text-black transition-all duration-300"
                    >
                      Download CV
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                  <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-neon-pink rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                
                {/* Location Map */}
                <div className="bg-[#0A0A0A] border border-[#333] rounded-lg overflow-hidden h-60 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <MapPin className="h-10 w-10 text-neon-blue mx-auto mb-3" />
                      <h3 className="text-lg font-medium text-white mb-1">Mumbai, India</h3>
                      <p className="text-gray-400 text-sm">Institute of Chemical Technology</p>
                    </div>
                  </div>
                  {/* Add a pulsing dot to simulate a map location */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-neon-blue rounded-full relative">
                      <div className="absolute inset-0 bg-neon-blue rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>
                  {/* Simulated map grid lines */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={`h-${i}`} className="w-full h-px bg-[#222]" style={{ gridRow: i + 1 }}></div>
                    ))}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={`v-${i}`} className="h-full w-px bg-[#222]" style={{ gridColumn: i + 1 }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-white">Let's Create Something </span>
              <span className="neon-text-green">Amazing Together</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/tanmay-awate-027792282/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#111] border border-[#333] text-gray-400 hover:text-neon-blue hover:border-neon-blue transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/tanmay_awate1729/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#111] border border-[#333] text-gray-400 hover:text-neon-pink hover:border-neon-pink transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:tanmayawate0017@gmail.com" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#111] border border-[#333] text-gray-400 hover:text-neon-green hover:border-neon-green transition-all duration-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

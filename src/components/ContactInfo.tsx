import React from 'react';
import { User, Mail, Phone, Linkedin, Instagram, Github } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <User className="mr-3 text-blue-400" />
        Developer Information
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-slate-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-3">Mallapuram Venkata Rao</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Data Analyst & Python Developer specializing in web scraping, data analysis, 
              and market intelligence solutions. Passionate about transforming raw data 
              into actionable business insights.
            </p>
          </div>
          
          <div className="bg-slate-700 p-4 rounded-lg">
            <h4 className="text-white font-medium mb-3">Technical Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'BeautifulSoup', 'Pandas', 'Data Analysis', 'Web Scraping', 'Matplotlib'].map((skill, index) => (
                <span key={index} className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-slate-700 p-4 rounded-lg">
            <h4 className="text-white font-medium mb-3">Contact Information</h4>
            <div className="space-y-3">
              <a 
                href="mailto:venkatmallapuram7@gmail.com" 
                className="flex items-center text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Mail size={16} className="mr-3 text-blue-400" />
                venkatmallapuram7@gmail.com
              </a>
              <a 
                href="tel:9177916981" 
                className="flex items-center text-slate-300 hover:text-green-400 transition-colors"
              >
                <Phone size={16} className="mr-3 text-green-400" />
                +91 9177916981
              </a>
            </div>
          </div>
          
          <div className="bg-slate-700 p-4 rounded-lg">
            <h4 className="text-white font-medium mb-3">Social Media</h4>
            <div className="space-y-3">
              <a 
                href="http://www.linkedin.com/in/mallapuram-venkata-rao-0ab7a42b1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-slate-300 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={16} className="mr-3 text-blue-600" />
                LinkedIn Profile
              </a>
              <a 
                href="https://www.instagram.com/invites/contact/?igsh=1h6b9sibc6wxd&utm_content=rydjjrd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-slate-300 hover:text-pink-400 transition-colors"
              >
                <Instagram size={16} className="mr-3 text-pink-400" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
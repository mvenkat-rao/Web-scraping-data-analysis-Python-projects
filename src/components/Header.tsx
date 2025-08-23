import React from 'react';
import { Database, Mail, Linkedin, Instagram, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Database className="mr-3 text-blue-400" size={32} />
            <div>
              <h1 className="text-2xl font-bold">Web Scraping & Data Analysis</h1>
              <p className="text-slate-300">Market Intelligence Platform</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:venkatmallapuram7@gmail.com" className="flex items-center hover:text-blue-400 transition-colors">
              <Mail size={16} className="mr-1" />
              venkatmallapuram7@gmail.com
            </a>
            <a href="tel:9177916981" className="flex items-center hover:text-green-400 transition-colors">
              <Phone size={16} className="mr-1" />
              +91 9177916981
            </a>
            <a href="http://www.linkedin.com/in/mallapuram-venkata-rao-0ab7a42b1" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-600 transition-colors">
              <Linkedin size={16} className="mr-1" />
              LinkedIn
            </a>
            <a href="https://www.instagram.com/invites/contact/?igsh=1h6b9sibc6wxd&utm_content=rydjjrd" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-400 transition-colors">
              <Instagram size={16} className="mr-1" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
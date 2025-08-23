import React from 'react';
import { Code, Database, FileText, TrendingUp } from 'lucide-react';

export const ProjectOverview: React.FC = () => {
  const objectives = [
    {
      icon: Code,
      title: "Web Scraping Tool Development",
      description: "Automated data collection from competitor websites using advanced scraping techniques"
    },
    {
      icon: Database,
      title: "Data Storage & Management",
      description: "Structured data storage in CSV/Excel format with efficient retrieval systems"
    },
    {
      icon: TrendingUp,
      title: "Data Analysis & Insights",
      description: "Statistical analysis and visualization using pandas and matplotlib libraries"
    },
    {
      icon: FileText,
      title: "Reporting & Documentation",
      description: "Comprehensive reporting with actionable insights and recommendations"
    }
  ];

  const technologies = [
    "Python", "BeautifulSoup", "Requests", "Pandas", "Matplotlib", "CSV", "Excel", "Data Visualization"
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">Problem Statement</h3>
        <p className="text-slate-300 leading-relaxed">
          A company needs to gather market data from various websites to analyze competitors, 
          product prices, and customer reviews. Manual data collection is time-consuming and 
          automation is required for efficient market intelligence.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-green-400 mb-4">Key Objectives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {objectives.map((objective, index) => (
            <div key={index} className="bg-slate-700 p-4 rounded-lg">
              <div className="flex items-start">
                <objective.icon className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-white font-medium mb-2">{objective.title}</h4>
                  <p className="text-slate-400 text-sm">{objective.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-orange-400 mb-4">Technologies Used</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
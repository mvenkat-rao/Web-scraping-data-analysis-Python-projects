import React from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { ProjectOverview } from './components/ProjectOverview';
import { DataVisualization } from './components/DataVisualization';
import { ContactInfo } from './components/ContactInfo';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Web Scraping & Data Analysis
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive market intelligence solution for competitive analysis, 
              price monitoring, and customer sentiment tracking
            </p>
          </div>

          <ProjectOverview />
          <Dashboard />
          <DataVisualization />
          <ContactInfo />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2025 Mallapuram Venkata Rao. Professional Data Analysis & Web Scraping Solutions.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
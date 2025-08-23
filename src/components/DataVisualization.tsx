import React, { useEffect, useState } from 'react';
import { BarChart3, PieChart, LineChart } from 'lucide-react';

export const DataVisualization: React.FC = () => {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);

  const priceData = [
    { name: 'Competitor 1', price: 299.99, color: 'bg-blue-500' },
    { name: 'Competitor 2', price: 349.99, color: 'bg-green-500' },
    { name: 'Competitor 3', price: 275.50, color: 'bg-orange-500' },
  ];

  const maxPrice = Math.max(...priceData.map(d => d.price));

  const reviewData = [
    { category: 'Positive', count: 2100, percentage: 62, color: 'bg-green-500' },
    { category: 'Neutral', count: 850, percentage: 25, color: 'bg-yellow-500' },
    { category: 'Negative', count: 442, percentage: 13, color: 'bg-red-500' },
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <LineChart className="mr-3 text-purple-400" />
        Data Visualization & Analysis
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Price Comparison Chart */}
        <div className="bg-slate-700 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="mr-2 text-blue-400" size={20} />
            Price Comparison
          </h3>
          <div className="space-y-4">
            {priceData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">{item.name}</span>
                  <span className="text-white font-bold">${item.price}</span>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${item.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: animationProgress ? `${(item.price / maxPrice) * 100}%` : '0%' 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Sentiment Analysis */}
        <div className="bg-slate-700 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <PieChart className="mr-2 text-green-400" size={20} />
            Review Sentiment Analysis
          </h3>
          <div className="space-y-4">
            {reviewData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">{item.category}</span>
                  <span className="text-white font-bold">{item.count} ({item.percentage}%)</span>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${item.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: animationProgress ? `${item.percentage}%` : '0%' 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="mt-8 bg-slate-700 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-400 mb-4">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-800 p-4 rounded-lg">
            <h4 className="text-white font-medium mb-2">Price Analysis</h4>
            <p className="text-slate-300 text-sm">
              Competitor 3 offers the most competitive pricing at $275.50, providing a 
              21% advantage over the highest priced competitor.
            </p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg">
            <h4 className="text-white font-medium mb-2">Market Sentiment</h4>
            <p className="text-slate-300 text-sm">
              62% positive reviews across all competitors indicate strong market 
              acceptance, with opportunities to capture the 13% negative sentiment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
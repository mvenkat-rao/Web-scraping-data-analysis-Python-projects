import React, { useState, useEffect } from 'react';
import { TrendingUp, Target, Globe, BarChart3 } from 'lucide-react';

interface ScrapedData {
  website: string;
  products: number;
  avgPrice: number;
  reviews: number;
  lastUpdated: string;
}

export const Dashboard: React.FC = () => {
  const [data, setData] = useState<ScrapedData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setData([
        {
          website: 'competitor1.com',
          products: 150,
          avgPrice: 299.99,
          reviews: 1250,
          lastUpdated: '2 minutes ago'
        },
        {
          website: 'competitor2.com',
          products: 87,
          avgPrice: 349.99,
          reviews: 892,
          lastUpdated: '5 minutes ago'
        },
        {
          website: 'competitor3.com',
          products: 203,
          avgPrice: 275.50,
          reviews: 2100,
          lastUpdated: '8 minutes ago'
        }
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  const totalProducts = data.reduce((sum, item) => sum + item.products, 0);
  const avgMarketPrice = data.reduce((sum, item) => sum + item.avgPrice, 0) / data.length || 0;
  const totalReviews = data.reduce((sum, item) => sum + item.reviews, 0);

  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <BarChart3 className="mr-3 text-blue-400" />
        Market Intelligence Dashboard
      </h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Products</p>
              <p className="text-2xl font-bold">{totalProducts.toLocaleString()}</p>
            </div>
            <Target className="text-blue-200" size={24} />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-green-700 p-4 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Avg Market Price</p>
              <p className="text-2xl font-bold">${avgMarketPrice.toFixed(2)}</p>
            </div>
            <TrendingUp className="text-green-200" size={24} />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500 to-orange-700 p-4 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Total Reviews</p>
              <p className="text-2xl font-bold">{totalReviews.toLocaleString()}</p>
            </div>
            <Globe className="text-orange-200" size={24} />
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="text-slate-300 py-3 px-4">Website</th>
              <th className="text-slate-300 py-3 px-4">Products</th>
              <th className="text-slate-300 py-3 px-4">Avg Price</th>
              <th className="text-slate-300 py-3 px-4">Reviews</th>
              <th className="text-slate-300 py-3 px-4">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={5} className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
                  <p className="text-slate-400 mt-2">Scraping data...</p>
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index} className="border-b border-slate-700 hover:bg-slate-700 transition-colors">
                  <td className="text-white py-3 px-4 font-medium">{item.website}</td>
                  <td className="text-slate-300 py-3 px-4">{item.products}</td>
                  <td className="text-green-400 py-3 px-4 font-bold">${item.avgPrice}</td>
                  <td className="text-slate-300 py-3 px-4">{item.reviews.toLocaleString()}</td>
                  <td className="text-blue-400 py-3 px-4 text-sm">{item.lastUpdated}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
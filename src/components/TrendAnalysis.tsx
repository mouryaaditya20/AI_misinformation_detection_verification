import React, { useState } from 'react';
import { TrendingUp, BarChart3, PieChart, Calendar, Filter } from 'lucide-react';

export const TrendAnalysis: React.FC = () => {
  const [timeRange, setTimeRange] = useState('24h');
  const [crisisType, setCrisisType] = useState('all');

  const trendingTopics = [
    {
      id: 1,
      topic: "Emergency shelter capacity",
      mentions: 1247,
      growth: 45,
      sentiment: 'negative',
      platforms: ['Twitter', 'Facebook', 'Reddit'],
      peakTime: '2 hours ago',
      verification: 'verified'
    },
    {
      id: 2,
      topic: "Water safety concerns",
      mentions: 892,
      growth: 23,
      sentiment: 'mixed',
      platforms: ['News', 'Twitter', 'Local Forums'],
      peakTime: '45 minutes ago',
      verification: 'investigating'
    },
    {
      id: 3,
      topic: "Evacuation route status",
      mentions: 634,
      growth: 67,
      sentiment: 'concern',
      platforms: ['Reddit', 'Telegram', 'News'],
      peakTime: '1 hour ago',
      verification: 'false'
    },
    {
      id: 4,
      topic: "Emergency services response",
      mentions: 445,
      growth: 12,
      sentiment: 'positive',
      platforms: ['Twitter', 'Official Sources'],
      peakTime: '30 minutes ago',
      verification: 'verified'
    }
  ];

  const crisisCategories = [
    { name: 'Natural Disasters', percentage: 35, color: 'bg-red-500' },
    { name: 'Infrastructure', percentage: 28, color: 'bg-orange-500' },
    { name: 'Public Health', percentage: 20, color: 'bg-yellow-500' },
    { name: 'Security', percentage: 12, color: 'bg-blue-500' },
    { name: 'Other', percentage: 5, color: 'bg-gray-500' }
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600 bg-green-100';
      case 'negative': return 'text-red-600 bg-red-100';
      case 'mixed': return 'text-yellow-600 bg-yellow-100';
      case 'concern': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getVerificationColor = (verification: string) => {
    switch (verification) {
      case 'verified': return 'text-green-600 bg-green-100';
      case 'false': return 'text-red-600 bg-red-100';
      case 'investigating': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Trend Analysis</h2>
          <p className="text-gray-600 mt-2">Emerging patterns in crisis-related misinformation</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="1h">Last Hour</option>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={crisisType}
              onChange={(e) => setCrisisType(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Crises</option>
              <option value="natural">Natural Disasters</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="health">Public Health</option>
              <option value="security">Security</option>
            </select>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <TrendingUp className="h-6 w-6" />
            </div>
            <span className="text-sm text-gray-500">Last 24h</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">47</div>
          <div className="text-gray-600 text-sm mb-2">Trending Topics</div>
          <div className="text-green-600 text-sm font-medium">↗ +12% from yesterday</div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
              <BarChart3 className="h-6 w-6" />
            </div>
            <span className="text-sm text-gray-500">Peak activity</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">3,218</div>
          <div className="text-gray-600 text-sm mb-2">Mentions/Hour</div>
          <div className="text-red-600 text-sm font-medium">↗ +34% surge detected</div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
              <PieChart className="h-6 w-6" />
            </div>
            <span className="text-sm text-gray-500">Accuracy rate</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">73%</div>
          <div className="text-gray-600 text-sm mb-2">False Information</div>
          <div className="text-orange-600 text-sm font-medium">↗ Higher than baseline</div>
        </div>
      </div>

      {/* Crisis Categories */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Misinformation by Crisis Category</h3>
        
        <div className="space-y-4">
          {crisisCategories.map((category, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">{category.name}</span>
                  <span className="text-gray-900 font-semibold">{category.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${category.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Topics */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Trending Topics</h3>
        
        <div className="space-y-4">
          {trendingTopics.map((topic) => (
            <div key={topic.id} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">{topic.topic}</h4>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-600">
                      <strong>{topic.mentions.toLocaleString()}</strong> mentions
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${topic.growth > 30 ? 'text-red-600 bg-red-100' : 'text-green-600 bg-green-100'}`}>
                      {topic.growth > 0 ? '+' : ''}{topic.growth}% growth
                    </span>
                    <span className="text-gray-600">Peak: {topic.peakTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSentimentColor(topic.sentiment)}`}>
                    {topic.sentiment}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getVerificationColor(topic.verification)}`}>
                    {topic.verification}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {topic.platforms.map((platform, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
                
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
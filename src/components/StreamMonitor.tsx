import React, { useState } from 'react';
import { Search, Filter, Globe, MessageSquare, Newspaper, Radio } from 'lucide-react';

export const StreamMonitor: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSource, setSelectedSource] = useState('all');

  const contentStreams = [
    {
      id: 1,
      source: 'Twitter/X',
      icon: MessageSquare,
      type: 'Social Media',
      status: 'active',
      posts: 2847,
      suspicious: 23,
      lastUpdate: '30 seconds ago',
      keywords: ['emergency', 'evacuation', 'water safety']
    },
    {
      id: 2,
      source: 'Reddit',
      icon: MessageSquare,
      type: 'Forum',
      status: 'active',
      posts: 1456,
      suspicious: 8,
      lastUpdate: '45 seconds ago',
      keywords: ['crisis response', 'local news', 'rumors']
    },
    {
      id: 3,
      source: 'News Aggregator',
      icon: Newspaper,
      type: 'News',
      status: 'active',
      posts: 892,
      suspicious: 12,
      lastUpdate: '1 minute ago',
      keywords: ['breaking news', 'official statements', 'updates']
    },
    {
      id: 4,
      source: 'Emergency Radio',
      icon: Radio,
      type: 'Official',
      status: 'monitoring',
      posts: 156,
      suspicious: 0,
      lastUpdate: '2 minutes ago',
      keywords: ['emergency alerts', 'official updates']
    },
    {
      id: 5,
      source: 'Local Forums',
      icon: Globe,
      type: 'Community',
      status: 'active',
      posts: 634,
      suspicious: 15,
      lastUpdate: '3 minutes ago',
      keywords: ['community updates', 'local concerns', 'rumors']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'monitoring': return 'bg-blue-100 text-blue-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSuspiciousColor = (count: number) => {
    if (count === 0) return 'text-green-600';
    if (count <= 10) return 'text-yellow-600';
    if (count <= 20) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Content Stream Monitoring</h2>
        <div className="text-sm text-gray-600">
          Monitoring 5 active streams • {contentStreams.reduce((sum, stream) => sum + stream.posts, 0)} posts analyzed
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search content streams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Sources</option>
                <option value="social">Social Media</option>
                <option value="news">News</option>
                <option value="official">Official</option>
                <option value="community">Community</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Stream Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentStreams.map((stream) => {
          const Icon = stream.icon;
          
          return (
            <div key={stream.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{stream.source}</h3>
                    <p className="text-sm text-gray-600">{stream.type}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(stream.status)}`}>
                  {stream.status}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Total Posts</span>
                  <span className="font-semibold text-gray-900">{stream.posts.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Suspicious Content</span>
                  <span className={`font-semibold ${getSuspiciousColor(stream.suspicious)}`}>
                    {stream.suspicious}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Last Update</span>
                  <span className="text-sm text-gray-900">{stream.lastUpdate}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Monitoring Keywords:</p>
                <div className="flex flex-wrap gap-1">
                  {stream.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
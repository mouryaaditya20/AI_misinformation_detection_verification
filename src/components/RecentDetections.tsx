import React from 'react';
import { Clock, ExternalLink, AlertCircle } from 'lucide-react';

export const RecentDetections: React.FC = () => {
  const detections = [
    {
      id: 1,
      claim: "Unverified reports of water contamination in major metropolitan areas",
      source: "Social Media Trend",
      confidence: 0.89,
      status: "Investigating",
      timestamp: "2 minutes ago",
      severity: "high",
      isNew: true
    },
    {
      id: 2,
      claim: "False statistics about emergency response times during recent crisis",
      source: "News Articles",
      confidence: 0.94,
      status: "Debunked",
      timestamp: "15 minutes ago",
      severity: "medium",
      isNew: false
    },
    {
      id: 3,
      claim: "Misleading information about evacuation routes and procedures",
      source: "Forum Posts",
      confidence: 0.76,
      status: "Monitoring",
      timestamp: "28 minutes ago",
      severity: "high",
      isNew: false
    },
    {
      id: 4,
      claim: "Inaccurate casualty figures being circulated across platforms",
      source: "Multiple Sources",
      confidence: 0.91,
      status: "Fact-checked",
      timestamp: "1 hour ago",
      severity: "critical",
      isNew: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Investigating': return 'bg-yellow-100 text-yellow-800';
      case 'Debunked': return 'bg-red-100 text-red-800';
      case 'Monitoring': return 'bg-blue-100 text-blue-800';
      case 'Fact-checked': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600';
      case 'high': return 'text-orange-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
          <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
          <span>Recent Detections</span>
        </h3>
        <button className="text-blue-600 hover:text-blue-700 font-bold text-sm flex items-center space-x-1 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-all duration-300">
          <span>View All</span>
          <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      <div className="space-y-4">
        {detections.map((detection) => (
          <div
            key={detection.id}
            className={`relative p-5 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 group cursor-pointer ${detection.isNew ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200' : 'hover:bg-gray-50'}`}
          >
            {detection.isNew && (
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce shadow-lg">
                NEW
              </div>
            )}
            
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                <AlertCircle className={`h-5 w-5 ${getSeverityColor(detection.severity)} group-hover:animate-pulse`} />
                <span className={`text-xs font-bold uppercase tracking-wider ${getSeverityColor(detection.severity)} bg-white/80 px-2 py-1 rounded-md`}>
                  {detection.severity}
                </span>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(detection.status)} shadow-sm`}>
                {detection.status}
              </span>
            </div>

            <p className="text-gray-900 font-semibold mb-3 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
              {detection.claim}
            </p>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Source: <span className="text-gray-800">{detection.source}</span></span>
                <span className="text-blue-600 font-bold bg-blue-100 px-2 py-1 rounded-md">
                  {Math.round(detection.confidence * 100)}% confidence
                </span>
              </div>
              <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-md">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="font-medium">{detection.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
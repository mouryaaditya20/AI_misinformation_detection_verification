import React, { useState } from 'react';
import { AlertTriangle, Bell, Clock, MapPin, Users, ExternalLink } from 'lucide-react';

export const AlertSystem: React.FC = () => {
  const [selectedSeverity, setSelectedSeverity] = useState('all');

  const alerts = [
    {
      id: 1,
      title: "Widespread Misinformation Campaign Detected",
      description: "Coordinated spread of false evacuation information across multiple social platforms",
      severity: "critical",
      location: "Metropolitan Area",
      affectedPopulation: "~500,000",
      timestamp: "2 minutes ago",
      status: "active",
      actions: ["Counter-messaging deployed", "Authorities notified", "Media briefing scheduled"],
      sources: ["Twitter/X", "Facebook", "Telegram", "Local Forums"]
    },
    {
      id: 2,
      title: "False Emergency Broadcast Claims",
      description: "Fake emergency alert messages circulating claiming additional evacuation zones",
      severity: "high",
      location: "North District",
      affectedPopulation: "~150,000",
      timestamp: "15 minutes ago",
      status: "investigating",
      actions: ["Source identification in progress", "Alert clarification issued"],
      sources: ["WhatsApp", "SMS chains", "Local radio mentions"]
    },
    {
      id: 3,
      title: "Misleading Resource Availability Information",
      description: "Incorrect reports about food and water distribution center locations and hours",
      severity: "medium",
      location: "South District",
      affectedPopulation: "~75,000",
      timestamp: "45 minutes ago",
      status: "resolved",
      actions: ["Corrected information published", "Distribution centers updated"],
      sources: ["Community boards", "Local news", "Social media"]
    },
    {
      id: 4,
      title: "Exaggerated Casualty Reports",
      description: "Inflated injury and casualty numbers being shared across news and social platforms",
      severity: "high",
      location: "City-wide",
      affectedPopulation: "~1,200,000",
      timestamp: "1 hour ago",
      status: "monitoring",
      actions: ["Official statement prepared", "Fact-check distributed"],
      sources: ["News outlets", "Social media", "Messaging apps"]
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          text: 'text-red-800',
          badge: 'bg-red-600 text-white'
        };
      case 'high':
        return {
          bg: 'bg-orange-50',
          border: 'border-orange-200',
          text: 'text-orange-800',
          badge: 'bg-orange-600 text-white'
        };
      case 'medium':
        return {
          bg: 'bg-yellow-50',
          border: 'border-yellow-200',
          text: 'text-yellow-800',
          badge: 'bg-yellow-600 text-white'
        };
      case 'low':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          text: 'text-green-800',
          badge: 'bg-green-600 text-white'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          text: 'text-gray-800',
          badge: 'bg-gray-600 text-white'
        };
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-red-100 text-red-800 border-red-200';
      case 'investigating': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'monitoring': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'resolved': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredAlerts = selectedSeverity === 'all' 
    ? alerts 
    : alerts.filter(alert => alert.severity === selectedSeverity);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Crisis Alert System</h2>
          <p className="text-gray-600 mt-2">Real-time monitoring and response to misinformation threats</p>
        </div>
        <div className="flex items-center space-x-2">
          <Bell className="h-5 w-5 text-blue-600" />
          <span className="text-blue-600 font-medium">{alerts.filter(a => a.status === 'active').length} Active Alerts</span>
        </div>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {['critical', 'high', 'medium', 'low'].map((severity) => {
          const count = alerts.filter(alert => alert.severity === severity).length;
          const colors = getSeverityColor(severity);
          
          return (
            <div
              key={severity}
              className={`${colors.bg} ${colors.border} border rounded-xl p-6 cursor-pointer hover:shadow-md transition-all duration-300 ${selectedSeverity === severity ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => setSelectedSeverity(selectedSeverity === severity ? 'all' : severity)}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`${colors.badge} px-3 py-1 rounded-lg text-sm font-bold uppercase tracking-wide`}>
                  {severity}
                </span>
                <span className="text-2xl font-bold text-gray-900">{count}</span>
              </div>
              <p className="text-sm text-gray-600">
                {severity === 'critical' && 'Immediate action required'}
                {severity === 'high' && 'High priority response'}
                {severity === 'medium' && 'Standard monitoring'}
                {severity === 'low' && 'Routine oversight'}
              </p>
            </div>
          );
        })}
      </div>

      {/* Alerts List */}
      <div className="space-y-6">
        {filteredAlerts.map((alert) => {
          const colors = getSeverityColor(alert.severity);
          
          return (
            <div
              key={alert.id}
              className={`${colors.bg} ${colors.border} border rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className={`h-6 w-6 ${colors.text} mt-1`} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{alert.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{alert.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-3 py-1 rounded-lg border font-medium text-sm ${getStatusColor(alert.status)}`}>
                    {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                  </span>
                  <span className={`${colors.badge} px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide`}>
                    {alert.severity}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-medium text-gray-900">{alert.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600">Affected Population</p>
                    <p className="font-medium text-gray-900">{alert.affectedPopulation}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600">Detected</p>
                    <p className="font-medium text-gray-900">{alert.timestamp}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Actions Taken</h4>
                  <ul className="space-y-1">
                    {alert.actions.map((action, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Detection Sources</h4>
                  <div className="flex flex-wrap gap-2">
                    {alert.sources.map((source, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white text-gray-700 text-xs rounded-md border"
                      >
                        {source}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-end">
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                  <span>View Full Report</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
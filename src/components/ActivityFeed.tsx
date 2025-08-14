import React from 'react';
import { Activity, CheckCircle, AlertTriangle, Clock, Users } from 'lucide-react';

export const ActivityFeed: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'verification',
      icon: CheckCircle,
      title: 'Claim successfully fact-checked',
      description: 'Emergency shelter capacity verified with official sources',
      timestamp: '3 minutes ago',
      color: 'green'
    },
    {
      id: 2,
      type: 'alert',
      icon: AlertTriangle,
      title: 'New misinformation trend detected',
      description: 'Spike in false evacuation information on social platforms',
      timestamp: '8 minutes ago',
      color: 'red'
    },
    {
      id: 3,
      type: 'analysis',
      icon: Activity,
      title: 'Pattern analysis completed',
      description: 'Cross-platform narrative consistency check finished',
      timestamp: '12 minutes ago',
      color: 'blue'
    },
    {
      id: 4,
      type: 'update',
      icon: Clock,
      title: 'Real-time monitoring expanded',
      description: 'Added 3 new regional news sources to monitoring pool',
      timestamp: '18 minutes ago',
      color: 'yellow'
    },
    {
      id: 5,
      type: 'engagement',
      icon: Users,
      title: 'Public explanation generated',
      description: 'Multi-audience clarification published for water safety topic',
      timestamp: '25 minutes ago',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          icon: 'bg-green-100 text-green-600',
          border: 'border-green-200'
        };
      case 'red':
        return {
          icon: 'bg-red-100 text-red-600',
          border: 'border-red-200'
        };
      case 'blue':
        return {
          icon: 'bg-blue-100 text-blue-600',
          border: 'border-blue-200'
        };
      case 'yellow':
        return {
          icon: 'bg-yellow-100 text-yellow-600',
          border: 'border-yellow-200'
        };
      case 'purple':
        return {
          icon: 'bg-purple-100 text-purple-600',
          border: 'border-purple-200'
        };
      default:
        return {
          icon: 'bg-gray-100 text-gray-600',
          border: 'border-gray-200'
        };
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">System Activity</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Live updates</span>
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          const colors = getColorClasses(activity.color);
          
          return (
            <div
              key={activity.id}
              className={`flex items-start space-x-4 p-4 border ${colors.border} rounded-lg hover:shadow-sm transition-all duration-200`}
            >
              <div className={`${colors.icon} p-2 rounded-lg flex-shrink-0`}>
                <Icon className="h-4 w-4" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-gray-900 font-medium mb-1">
                  {activity.title}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  {activity.description}
                </p>
                <p className="text-gray-500 text-xs">
                  {activity.timestamp}
                </p>
              </div>

              {index === 0 && (
                <div className="h-2 w-2 bg-green-500 rounded-full flex-shrink-0 animate-pulse"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
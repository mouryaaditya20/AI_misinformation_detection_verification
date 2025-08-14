import React from 'react';
import { AlertTriangle, Shield, TrendingUp, Clock, Zap } from 'lucide-react';

export const MetricsGrid: React.FC = () => {
  const metrics = [
    {
      title: 'Active Threats',
      value: '23',
      change: '+5 since last hour',
      icon: AlertTriangle,
      color: 'red',
      trend: 'up',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      title: 'Claims Verified',
      value: '1,247',
      change: '+89 today',
      icon: Shield,
      color: 'green',
      trend: 'up',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Trending Topics',
      value: '8',
      change: '2 new crisis-related',
      icon: TrendingUp,
      color: 'blue',
      trend: 'stable',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Response Time',
      value: '2.3m',
      change: 'Average detection time',
      icon: Clock,
      color: 'yellow',
      trend: 'down',
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          icon: 'bg-red-100 text-red-600',
          text: 'text-red-600'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          icon: 'bg-green-100 text-green-600',
          text: 'text-green-600'
        };
      case 'blue':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          icon: 'bg-blue-100 text-blue-600',
          text: 'text-blue-600'
        };
      case 'yellow':
        return {
          bg: 'bg-yellow-50',
          border: 'border-yellow-200',
          icon: 'bg-yellow-100 text-yellow-600',
          text: 'text-yellow-600'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          icon: 'bg-gray-100 text-gray-600',
          text: 'text-gray-600'
        };
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-stagger">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const colors = getColorClasses(metric.color);
        
        return (
          <div
            key={index}
            className={`group relative ${colors.bg} ${colors.border} border rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Animated Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            
            {/* Floating Particles Effect */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Zap className="h-4 w-4 text-yellow-400 animate-pulse" />
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className={`${colors.icon} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <Icon className="h-6 w-6 group-hover:animate-pulse" />
              </div>
              <div className={`text-xs px-3 py-1 rounded-full ${colors.bg} ${colors.text} font-bold border-2 border-white/50 shadow-sm`}>
                {metric.trend === 'up' && '↗'}
                {metric.trend === 'down' && '↘'}
                {metric.trend === 'stable' && '→'}
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="text-3xl font-black text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-gray-700 mb-3">
                {metric.title}
              </div>
              <div className={`text-xs ${colors.text} font-bold bg-white/50 px-2 py-1 rounded-lg`}>
                {metric.change}
              </div>
            </div>
            
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>
          </div>
        );
      })}
    </div>
  );
};
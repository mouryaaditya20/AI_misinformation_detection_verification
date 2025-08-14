import React from 'react';
import { AlertTriangle, Shield, Zap, Eye } from 'lucide-react';

export const ThreatLevel: React.FC = () => {
  const currentThreat = 'MODERATE';
  
  const getThreatColor = (level: string) => {
    switch (level) {
      case 'LOW': return { bg: 'bg-green-500', gradient: 'from-green-400 to-green-600', glow: 'shadow-green-500/50' };
      case 'MODERATE': return { bg: 'bg-yellow-500', gradient: 'from-yellow-400 to-orange-500', glow: 'shadow-yellow-500/50' };
      case 'HIGH': return { bg: 'bg-orange-500', gradient: 'from-orange-400 to-red-500', glow: 'shadow-orange-500/50' };
      case 'CRITICAL': return { bg: 'bg-red-500', gradient: 'from-red-400 to-red-600', glow: 'shadow-red-500/50' };
      default: return { bg: 'bg-gray-500', gradient: 'from-gray-400 to-gray-600', glow: 'shadow-gray-500/50' };
    }
  };

  const threatColors = getThreatColor(currentThreat);

  return (
    <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500 rounded-full translate-x-12 translate-y-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className={`relative bg-gradient-to-br ${threatColors.gradient} p-4 rounded-2xl shadow-2xl ${threatColors.glow} group-hover:scale-110 transition-transform duration-300`}>
            <AlertTriangle className="h-8 w-8 text-white animate-pulse" />
            <div className="absolute -top-1 -right-1">
              <Zap className="h-4 w-4 text-yellow-300 animate-bounce" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Current Threat Level</h3>
            <p className="text-gray-600 font-medium flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>Global misinformation risk assessment</span>
            </p>
          </div>
        </div>
        
        <div className="text-right">
          <div className={`relative inline-flex items-center px-6 py-3 rounded-2xl font-black text-white text-xl bg-gradient-to-r ${threatColors.gradient} shadow-2xl ${threatColors.glow} animate-pulse`}>
            {currentThreat}
            <div className="absolute inset-0 rounded-2xl bg-white/20 animate-ping"></div>
          </div>
          <p className="text-sm text-gray-500 mt-3 font-semibold">
            Updated <span className="text-blue-600">5 minutes ago</span>
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        {['LOW', 'MODERATE', 'HIGH', 'CRITICAL'].map((level, index) => (
          <div
            key={level}
            className={`group/level p-4 rounded-xl border-2 transition-all duration-500 cursor-pointer hover:scale-105 ${
              level === currentThreat
                ? `border-current bg-gradient-to-br ${getThreatColor(level).gradient} text-white shadow-xl ${getThreatColor(level).glow}`
                : 'border-gray-200 text-gray-600 hover:border-gray-400 hover:shadow-lg bg-gradient-to-br from-gray-50 to-gray-100'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-center relative">
              <div className="text-sm font-bold mb-2 group-hover/level:animate-pulse">{level}</div>
              <div className="text-xs opacity-80 font-medium">
                {level === 'LOW' && 'Minimal activity'}
                {level === 'MODERATE' && '3 active crises'}
                {level === 'HIGH' && 'Elevated risk'}
                {level === 'CRITICAL' && 'Immediate action'}
              </div>
              {level === currentThreat && (
                <div className="absolute -top-2 -right-2">
                  <div className="h-3 w-3 bg-white rounded-full animate-ping"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
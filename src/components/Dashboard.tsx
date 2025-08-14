import React from 'react';
import { Sparkles } from 'lucide-react';
import { MetricsGrid } from './MetricsGrid';
import { RecentDetections } from './RecentDetections';
import { ThreatLevel } from './ThreatLevel';
import { ActivityFeed } from './ActivityFeed';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Enhanced Header with Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Crisis Monitoring Dashboard
              </h2>
            </div>
            <p className="text-blue-100 text-lg font-medium">
              AI-powered misinformation detection and real-time crisis response
            </p>
          </div>
          
          <div className="flex flex-col items-end space-y-3">
            <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <span className="text-white font-medium">Real-time monitoring active</span>
            </div>
            <div className="text-white/80 text-sm">
              Last updated: <span className="font-semibold">2 seconds ago</span>
            </div>
          </div>
        </div>
      </div>

      <ThreatLevel />
      
      <MetricsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-slide-up">
        <RecentDetections />
        <ActivityFeed />
      </div>
    </div>
  );
};
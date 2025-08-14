import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { StreamMonitor } from './components/StreamMonitor';
import { FactChecker } from './components/FactChecker';
import { AlertSystem } from './components/AlertSystem';
import { TrendAnalysis } from './components/TrendAnalysis';
import { VerificationProvider } from './context/VerificationContext';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <VerificationProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="container mx-auto px-6 py-8">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'streams' && <StreamMonitor />}
          {activeTab === 'fact-check' && <FactChecker />}
          {activeTab === 'alerts' && <AlertSystem />}
          {activeTab === 'trends' && <TrendAnalysis />}
        </main>
      </div>
    </VerificationProvider>
  );
}

export default App;
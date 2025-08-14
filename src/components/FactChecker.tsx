import React, { useState } from 'react';
import { Search, Check, X, Clock, ExternalLink } from 'lucide-react';

export const FactChecker: React.FC = () => {
  const [claim, setClaim] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const recentChecks = [
    {
      id: 1,
      claim: "Emergency shelters are at full capacity",
      status: 'verified',
      confidence: 0.92,
      sources: 3,
      explanation: {
        general: "Recent reports confirm that most emergency shelters in the affected area are currently at or near capacity. Local authorities are working to open additional facilities.",
        expert: "Shelter capacity data from the Emergency Management Office shows 87% occupancy across primary facilities, with overflow protocols activated at 3 locations.",
        policy: "Current shelter capacity requires immediate expansion. Recommend activating secondary facilities and coordinating with neighboring jurisdictions."
      },
      timestamp: "5 minutes ago"
    },
    {
      id: 2,
      claim: "Water treatment plant completely shut down",
      status: 'false',
      confidence: 0.95,
      sources: 5,
      explanation: {
        general: "The water treatment facility experienced a temporary reduction in output but is not completely shut down. Normal operations are expected to resume within 24 hours.",
        expert: "Plant operational data indicates 40% capacity reduction due to precautionary maintenance, not total shutdown. Backup systems are functioning normally.",
        policy: "While operations are reduced, the complete shutdown claim is false. Continue monitoring and ensure public communication emphasizes ongoing safety measures."
      },
      timestamp: "12 minutes ago"
    },
    {
      id: 3,
      claim: "Evacuation routes blocked by fallen trees",
      status: 'investigating',
      confidence: 0.67,
      sources: 2,
      explanation: {
        general: "We're currently verifying reports about blocked evacuation routes. Some road closures have been confirmed, but alternative routes remain available.",
        expert: "Initial reports suggest partial blockages on secondary evacuation routes. Primary routes appear clear based on traffic monitoring systems.",
        policy: "Investigating claims require immediate field verification. Recommend dispatching assessment teams to confirm route status."
      },
      timestamp: "18 minutes ago"
    }
  ];

  const handleFactCheck = async () => {
    if (!claim.trim()) return;
    
    setIsChecking(true);
    // Simulate fact-checking process
    setTimeout(() => {
      setIsChecking(false);
      setClaim('');
    }, 3000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified': return <Check className="h-4 w-4 text-green-600" />;
      case 'false': return <X className="h-4 w-4 text-red-600" />;
      case 'investigating': return <Clock className="h-4 w-4 text-yellow-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'bg-green-100 text-green-800 border-green-200';
      case 'false': return 'bg-red-100 text-red-800 border-red-200';
      case 'investigating': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Fact Checking System</h2>
        <p className="text-gray-600">Verify claims using cross-referenced sources and generate explanations for different audiences</p>
      </div>

      {/* Fact Check Input */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Submit Claim for Verification</h3>
        
        <div className="space-y-4">
          <div>
            <textarea
              placeholder="Enter the claim you want to fact-check..."
              value={claim}
              onChange={(e) => setClaim(e.target.value)}
              className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              {claim.length}/500 characters
            </div>
            <button
              onClick={handleFactCheck}
              disabled={!claim.trim() || isChecking}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center space-x-2 transition-colors duration-200"
            >
              {isChecking ? (
                <>
                  <Clock className="h-4 w-4 animate-spin" />
                  <span>Checking...</span>
                </>
              ) : (
                <>
                  <Search className="h-4 w-4" />
                  <span>Fact Check</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Recent Fact Checks */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Recent Fact Checks</h3>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1">
            <span>View All</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-6">
          {recentChecks.map((check) => (
            <div key={check.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    {getStatusIcon(check.status)}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 mb-2">{check.claim}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className={`px-2 py-1 rounded-full border font-medium ${getStatusColor(check.status)}`}>
                        {check.status.charAt(0).toUpperCase() + check.status.slice(1)}
                      </span>
                      <span>{Math.round(check.confidence * 100)}% confidence</span>
                      <span>{check.sources} sources</span>
                      <span>{check.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-900 mb-2">General Public</h4>
                    <p className="text-sm text-blue-800">{check.explanation.general}</p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-medium text-green-900 mb-2">Expert Analysis</h4>
                    <p className="text-sm text-green-800">{check.explanation.expert}</p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-medium text-purple-900 mb-2">Policy Makers</h4>
                    <p className="text-sm text-purple-800">{check.explanation.policy}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VerificationState {
  alerts: any[];
  detections: any[];
  streams: any[];
  isMonitoring: boolean;
}

interface VerificationContextType {
  state: VerificationState;
  addAlert: (alert: any) => void;
  addDetection: (detection: any) => void;
  toggleMonitoring: () => void;
}

const VerificationContext = createContext<VerificationContextType | undefined>(undefined);

export const useVerification = () => {
  const context = useContext(VerificationContext);
  if (!context) {
    throw new Error('useVerification must be used within a VerificationProvider');
  }
  return context;
};

interface VerificationProviderProps {
  children: ReactNode;
}

export const VerificationProvider: React.FC<VerificationProviderProps> = ({ children }) => {
  const [state, setState] = useState<VerificationState>({
    alerts: [],
    detections: [],
    streams: [],
    isMonitoring: true
  });

  const addAlert = (alert: any) => {
    setState(prev => ({
      ...prev,
      alerts: [alert, ...prev.alerts]
    }));
  };

  const addDetection = (detection: any) => {
    setState(prev => ({
      ...prev,
      detections: [detection, ...prev.detections]
    }));
  };

  const toggleMonitoring = () => {
    setState(prev => ({
      ...prev,
      isMonitoring: !prev.isMonitoring
    }));
  };

  return (
    <VerificationContext.Provider
      value={{
        state,
        addAlert,
        addDetection,
        toggleMonitoring
      }}
    >
      {children}
    </VerificationContext.Provider>
  );
};
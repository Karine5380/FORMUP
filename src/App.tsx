import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Calendar } from './components/Calendar';
import { Sessions } from './components/Sessions';
import { Documents } from './components/Documents';
import { VideoConference } from './components/VideoConference';
import { ELearning } from './components/ELearning';
import { CRM } from './components/CRM';
import { Automation } from './components/Automation';
import { Billing } from './components/Billing';
import { Settings } from './components/Settings';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Login } from './components/Login';

function InnerApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { token } = useAuth();

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'calendar':
        return <Calendar />;
      case 'sessions':
        return <Sessions />;
      case 'documents':
        return <Documents />;
      case 'videoconference':
        return <VideoConference />;
      case 'elearning':
        return <ELearning />;
      case 'crm':
        return <CRM />;
      case 'automation':
        return <Automation />;
      case 'billing':
        return <Billing />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  if (!token) {
    return <Login />;
  }

  return (
    <UserProvider>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-hidden">
          {renderContent()}
        </main>
      </div>
    </UserProvider>
  );
}
export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <InnerApp />
      </AuthProvider>
    </ThemeProvider>
  );
}

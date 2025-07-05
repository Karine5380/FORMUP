import React from 'react';
import { 
  Home, 
  Calendar, 
  Users, 
  FileText, 
  Video, 
  BookOpen, 
  UserCheck, 
  Zap, 
  CreditCard, 
  Settings, 
  Moon, 
  Sun,
  Bell,
  Search
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { user, permissions } = useUser();
  const { t } = useTranslation();

  const menuItems = [
    { id: 'dashboard', key: 'sidebar.dashboard', icon: Home, permission: 'all' },
    { id: 'calendar', key: 'sidebar.calendar', icon: Calendar, permission: 'calendar' },
    { id: 'sessions', key: 'sidebar.sessions', icon: Users, permission: 'sessions' },
    { id: 'documents', key: 'sidebar.documents', icon: FileText, permission: 'documents' },
    { id: 'videoconference', key: 'sidebar.videoconference', icon: Video, permission: 'videoconference' },
    { id: 'elearning', key: 'sidebar.elearning', icon: BookOpen, permission: 'elearning' },
    { id: 'crm', key: 'sidebar.crm', icon: UserCheck, permission: 'crm' },
    { id: 'automation', key: 'sidebar.automation', icon: Zap, permission: 'automation' },
    { id: 'billing', key: 'sidebar.billing', icon: CreditCard, permission: 'billing' },
    { id: 'settings', key: 'sidebar.settings', icon: Settings, permission: 'settings' },
  ];

  const hasPermission = (permission: string) => {
    return permissions.includes('all') || permissions.includes(permission);
  };

  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-colors duration-300">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">FormUp</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Formation Pro</p>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <img 
            src={user.avatar} 
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
              {user.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
              {user.role}
            </p>
          </div>
          <Bell className="w-5 h-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          if (!hasPermission(item.permission)) return null;
          
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                isActive
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`} />
              <span className="font-medium">{t(item.key)}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={toggleDarkMode}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-gray-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-400" />
          )}
          <span className="font-medium">
            {darkMode ? 'Mode clair' : 'Mode sombre'}
          </span>
        </button>
      </div>
    </div>
  );
};
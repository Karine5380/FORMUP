import React from 'react';
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  Clock, 
  AlertCircle, 
  CheckCircle,
  Video,
  FileText,
  Euro,
  BookOpen
} from 'lucide-react';
import { useUser } from '../contexts/UserContext';

export const Dashboard: React.FC = () => {
  const { user } = useUser();

  const stats = [
    {
      title: 'Sessions actives',
      value: '24',
      change: '+12%',
      icon: Users,
      color: 'bg-blue-500',
      trend: 'up'
    },
    {
      title: 'Formations planifiées',
      value: '18',
      change: '+5%',
      icon: Calendar,
      color: 'bg-green-500',
      trend: 'up'
    },
    {
      title: 'Chiffre d\'affaires',
      value: '€47,250',
      change: '+23%',
      icon: Euro,
      color: 'bg-purple-500',
      trend: 'up'
    },
    {
      title: 'Taux de satisfaction',
      value: '94%',
      change: '+2%',
      icon: TrendingUp,
      color: 'bg-orange-500',
      trend: 'up'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'session',
      title: 'Session "Leadership Digital" complétée',
      time: '14:30',
      participants: 12,
      status: 'completed'
    },
    {
      id: 2,
      type: 'document',
      title: 'Attestation générée pour Jean Martin',
      time: '13:15',
      status: 'generated'
    },
    {
      id: 3,
      type: 'payment',
      title: 'Paiement reçu - Formation Excel',
      time: '11:45',
      amount: '€850',
      status: 'received'
    },
    {
      id: 4,
      type: 'video',
      title: 'Visioconférence planifiée',
      time: '10:30',
      participants: 8,
      status: 'scheduled'
    }
  ];

  const upcomingSessions = [
    {
      id: 1,
      title: 'Formation React Avancé',
      date: '2024-01-15',
      time: '09:00',
      participants: 15,
      type: 'présentiel',
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'Management d\'équipe',
      date: '2024-01-16',
      time: '14:00',
      participants: 8,
      type: 'visio',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Sécurité Informatique',
      date: '2024-01-17',
      time: '10:00',
      participants: 20,
      type: 'hybride',
      status: 'confirmed'
    }
  ];

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Tableau de bord
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Bienvenue {user.name}, voici un aperçu de vos formations
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500 font-medium">{stat.change}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">ce mois</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Activités récentes
              </h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex-shrink-0">
                      {activity.type === 'session' && <Users className="w-5 h-5 text-blue-500" />}
                      {activity.type === 'document' && <FileText className="w-5 h-5 text-green-500" />}
                      {activity.type === 'payment' && <Euro className="w-5 h-5 text-purple-500" />}
                      {activity.type === 'video' && <Video className="w-5 h-5 text-orange-500" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {activity.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {activity.time}
                        {activity.participants && ` • ${activity.participants} participants`}
                        {activity.amount && ` • ${activity.amount}`}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      {activity.status === 'completed' && <CheckCircle className="w-4 h-4 text-green-500" />}
                      {activity.status === 'generated' && <CheckCircle className="w-4 h-4 text-green-500" />}
                      {activity.status === 'received' && <CheckCircle className="w-4 h-4 text-green-500" />}
                      {activity.status === 'scheduled' && <Clock className="w-4 h-4 text-blue-500" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Sessions à venir
              </h2>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        {session.title}
                      </h3>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        session.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' 
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                      }`}>
                        {session.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      {session.date} à {session.time}
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">
                        {session.participants} participants
                      </span>
                      <span className={`px-2 py-1 rounded-full font-medium ${
                        session.type === 'présentiel' 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100'
                          : session.type === 'visio'
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100'
                          : 'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100'
                      }`}>
                        {session.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Voir toutes les sessions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
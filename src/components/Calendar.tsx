import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Filter, Eye, Calendar as CalendarIcon, Clock, Users } from 'lucide-react';

export const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const sessions = [
    {
      id: 1,
      title: 'Formation React Avancé',
      date: '2024-01-15',
      time: '09:00-12:00',
      participants: 15,
      type: 'présentiel',
      formateur: 'Marie Dubois',
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'Management d\'équipe',
      date: '2024-01-16',
      time: '14:00-17:00',
      participants: 8,
      type: 'visio',
      formateur: 'Jean Martin',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Sécurité Informatique',
      date: '2024-01-17',
      time: '10:00-16:00',
      participants: 20,
      type: 'hybride',
      formateur: 'Sophie Laurent',
      status: 'confirmed'
    }
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  const getSessionsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return sessions.filter(session => session.date === dateStr);
  };

  const days = getDaysInMonth(currentDate);
  const weekDays = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Calendrier
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Planifiez et gérez vos sessions de formation
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setView('month')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  view === 'month' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                Mois
              </button>
              <button
                onClick={() => setView('week')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  view === 'week' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                Semaine
              </button>
              <button
                onClick={() => setView('day')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  view === 'day' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                Jour
              </button>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filtrer</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Nouvelle session</span>
            </button>
          </div>
        </div>

        {/* Calendar Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-6">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {formatDate(currentDate)}
            </h2>
            <button
              onClick={() => navigateMonth('next')}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="p-6">
            <div className="grid grid-cols-7 gap-1 mb-4">
              {weekDays.map(day => (
                <div key={day} className="p-2 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {days.map((day, index) => (
                <div key={index} className="aspect-square p-1">
                  {day && (
                    <div className="w-full h-full border border-gray-200 dark:border-gray-600 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                        {day}
                      </div>
                      <div className="space-y-1">
                        {getSessionsForDate(day).map(session => (
                          <div
                            key={session.id}
                            className={`text-xs p-1 rounded text-white truncate ${
                              session.type === 'présentiel' 
                                ? 'bg-blue-500'
                                : session.type === 'visio'
                                ? 'bg-purple-500'
                                : 'bg-orange-500'
                            }`}
                          >
                            {session.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Sessions à venir
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {sessions.map(session => (
                <div key={session.id} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className={`w-3 h-3 rounded-full ${
                      session.type === 'présentiel' 
                        ? 'bg-blue-500'
                        : session.type === 'visio'
                        ? 'bg-purple-500'
                        : 'bg-orange-500'
                    }`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {session.title}
                    </h4>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <div className="flex items-center">
                        <CalendarIcon className="w-3 h-3 mr-1" />
                        {session.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {session.time}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {session.participants}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      session.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                    }`}>
                      {session.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                    </span>
                    <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
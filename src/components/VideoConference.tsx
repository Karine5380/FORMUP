import React, { useState } from 'react';
import { 
  Video, 
  Plus, 
  Calendar, 
  Clock, 
  Users, 
  Link, 
  Settings, 
  Play, 
  Pause, 
  PhoneOff,
  Mic,
  MicOff,
  VideoOff,
  Monitor,
  MessageSquare,
  MoreHorizontal
} from 'lucide-react';

export const VideoConference: React.FC = () => {
  const [activeRoom, setActiveRoom] = useState<string | null>(null);
  const [isInMeeting, setIsInMeeting] = useState(false);

  const upcomingMeetings = [
    {
      id: 1,
      title: 'Formation React Avancé',
      date: '2024-01-15',
      time: '09:00',
      duration: '3h',
      participants: 15,
      expectedParticipants: 20,
      meetingLink: 'https://meet.formup.com/react-advanced-123',
      status: 'scheduled',
      platform: 'FormUp Meet'
    },
    {
      id: 2,
      title: 'Management d\'équipe',
      date: '2024-01-16',
      time: '14:00',
      duration: '3h',
      participants: 8,
      expectedParticipants: 12,
      meetingLink: 'https://zoom.us/j/123456789',
      status: 'live',
      platform: 'Zoom'
    },
    {
      id: 3,
      title: 'Sécurité Informatique',
      date: '2024-01-17',
      time: '10:00',
      duration: '6h',
      participants: 0,
      expectedParticipants: 25,
      meetingLink: 'https://meet.formup.com/security-101-456',
      status: 'scheduled',
      platform: 'FormUp Meet'
    }
  ];

  const activeMeetings = upcomingMeetings.filter(meeting => meeting.status === 'live');

  const joinMeeting = (meetingId: number) => {
    setActiveRoom(meetingId.toString());
    setIsInMeeting(true);
  };

  const leaveMeeting = () => {
    setIsInMeeting(false);
    setActiveRoom(null);
  };

  const copyMeetingLink = (link: string) => {
    navigator.clipboard.writeText(link);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'live':
        return 'En direct';
      case 'scheduled':
        return 'Planifié';
      default:
        return 'Inconnu';
    }
  };

  if (isInMeeting) {
    return (
      <div className="h-screen bg-gray-900 flex flex-col">
        {/* Meeting Header */}
        <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-white font-semibold">Formation React Avancé</h2>
            <div className="flex items-center space-x-2 text-gray-300">
              <Users className="w-4 h-4" />
              <span>15 participants</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Clock className="w-4 h-4 text-gray-300" />
            <span className="text-gray-300">1h 23m</span>
          </div>
        </div>

        {/* Video Area */}
        <div className="flex-1 flex">
          {/* Main Video */}
          <div className="flex-1 bg-gray-800 flex items-center justify-center">
            <div className="bg-gray-700 rounded-lg p-8 text-center">
              <div className="w-32 h-32 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MD</span>
              </div>
              <p className="text-white font-semibold">Marie Dubois</p>
              <p className="text-gray-300 text-sm">Formateur principal</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
            {/* Participants */}
            <div className="p-4 border-b border-gray-700">
              <h3 className="text-white font-semibold mb-3">Participants (15)</h3>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {[
                  { name: 'Marie Dubois', role: 'Formateur', avatar: 'MD' },
                  { name: 'Jean Martin', role: 'Participant', avatar: 'JM' },
                  { name: 'Sophie Laurent', role: 'Participant', avatar: 'SL' },
                  { name: 'Pierre Durand', role: 'Participant', avatar: 'PD' },
                  { name: 'Anna Moreau', role: 'Participant', avatar: 'AM' }
                ].map((participant, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">{participant.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{participant.name}</p>
                      <p className="text-gray-400 text-xs">{participant.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat */}
            <div className="flex-1 flex flex-col">
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-white font-semibold">Chat</h3>
              </div>
              <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                <div className="bg-gray-700 rounded-lg p-3">
                  <p className="text-blue-400 text-sm font-medium">Marie Dubois</p>
                  <p className="text-white text-sm">Bienvenue à tous dans cette formation React !</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <p className="text-green-400 text-sm font-medium">Jean Martin</p>
                  <p className="text-white text-sm">Merci ! J'ai hâte de commencer</p>
                </div>
              </div>
              <div className="p-4 border-t border-gray-700">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Tapez votre message..."
                    className="flex-1 bg-gray-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-gray-800 px-6 py-4 flex items-center justify-center space-x-4">
          <button className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
            <Mic className="w-5 h-5 text-white" />
          </button>
          <button className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
            <Video className="w-5 h-5 text-white" />
          </button>
          <button className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
            <Monitor className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={leaveMeeting}
            className="p-3 bg-red-600 hover:bg-red-700 rounded-full transition-colors"
          >
            <PhoneOff className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Visioformation
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Gérez vos sessions de formation à distance
            </p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Nouvelle session</span>
          </button>
        </div>

        {/* Active Meetings */}
        {activeMeetings.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Sessions en cours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeMeetings.map(meeting => (
                <div key={meeting.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-red-200 dark:border-red-800">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-red-600 dark:text-red-400">EN DIRECT</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{meeting.platform}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {meeting.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {meeting.date} • {meeting.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      {meeting.participants}/{meeting.expectedParticipants} participants
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      Durée: {meeting.duration}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => joinMeeting(meeting.id)}
                      className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>Rejoindre</span>
                    </button>
                    <button
                      onClick={() => copyMeetingLink(meeting.meetingLink)}
                      className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Link className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Meetings */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Sessions planifiées
            </h2>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {upcomingMeetings.map(meeting => (
              <div key={meeting.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {meeting.title}
                      </h3>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(meeting.status)}`}>
                        {getStatusLabel(meeting.status)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {meeting.date} • {meeting.time}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {meeting.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {meeting.participants}/{meeting.expectedParticipants}
                      </div>
                      <div className="flex items-center">
                        <Video className="w-4 h-4 mr-1" />
                        {meeting.platform}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => copyMeetingLink(meeting.meetingLink)}
                      className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Link className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                      <Settings className="w-4 h-4" />
                    </button>
                    {meeting.status === 'live' ? (
                      <button 
                        onClick={() => joinMeeting(meeting.id)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                      >
                        <Play className="w-4 h-4" />
                        <span>Rejoindre</span>
                      </button>
                    ) : (
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Planifier</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Settings */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Configuration des plateformes
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <Video className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">FormUp Meet</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Solution intégrée</p>
                </div>
              </div>
              <span className="text-sm text-green-600 dark:text-green-400 font-medium">Actif</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <Video className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Zoom</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Intégration API</p>
                </div>
              </div>
              <button className="text-sm text-blue-600 dark:text-blue-400 font-medium">Configurer</button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <Video className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Microsoft Teams</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Intégration API</p>
                </div>
              </div>
              <button className="text-sm text-blue-600 dark:text-blue-400 font-medium">Configurer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { 
  BookOpen, 
  Play, 
  Pause, 
  CheckCircle, 
  Clock, 
  Users, 
  FileText, 
  Video, 
  Download, 
  Plus, 
  Search, 
  Filter,
  Star,
  Trophy,
  Target,
  BarChart3,
  PieChart,
  TrendingUp,
  Eye,
  Edit3,
  Trash2,
  Lock,
  Unlock,
  Award,
  Calendar,
  PlayCircle
} from 'lucide-react';

export const ELearning: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'progress' | 'library'>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'React Avancé - Hooks et Performance',
      description: 'Maîtrisez les concepts avancés de React pour créer des applications performantes',
      instructor: 'Marie Dubois',
      duration: '8h 30m',
      modules: 12,
      enrolled: 145,
      rating: 4.8,
      price: 299,
      level: 'Avancé',
      category: 'Développement Web',
      status: 'published',
      progress: 0,
      thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500',
      lastUpdated: '2024-01-10',
      completion: 89
    },
    {
      id: 2,
      title: 'Management d\'équipe 2024',
      description: 'Techniques modernes de leadership et gestion d\'équipe à distance',
      instructor: 'Jean Martin',
      duration: '6h 15m',
      modules: 8,
      enrolled: 89,
      rating: 4.6,
      price: 199,
      level: 'Intermédiaire',
      category: 'Management',
      status: 'published',
      progress: 45,
      thumbnail: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=500',
      lastUpdated: '2024-01-08',
      completion: 72
    },
    {
      id: 3,
      title: 'Cybersécurité Fondamentaux',
      description: 'Bases essentielles de la sécurité informatique et protection des données',
      instructor: 'Sophie Laurent',
      duration: '12h 45m',
      modules: 15,
      enrolled: 234,
      rating: 4.9,
      price: 399,
      level: 'Débutant',
      category: 'Sécurité',
      status: 'published',
      progress: 0,
      thumbnail: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=500',
      lastUpdated: '2024-01-12',
      completion: 95
    },
    {
      id: 4,
      title: 'Design Thinking Créatif',
      description: 'Méthodologie d\'innovation centrée utilisateur avec exercices pratiques',
      instructor: 'Thomas Petit',
      duration: '10h 20m',
      modules: 10,
      enrolled: 67,
      rating: 4.7,
      price: 249,
      level: 'Intermédiaire',
      category: 'Innovation',
      status: 'draft',
      progress: 0,
      thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=500',
      lastUpdated: '2024-01-14',
      completion: 34
    }
  ];

  const stats = [
    {
      title: 'Cours actifs',
      value: '24',
      change: '+3 ce mois',
      icon: BookOpen,
      color: 'bg-blue-500'
    },
    {
      title: 'Apprenants inscrits',
      value: '1,247',
      change: '+156 ce mois',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Taux de completion',
      value: '87%',
      change: '+5% ce mois',
      icon: Trophy,
      color: 'bg-purple-500'
    },
    {
      title: 'Note moyenne',
      value: '4.7/5',
      change: '+0.2 ce mois',
      icon: Star,
      color: 'bg-orange-500'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'completion',
      message: 'Jean Dupont a terminé "React Avancé"',
      time: '2h',
      avatar: 'JD'
    },
    {
      id: 2,
      type: 'enrollment',
      message: '12 nouvelles inscriptions à "Cybersécurité"',
      time: '4h',
      avatar: '12'
    },
    {
      id: 3,
      type: 'review',
      message: 'Nouvelle évaluation 5⭐ pour "Management d\'équipe"',
      time: '6h',
      avatar: '⭐'
    },
    {
      id: 4,
      type: 'milestone',
      message: 'Cours "Design Thinking" atteint 50 inscrits',
      time: '8h',
      avatar: '🎯'
    }
  ];

  const learningPaths = [
    {
      id: 1,
      title: 'Parcours Développeur Full-Stack',
      courses: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
      duration: '40h',
      students: 89,
      progress: 65
    },
    {
      id: 2,
      title: 'Certification Management',
      courses: ['Leadership', 'Communication', 'Gestion de projet'],
      duration: '25h',
      students: 34,
      progress: 45
    },
    {
      id: 3,
      title: 'Expert Cybersécurité',
      courses: ['Fondamentaux', 'Analyse des risques', 'Incident Response'],
      duration: '60h',
      students: 156,
      progress: 78
    }
  ];

  const resources = [
    {
      id: 1,
      title: 'Guide React 2024.pdf',
      type: 'PDF',
      size: '2.4 MB',
      downloads: 234,
      category: 'Documentation'
    },
    {
      id: 2,
      title: 'Templates Management.zip',
      type: 'Archive',
      size: '5.1 MB',
      downloads: 89,
      category: 'Templates'
    },
    {
      id: 3,
      title: 'Checklist Sécurité.pdf',
      type: 'PDF',
      size: '1.2 MB',
      downloads: 567,
      category: 'Checklist'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || course.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant':
        return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
      case 'Intermédiaire':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100';
      case 'Avancé':
        return 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
      case 'draft':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100';
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Activité récente
            </h3>
            <div className="space-y-4">
              {recentActivity.map(activity => (
                <div key={activity.id} className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-300">
                      {activity.avatar}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 dark:text-white">
                      {activity.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Il y a {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Actions rapides
            </h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                <Plus className="w-5 h-5" />
                <span>Nouveau cours</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                <PlayCircle className="w-5 h-5" />
                <span>Créer un quiz</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                <FileText className="w-5 h-5" />
                <span>Ajouter ressource</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors">
                <BarChart3 className="w-5 h-5" />
                <span>Voir analytics</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Paths */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Parcours d'apprentissage populaires
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningPaths.map(path => (
            <div key={path.id} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {path.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {path.courses.join(' → ')}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                <span>{path.duration}</span>
                <span>{path.students} étudiants</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${path.progress}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                {path.progress}% complété
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un cours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              <option value="all">Tous les statuts</option>
              <option value="published">Publié</option>
              <option value="draft">Brouillon</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Nouveau cours</span>
            </button>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="relative">
              <img 
                src={course.thumbnail} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                  {course.level}
                </span>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                  {course.status === 'published' ? 'Publié' : 'Brouillon'}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {course.duration}
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {course.category}
                </span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {course.rating}
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {course.title}
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {course.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>{course.instructor}</span>
                <span>{course.modules} modules</span>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {course.enrolled} inscrits
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {course.completion}% complété
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  €{course.price}
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProgress = () => (
    <div className="space-y-6">
      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Progression globale
            </h3>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">73%</div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: '73%' }}></div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">+5% ce mois</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Cours terminés
            </h3>
            <Trophy className="w-5 h-5 text-purple-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">18</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">sur 24 cours actifs</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Temps d'étude
            </h3>
            <Clock className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">127h</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">+12h cette semaine</p>
        </div>
      </div>

      {/* Course Progress */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Progression par cours
        </h3>
        <div className="space-y-4">
          {courses.slice(0, 4).map(course => (
            <div key={course.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {course.title}
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {course.completion}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${course.completion}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{course.instructor}</span>
                <span>{course.modules} modules</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Temps d'étude par semaine
          </h3>
          <div className="h-48 flex items-end justify-between space-x-2">
            {[12, 18, 15, 22, 25, 20, 28].map((hours, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-blue-500 rounded-t" 
                  style={{ height: `${(hours / 30) * 100}%` }}
                ></div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  S{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Répartition par catégorie
          </h3>
          <div className="space-y-4">
            {[
              { category: 'Développement Web', percentage: 35, color: 'bg-blue-500' },
              { category: 'Management', percentage: 25, color: 'bg-green-500' },
              { category: 'Sécurité', percentage: 20, color: 'bg-purple-500' },
              { category: 'Innovation', percentage: 15, color: 'bg-orange-500' },
              { category: 'Autres', percentage: 5, color: 'bg-gray-500' }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color.replace('bg-', '') }}></div>
                <span className="flex-1 text-sm text-gray-600 dark:text-gray-400">
                  {item.category}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderLibrary = () => (
    <div className="space-y-6">
      {/* Library Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm text-center">
          <FileText className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">156</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Documents</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm text-center">
          <Video className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">89</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Vidéos</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm text-center">
          <Download className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">2.1k</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Téléchargements</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm text-center">
          <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">34</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Quiz</div>
        </div>
      </div>

      {/* Resources */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Bibliothèque de ressources
            </h3>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Ajouter</span>
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {resources.map(resource => (
            <div key={resource.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {resource.title}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>{resource.type}</span>
                      <span>{resource.size}</span>
                      <span>{resource.downloads} téléchargements</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {resource.category}
                  </span>
                  <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              E-Learning
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Plateforme d'apprentissage en ligne complète
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              <BarChart3 className="w-4 h-4" />
              <span>Analytics</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Nouveau contenu</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg mb-8">
          {[
            { id: 'overview', label: 'Vue d\'ensemble', icon: PieChart },
            { id: 'courses', label: 'Cours', icon: BookOpen },
            { id: 'progress', label: 'Progression', icon: BarChart3 },
            { id: 'library', label: 'Bibliothèque', icon: FileText }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'courses' && renderCourses()}
        {activeTab === 'progress' && renderProgress()}
        {activeTab === 'library' && renderLibrary()}
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { 
  Zap, 
  Plus, 
  Play, 
  Pause, 
  Settings, 
  Mail, 
  MessageSquare, 
  Calendar, 
  FileText, 
  Users, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Eye,
  Edit3,
  Trash2,
  ArrowRight,
  Filter,
  Search
} from 'lucide-react';

export const Automation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'workflows' | 'templates' | 'analytics'>('workflows');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const workflows = [
    {
      id: 1,
      name: 'Relance formation manquée',
      description: 'Envoie automatiquement un email de relance aux participants absents',
      trigger: 'Session terminée',
      actions: ['Email de relance', 'SMS rappel', 'Créer tâche CRM'],
      status: 'active',
      executions: 127,
      successRate: 89,
      lastRun: '2024-01-15 14:30',
      created: '2024-01-01',
      category: 'Formation'
    },
    {
      id: 2,
      name: 'Génération attestations',
      description: 'Génère et envoie automatiquement les attestations de formation',
      trigger: 'Formation complétée',
      actions: ['Générer attestation PDF', 'Envoyer par email', 'Archiver document'],
      status: 'active',
      executions: 234,
      successRate: 96,
      lastRun: '2024-01-15 16:45',
      created: '2023-12-15',
      category: 'Documentation'
    },
    {
      id: 3,
      name: 'Suivi satisfaction client',
      description: 'Envoie un questionnaire de satisfaction 24h après la formation',
      trigger: 'Formation terminée + 24h',
      actions: ['Créer questionnaire', 'Envoyer email', 'Programmer relance'],
      status: 'active',
      executions: 89,
      successRate: 78,
      lastRun: '2024-01-15 10:15',
      created: '2024-01-05',
      category: 'Satisfaction'
    },
    {
      id: 4,
      name: 'Rappel paiement facture',
      description: 'Relance automatique pour les factures impayées',
      trigger: 'Facture échue + 7 jours',
      actions: ['Email rappel', 'Notification interne', 'Bloquer services'],
      status: 'paused',
      executions: 45,
      successRate: 67,
      lastRun: '2024-01-10 09:00',
      created: '2023-11-20',
      category: 'Facturation'
    }
  ];

  const templates = [
    {
      id: 1,
      name: 'Email convocation formation',
      type: 'email',
      category: 'Formation',
      description: 'Template pour les convocations de formation avec détails pratiques',
      usage: 234,
      lastUpdated: '2024-01-10'
    },
    {
      id: 2,
      name: 'SMS rappel session',
      type: 'sms',
      category: 'Rappel',
      description: 'Message court pour rappeler une session imminente',
      usage: 156,
      lastUpdated: '2024-01-08'
    },
    {
      id: 3,
      name: 'Email attestation',
      type: 'email',
      category: 'Documentation',
      description: 'Email d\'accompagnement pour l\'envoi d\'attestations',
      usage: 189,
      lastUpdated: '2024-01-12'
    }
  ];

  const stats = [
    {
      title: 'Workflows actifs',
      value: '12',
      change: '+2 ce mois',
      icon: Zap,
      color: 'bg-blue-500'
    },
    {
      title: 'Exécutions totales',
      value: '2,847',
      change: '+456 ce mois',
      icon: Play,
      color: 'bg-green-500'
    },
    {
      title: 'Taux de succès',
      value: '94%',
      change: '+3% ce mois',
      icon: TrendingUp,
      color: 'bg-purple-500'
    },
    {
      title: 'Temps économisé',
      value: '127h',
      change: '+23h ce mois',
      icon: Clock,
      color: 'bg-orange-500'
    }
  ];

  const recentExecutions = [
    {
      id: 1,
      workflow: 'Génération attestations',
      trigger: 'Formation "React Avancé" complétée',
      status: 'success',
      time: '14:30',
      duration: '2.3s'
    },
    {
      id: 2,
      workflow: 'Suivi satisfaction client',
      trigger: 'Formation "Management" terminée',
      status: 'success',
      time: '13:15',
      duration: '1.8s'
    },
    {
      id: 3,
      workflow: 'Relance formation manquée',
      trigger: 'Session "Cybersécurité" - absence détectée',
      status: 'error',
      time: '11:45',
      duration: '0.5s'
    }
  ];

  const filteredWorkflows = workflows.filter(workflow => {
    const matchesSearch = workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workflow.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || workflow.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100';
      case 'error':
        return 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'running':
        return <Clock className="w-4 h-4 text-blue-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Formation':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100';
      case 'Documentation':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100';
      case 'Satisfaction':
        return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
      case 'Facturation':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100';
    }
  };

  const renderWorkflows = () => (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un workflow..."
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
              <option value="active">Actif</option>
              <option value="paused">En pause</option>
              <option value="error">Erreur</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Nouveau workflow</span>
            </button>
          </div>
        </div>
      </div>

      {/* Workflows List */}
      <div className="space-y-4">
        {filteredWorkflows.map(workflow => (
          <div key={workflow.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {workflow.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {workflow.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(workflow.category)}`}>
                  {workflow.category}
                </span>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(workflow.status)}`}>
                  {workflow.status === 'active' ? 'Actif' : workflow.status === 'paused' ? 'En pause' : 'Erreur'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {workflow.executions}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Exécutions
                </div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {workflow.successRate}%
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Taux de succès
                </div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {workflow.lastRun}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Dernière exécution
                </div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {workflow.created}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Créé le
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Déclencheur: {workflow.trigger}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Actions:</span>
                {workflow.actions.map((action, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                      {action}
                    </span>
                    {index < workflow.actions.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-gray-400 mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                {workflow.status === 'active' ? (
                  <button className="flex items-center space-x-2 px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-700 transition-colors">
                    <Pause className="w-4 h-4" />
                    <span>Pause</span>
                  </button>
                ) : (
                  <button className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 rounded-lg hover:bg-green-200 dark:hover:bg-green-700 transition-colors">
                    <Play className="w-4 h-4" />
                    <span>Activer</span>
                  </button>
                )}
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
        ))}
      </div>
    </div>
  );

  const renderTemplates = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Templates de communication
            </h3>
            <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Nouveau template</span>
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {templates.map(template => (
            <div key={template.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-800 rounded-lg flex items-center justify-center">
                    {template.type === 'email' ? (
                      <Mail className="w-5 h-5 text-purple-600 dark:text-purple-300" />
                    ) : (
                      <MessageSquare className="w-5 h-5 text-purple-600 dark:text-purple-300" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {template.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {template.description}
                    </p>
                    <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500 dark:text-gray-400">
                      <span>Utilisé {template.usage} fois</span>
                      <span>Modifié le {template.lastUpdated}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(template.category)}`}>
                    {template.category}
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {template.type.toUpperCase()}
                  </span>
                  <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      {/* Recent Executions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Exécutions récentes
        </h3>
        <div className="space-y-4">
          {recentExecutions.map(execution => (
            <div key={execution.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-4">
                {getStatusIcon(execution.status)}
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {execution.workflow}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {execution.trigger}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {execution.time}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Durée: {execution.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Performance des workflows
        </h3>
        <div className="h-64 flex items-end justify-between space-x-2">
          {[85, 92, 78, 96, 89, 94, 87].map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-blue-500 rounded-t" 
                style={{ height: `${value}%` }}
              ></div>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                J{index + 1}
              </span>
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
              Automatisation
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Automatisez vos processus de formation et communication
            </p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Nouveau workflow</span>
          </button>
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

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg mb-8">
          {[
            { id: 'workflows', label: 'Workflows' },
            { id: 'templates', label: 'Templates' },
            { id: 'analytics', label: 'Analytics' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'workflows' && renderWorkflows()}
        {activeTab === 'templates' && renderTemplates()}
        {activeTab === 'analytics' && renderAnalytics()}
      </div>
    </div>
  );
};
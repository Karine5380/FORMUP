import React, { useState } from 'react';
import { 
  Users, 
  Plus, 
  Search, 
  Filter, 
  Phone, 
  Mail, 
  Calendar, 
  Building, 
  DollarSign,
  TrendingUp,
  Target,
  UserCheck,
  Clock,
  Star,
  Edit3,
  Eye,
  MoreHorizontal,
  CheckCircle,
  AlertCircle,
  XCircle
} from 'lucide-react';

export const CRM: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'leads' | 'clients' | 'pipeline' | 'tasks'>('leads');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const leads = [
    {
      id: 1,
      name: 'TechCorp Solutions',
      contact: 'Marie Dubois',
      email: 'marie@techcorp.com',
      phone: '+33 1 23 45 67 89',
      source: 'Site web',
      value: 15000,
      stage: 'qualification',
      priority: 'high',
      lastContact: '2024-01-15',
      nextAction: 'Appel de suivi',
      tags: ['PME', 'Tech', 'Formation continue']
    },
    {
      id: 2,
      name: 'StartupXYZ',
      contact: 'Jean Martin',
      email: 'jean@startupxyz.com',
      phone: '+33 1 98 76 54 32',
      source: 'LinkedIn',
      value: 8500,
      stage: 'proposal',
      priority: 'medium',
      lastContact: '2024-01-14',
      nextAction: 'Présentation produit',
      tags: ['Startup', 'Digital', 'Équipe jeune']
    },
    {
      id: 3,
      name: 'Groupe Industries',
      contact: 'Sophie Laurent',
      email: 'sophie@groupe-industries.fr',
      phone: '+33 1 11 22 33 44',
      source: 'Référence',
      value: 25000,
      stage: 'negotiation',
      priority: 'high',
      lastContact: '2024-01-13',
      nextAction: 'Négociation contrat',
      tags: ['Grande entreprise', 'Industrie', 'Multi-sites']
    }
  ];

  const clients = [
    {
      id: 1,
      name: 'FormaTech Pro',
      contact: 'Pierre Durand',
      email: 'pierre@formatech.com',
      totalSpent: 45000,
      activeContracts: 3,
      lastPurchase: '2024-01-10',
      satisfaction: 4.8,
      status: 'active',
      nextRenewal: '2024-06-15'
    },
    {
      id: 2,
      name: 'Digital Academy',
      contact: 'Anna Moreau',
      email: 'anna@digital-academy.fr',
      totalSpent: 32000,
      activeContracts: 2,
      lastPurchase: '2024-01-08',
      satisfaction: 4.6,
      status: 'active',
      nextRenewal: '2024-08-20'
    }
  ];

  const tasks = [
    {
      id: 1,
      title: 'Appel de suivi - TechCorp',
      description: 'Discuter des besoins en formation React',
      dueDate: '2024-01-16',
      priority: 'high',
      assignedTo: 'Marie Dubois',
      status: 'pending',
      leadId: 1
    },
    {
      id: 2,
      title: 'Envoyer proposition - StartupXYZ',
      description: 'Préparer devis pour formation management',
      dueDate: '2024-01-17',
      priority: 'medium',
      assignedTo: 'Jean Martin',
      status: 'in-progress',
      leadId: 2
    }
  ];

  const stats = [
    {
      title: 'Leads actifs',
      value: '47',
      change: '+12%',
      icon: Target,
      color: 'bg-blue-500'
    },
    {
      title: 'Taux de conversion',
      value: '23%',
      change: '+3%',
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      title: 'Valeur pipeline',
      value: '€186k',
      change: '+18%',
      icon: DollarSign,
      color: 'bg-purple-500'
    },
    {
      title: 'Clients actifs',
      value: '128',
      change: '+8%',
      icon: UserCheck,
      color: 'bg-orange-500'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100';
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'qualification':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100';
      case 'proposal':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100';
      case 'negotiation':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100';
      case 'closed-won':
        return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
      case 'closed-lost':
        return 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100';
    }
  };

  const getTaskStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-gray-500" />;
      default:
        return <XCircle className="w-4 h-4 text-red-500" />;
    }
  };

  const renderLeads = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Prospects ({leads.length})
            </h3>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Nouveau prospect</span>
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {leads.map(lead => (
            <div key={lead.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {lead.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {lead.contact}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(lead.priority)}`}>
                    {lead.priority === 'high' ? 'Haute' : lead.priority === 'medium' ? 'Moyenne' : 'Basse'}
                  </span>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStageColor(lead.stage)}`}>
                    {lead.stage}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>{lead.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>{lead.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <DollarSign className="w-4 h-4" />
                  <span>€{lead.value.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{lead.lastContact}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {lead.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Prochaine action:</strong> {lead.nextAction}
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderClients = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Clients ({clients.length})
            </h3>
            <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Nouveau client</span>
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {clients.map(client => (
            <div key={client.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {client.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {client.contact}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {client.satisfaction}/5
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    €{client.totalSpent.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Total dépensé
                  </div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {client.activeContracts}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Contrats actifs
                  </div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {client.lastPurchase}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Dernier achat
                  </div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {client.nextRenewal}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Renouvellement
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                  Client actif
                </span>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPipeline = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Pipeline des ventes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { stage: 'Qualification', count: 12, value: 48500, color: 'bg-blue-500' },
            { stage: 'Proposition', count: 8, value: 67200, color: 'bg-purple-500' },
            { stage: 'Négociation', count: 5, value: 125000, color: 'bg-orange-500' },
            { stage: 'Signature', count: 3, value: 89000, color: 'bg-green-500' }
          ].map((stage, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {stage.stage}
                </h4>
                <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stage.count}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                €{stage.value.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTasks = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Tâches ({tasks.length})
            </h3>
            <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Nouvelle tâche</span>
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {tasks.map(task => (
            <div key={task.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {getTaskStatusIcon(task.status)}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {task.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {task.description}
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <span>Assigné à: {task.assignedTo}</span>
                      <span>Échéance: {task.dueDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                    {task.priority === 'high' ? 'Haute' : task.priority === 'medium' ? 'Moyenne' : 'Basse'}
                  </span>
                  <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              CRM
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Gestion de la relation client et pipeline commercial
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />
            </div>
          </div>
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
            { id: 'leads', label: 'Prospects' },
            { id: 'clients', label: 'Clients' },
            { id: 'pipeline', label: 'Pipeline' },
            { id: 'tasks', label: 'Tâches' }
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
        {activeTab === 'leads' && renderLeads()}
        {activeTab === 'clients' && renderClients()}
        {activeTab === 'pipeline' && renderPipeline()}
        {activeTab === 'tasks' && renderTasks()}
      </div>
    </div>
  );
};
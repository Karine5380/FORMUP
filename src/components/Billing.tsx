import React, { useState } from 'react';
import { 
  CreditCard, 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit3, 
  Send, 
  Check, 
  Clock, 
  AlertCircle,
  Euro,
  TrendingUp,
  FileText,
  Calendar,
  Building,
  User,
  DollarSign
} from 'lucide-react';

export const Billing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'invoices' | 'estimates' | 'payments' | 'reports'>('invoices');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const invoices = [
    {
      id: 'FACT-2024-001',
      client: 'TechCorp Solutions',
      contact: 'Marie Dubois',
      amount: 2850,
      status: 'paid',
      dueDate: '2024-01-30',
      issueDate: '2024-01-15',
      items: [
        { description: 'Formation React Avancé', quantity: 1, price: 2400 },
        { description: 'Support technique', quantity: 3, price: 150 }
      ]
    },
    {
      id: 'FACT-2024-002',
      client: 'StartupXYZ',
      contact: 'Jean Martin',
      amount: 1650,
      status: 'pending',
      dueDate: '2024-02-15',
      issueDate: '2024-01-16',
      items: [
        { description: 'Formation Management', quantity: 1, price: 1500 },
        { description: 'Ressources pédagogiques', quantity: 1, price: 150 }
      ]
    },
    {
      id: 'FACT-2024-003',
      client: 'Groupe Industries',
      contact: 'Sophie Laurent',
      amount: 4250,
      status: 'overdue',
      dueDate: '2024-01-10',
      issueDate: '2024-01-01',
      items: [
        { description: 'Formation Cybersécurité', quantity: 1, price: 3500 },
        { description: 'Certification', quantity: 1, price: 750 }
      ]
    },
    {
      id: 'FACT-2024-004',
      client: 'Digital Academy',
      contact: 'Anna Moreau',
      amount: 3200,
      status: 'draft',
      dueDate: '2024-02-20',
      issueDate: '2024-01-18',
      items: [
        { description: 'Parcours E-learning', quantity: 1, price: 2800 },
        { description: 'Support 6 mois', quantity: 1, price: 400 }
      ]
    }
  ];

  const estimates = [
    {
      id: 'DEVIS-2024-001',
      client: 'Innovation Corp',
      contact: 'Pierre Durand',
      amount: 5500,
      status: 'sent',
      validUntil: '2024-02-15',
      issueDate: '2024-01-16',
      items: [
        { description: 'Formation Design Thinking', quantity: 2, price: 2000 },
        { description: 'Workshop créativité', quantity: 1, price: 1500 }
      ]
    },
    {
      id: 'DEVIS-2024-002',
      client: 'Future Tech',
      contact: 'Lisa Chen',
      amount: 3800,
      status: 'accepted',
      validUntil: '2024-02-10',
      issueDate: '2024-01-12',
      items: [
        { description: 'Formation IA & ML', quantity: 1, price: 3200 },
        { description: 'Support technique', quantity: 4, price: 150 }
      ]
    }
  ];

  const payments = [
    {
      id: 1,
      invoice: 'FACT-2024-001',
      client: 'TechCorp Solutions',
      amount: 2850,
      method: 'Virement bancaire',
      date: '2024-01-18',
      status: 'completed'
    },
    {
      id: 2,
      invoice: 'FACT-2023-098',
      client: 'FormaTech Pro',
      amount: 1200,
      method: 'Carte bancaire',
      date: '2024-01-17',
      status: 'completed'
    },
    {
      id: 3,
      invoice: 'FACT-2024-002',
      client: 'StartupXYZ',
      amount: 825,
      method: 'Virement bancaire',
      date: '2024-01-16',
      status: 'pending'
    }
  ];

  const stats = [
    {
      title: 'Chiffre d\'affaires',
      value: '€47,250',
      change: '+23% ce mois',
      icon: Euro,
      color: 'bg-green-500'
    },
    {
      title: 'Factures en attente',
      value: '€12,180',
      change: '8 factures',
      icon: Clock,
      color: 'bg-yellow-500'
    },
    {
      title: 'Factures en retard',
      value: '€4,250',
      change: '2 factures',
      icon: AlertCircle,
      color: 'bg-red-500'
    },
    {
      title: 'Taux de recouvrement',
      value: '94%',
      change: '+2% ce mois',
      icon: TrendingUp,
      color: 'bg-blue-500'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
      case 'completed':
      case 'accepted':
        return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
      case 'pending':
      case 'sent':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100';
      case 'overdue':
        return 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100';
      case 'draft':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'paid':
        return 'Payée';
      case 'pending':
        return 'En attente';
      case 'overdue':
        return 'En retard';
      case 'draft':
        return 'Brouillon';
      case 'sent':
        return 'Envoyé';
      case 'accepted':
        return 'Accepté';
      case 'completed':
        return 'Terminé';
      default:
        return 'Inconnu';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
      case 'completed':
      case 'accepted':
        return <Check className="w-4 h-4 text-green-500" />;
      case 'pending':
      case 'sent':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'overdue':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <FileText className="w-4 h-4 text-gray-500" />;
    }
  };

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const renderInvoices = () => (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une facture..."
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
              <option value="draft">Brouillon</option>
              <option value="pending">En attente</option>
              <option value="paid">Payée</option>
              <option value="overdue">En retard</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Nouvelle facture</span>
            </button>
          </div>
        </div>
      </div>

      {/* Invoices List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Factures ({filteredInvoices.length})
          </h3>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredInvoices.map(invoice => (
            <div key={invoice.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {invoice.id}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {invoice.client} • {invoice.contact}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      €{invoice.amount.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Échéance: {invoice.dueDate}
                    </div>
                  </div>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                    {getStatusLabel(invoice.status)}
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Prestations:
                </h5>
                <div className="space-y-1">
                  {invoice.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>{item.description} (x{item.quantity})</span>
                      <span>€{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  {getStatusIcon(invoice.status)}
                  <span>Émise le {invoice.issueDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  {invoice.status === 'draft' && (
                    <button className="p-2 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      <Edit3 className="w-4 h-4" />
                    </button>
                  )}
                  {(invoice.status === 'pending' || invoice.status === 'overdue') && (
                    <button className="p-2 text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                      <Send className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEstimates = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Devis ({estimates.length})
            </h3>
            <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Nouveau devis</span>
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {estimates.map(estimate => (
            <div key={estimate.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {estimate.id}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {estimate.client} • {estimate.contact}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      €{estimate.amount.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Valide jusqu'au: {estimate.validUntil}
                    </div>
                  </div>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(estimate.status)}`}>
                    {getStatusLabel(estimate.status)}
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Prestations:
                </h5>
                <div className="space-y-1">
                  {estimate.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>{item.description} (x{item.quantity})</span>
                      <span>€{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  {getStatusIcon(estimate.status)}
                  <span>Créé le {estimate.issueDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
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

  const renderPayments = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Paiements ({payments.length})
          </h3>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {payments.map(payment => (
            <div key={payment.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {payment.invoice}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {payment.client} • {payment.method}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {payment.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      €{payment.amount.toLocaleString()}
                    </div>
                  </div>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                    {getStatusLabel(payment.status)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      {/* Monthly Revenue Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Évolution du chiffre d'affaires
        </h3>
        <div className="h-64 flex items-end justify-between space-x-2">
          {[15000, 18000, 22000, 19000, 25000, 28000, 32000, 29000, 35000, 38000, 42000, 47000].map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-blue-500 rounded-t" 
                style={{ height: `${(value / 50000) * 100}%` }}
              ></div>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][index]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Clients */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Top clients
        </h3>
        <div className="space-y-4">
          {[
            { name: 'TechCorp Solutions', amount: 45000, invoices: 8 },
            { name: 'Digital Academy', amount: 32000, invoices: 6 },
            { name: 'Groupe Industries', amount: 28000, invoices: 4 },
            { name: 'Innovation Corp', amount: 22000, invoices: 5 },
            { name: 'Future Tech', amount: 18000, invoices: 3 }
          ].map((client, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center">
                  <Building className="w-4 h-4 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {client.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {client.invoices} factures
                  </p>
                </div>
              </div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                €{client.amount.toLocaleString()}
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
              Facturation
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Gestion des factures, devis et paiements
            </p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Nouvelle facture</span>
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
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
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
            { id: 'invoices', label: 'Factures' },
            { id: 'estimates', label: 'Devis' },
            { id: 'payments', label: 'Paiements' },
            { id: 'reports', label: 'Rapports' }
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
        {activeTab === 'invoices' && renderInvoices()}
        {activeTab === 'estimates' && renderEstimates()}
        {activeTab === 'payments' && renderPayments()}
        {activeTab === 'reports' && renderReports()}
      </div>
    </div>
  );
};
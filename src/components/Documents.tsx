import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Plus, 
  Search, 
  Filter,
  Calendar,
  User,
  CheckCircle,
  Clock,
  AlertCircle,
  Printer
} from 'lucide-react';

export const Documents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const documents = [
    {
      id: 1,
      title: 'Convocation - Formation React Avancé',
      type: 'convocation',
      sessionTitle: 'Formation React Avancé',
      participant: 'Jean Dupont',
      date: '2024-01-15',
      status: 'sent',
      createdAt: '2024-01-10',
      fileSize: '245 KB'
    },
    {
      id: 2,
      title: 'Contrat de formation - Management d\'équipe',
      type: 'contrat',
      sessionTitle: 'Management d\'équipe',
      participant: 'Entreprise ABC',
      date: '2024-01-16',
      status: 'signed',
      createdAt: '2024-01-08',
      fileSize: '512 KB'
    },
    {
      id: 3,
      title: 'Feuille d\'émargement - Sécurité Informatique',
      type: 'emargement',
      sessionTitle: 'Sécurité Informatique',
      participant: 'Groupe Formation',
      date: '2024-01-17',
      status: 'pending',
      createdAt: '2024-01-12',
      fileSize: '189 KB'
    },
    {
      id: 4,
      title: 'Attestation - Design Thinking',
      type: 'attestation',
      sessionTitle: 'Design Thinking',
      participant: 'Marie Martin',
      date: '2024-01-18',
      status: 'generated',
      createdAt: '2024-01-18',
      fileSize: '324 KB'
    },
    {
      id: 5,
      title: 'Facture - Formation React Avancé',
      type: 'facture',
      sessionTitle: 'Formation React Avancé',
      participant: 'TechCorp',
      date: '2024-01-15',
      status: 'sent',
      createdAt: '2024-01-16',
      fileSize: '198 KB'
    },
    {
      id: 6,
      title: 'Devis - Formation Python',
      type: 'devis',
      sessionTitle: 'Formation Python',
      participant: 'StartupXYZ',
      date: '2024-01-20',
      status: 'draft',
      createdAt: '2024-01-13',
      fileSize: '156 KB'
    }
  ];

  const documentTypes = {
    convocation: { label: 'Convocation', color: 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100' },
    contrat: { label: 'Contrat', color: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' },
    emargement: { label: 'Émargement', color: 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100' },
    attestation: { label: 'Attestation', color: 'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100' },
    facture: { label: 'Facture', color: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100' },
    devis: { label: 'Devis', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.participant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.sessionTitle.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = typeFilter === 'all' || doc.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || doc.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sent':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'signed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'generated':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'draft':
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'sent':
        return 'Envoyé';
      case 'signed':
        return 'Signé';
      case 'generated':
        return 'Généré';
      case 'pending':
        return 'En attente';
      case 'draft':
        return 'Brouillon';
      default:
        return 'Inconnu';
    }
  };

  const handleGenerateDocument = (type: string) => {
    console.log(`Generating document of type: ${type}`);
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Documents
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Gérez et générez vos documents de formation
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                className="appearance-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2 pr-8 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                onChange={(e) => handleGenerateDocument(e.target.value)}
                value=""
              >
                <option value="">Générer un document</option>
                <option value="convocation">Convocation</option>
                <option value="contrat">Contrat</option>
                <option value="emargement">Feuille d'émargement</option>
                <option value="attestation">Attestation</option>
                <option value="facture">Facture</option>
                <option value="devis">Devis</option>
              </select>
              <Plus className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un document..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <option value="all">Tous les types</option>
                <option value="convocation">Convocation</option>
                <option value="contrat">Contrat</option>
                <option value="emargement">Émargement</option>
                <option value="attestation">Attestation</option>
                <option value="facture">Facture</option>
                <option value="devis">Devis</option>
              </select>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <option value="all">Tous les statuts</option>
                <option value="draft">Brouillon</option>
                <option value="pending">En attente</option>
                <option value="sent">Envoyé</option>
                <option value="signed">Signé</option>
                <option value="generated">Généré</option>
              </select>
            </div>
          </div>
        </div>

        {/* Documents List */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Tous les documents ({filteredDocuments.length})
            </h3>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredDocuments.map(doc => (
              <div key={doc.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <FileText className="w-10 h-10 text-gray-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {doc.title}
                      </h4>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mt-1">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {doc.participant}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {doc.date}
                        </div>
                        <span>{doc.fileSize}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      documentTypes[doc.type as keyof typeof documentTypes]?.color
                    }`}>
                      {documentTypes[doc.type as keyof typeof documentTypes]?.label}
                    </span>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(doc.status)}
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {getStatusLabel(doc.status)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <Printer className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredDocuments.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-12 text-center">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Aucun document trouvé
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Essayez de modifier vos critères de recherche ou générez un nouveau document.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Générer un document
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
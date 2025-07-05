import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'formateur' | 'entreprise' | 'apprenant';
  avatar?: string;
}

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
  permissions: string[];
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: '1',
    name: 'Marie Dubois',
    email: 'marie.dubois@formup.com',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=150'
  });

  const getPermissions = (role: string) => {
    switch (role) {
      case 'admin':
        return ['all'];
      case 'formateur':
        return ['sessions', 'calendar', 'documents', 'videoconference', 'elearning'];
      case 'entreprise':
        return ['sessions', 'calendar', 'billing', 'crm'];
      case 'apprenant':
        return ['sessions', 'elearning'];
      default:
        return [];
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, permissions: getPermissions(user.role) }}>
      {children}
    </UserContext.Provider>
  );
};
// auth-context.tsx
import React, { createContext, useContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode'

export interface Club {
  name: string;
  members: number;
  // Add other properties as needed
}

export interface AuthContextProps {
  children: React.ReactNode;
}

export interface AuthProviderValue {
  club: Club | null;
  setClub: (club: Club | null) => void;
  login: (clubData: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthProviderValue | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [club, setClub] = useState<Club | null>(null);

  const login = (clubData: string) => {
    // Implement login logic here
    const decodedClub: Club = jwtDecode(clubData)
    setClub(decodedClub)
  }

  const logout = () => {
    setClub(null);
  };

  return (
    <AuthContext.Provider value={{ club, setClub, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
// src/context/AuthContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface AuthContextProps {
  user: string | null;
  login: (username: string, password: string, setError: React.Dispatch<React.SetStateAction<string | null>>) => void;
  signup: (username: string, password: string, setError: React.Dispatch<React.SetStateAction<string | null>>) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<{ username: string; password: string }[]>([]);
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();

  const signup = (username: string, password: string, setError: React.Dispatch<React.SetStateAction<string | null>>) => {
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      setError('Username already exists');
    } else {
      setUsers([...users, { username, password }]);
      setUser(username);
      setError(null);
      router.push('/todos');
    }
  };

  const login = (username: string, password: string, setError: React.Dispatch<React.SetStateAction<string | null>>) => {
    const foundUser = users.find(user => user.username === username && user.password === password);
    if (foundUser) {
      setUser(username);
      setError(null);
      router.push('/todos');
    } else {
      setError('Invalid username or password');
    }
  };

  const logout = () => {
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

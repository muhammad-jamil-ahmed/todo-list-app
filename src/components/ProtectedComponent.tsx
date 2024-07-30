// src/components/ProtectedComponent.tsx

import { useAuth } from '../context/AuthContext';
import { ReactNode } from 'react';
import ListTodo from './ListTodo'; // Correct import for default export

const ProtectedComponent = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="text-center text-red-500 p-4 bg-red-100 rounded">
        You need to be logged in to view this content.
      </div>
    );
  }

  return <ListTodo />;
};

export default ProtectedComponent;

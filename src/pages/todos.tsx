// src/pages/todos.tsx

import React from 'react';
import ListTodo from '../components/ListTodo';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

const TodosPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  if (!user) return <p>Loading...</p>;

  return <ListTodo />;
};

export default TodosPage;

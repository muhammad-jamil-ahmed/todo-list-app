// src/pages/index.tsx

import Login from '../components/Login';
import ProtectedComponent from '../components/ProtectedComponent';
import ListTodo from '@/components/ListTodo';

const HomePage = () => {
  return (
    <div>
      <Login />
      <ProtectedComponent>
       <ListTodo/>
      </ProtectedComponent>
    </div>
  );
};

export default HomePage;

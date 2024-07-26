import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { signup, user } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signup(username, password, setError);
  };

  if (user) {
    router.push('/todos');
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96 min-h-[300px]"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-500">Sign Up for Todo App</h1>
        {error && <p className="text-center text-red-500 mb-4">{error}</p>} 
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-700 transition mt-4"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center">
          <Link href="/">
            <span className="text-blue-500 hover:underline cursor-pointer">Go Back</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

// src/pages/_app.tsx

import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';  // Import your store
import { AuthProvider } from '../context/AuthContext';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;

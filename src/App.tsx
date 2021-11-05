import './App.css';
import { createContext, useState, useEffect } from 'react';
import AppRouter from './AppRouter';

import { onAuthUIStateChange } from '@aws-amplify/ui-components';

interface AuthContextShape {
  user: any;
  isSignedIn: boolean;
  setUser: Function;
  setIsSignedIn: Function;
}

export const AuthContext = createContext<AuthContextShape>({
  user: {},
  isSignedIn: false,
  setUser: () => null,
  setIsSignedIn: () => null,
});

function App() {
  const [user, setUser] = useState<object | undefined>();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setUser(authData);
      console.log('auth data: ', authData);
    });
  }, []);
  return (
    <div className="App">
      <AuthContext.Provider
        value={{ user, isSignedIn, setUser, setIsSignedIn }}
      >
        <header className="App-header">
          <AppRouter />
        </header>
      </AuthContext.Provider>
    </div>
  );
}

export default App;

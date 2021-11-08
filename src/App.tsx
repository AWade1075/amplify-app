import { createContext, useState, useEffect } from 'react';
import AppRouter from './AppRouter';

import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import {
  AmplifyAuthContainer,
  AmplifyAuthenticator,
} from '@aws-amplify/ui-react';
import SiteHeader from './components/SiteHeader/SiteHeader';

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
  const [user, setUser] = useState<any>();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      console.log('setting user', authData);
      setUser(authData);
      setIsSignedIn(!!authData);
    });
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{ user, isSignedIn, setUser, setIsSignedIn }}
      >
        <SiteHeader isLoggedIn={isSignedIn} />
        <div className="container-fluid app">
          {isSignedIn ? (
            <AppRouter />
          ) : (
            <AmplifyAuthContainer>
              <AmplifyAuthenticator />
            </AmplifyAuthContainer>
          )}
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;

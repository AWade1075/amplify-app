import { AuthContext } from '../../App';
import { useContext } from 'react';
import {
  AmplifyAuthContainer,
  AmplifyAuthenticator,
  AmplifySignOut,
} from '@aws-amplify/ui-react';

function LoginPage() {
  const { user } = useContext(AuthContext);

  return user?.username ? (
    <>
      <AmplifySignOut />
      <a href="/">go home</a>
    </>
  ) : (
    <AmplifyAuthContainer>
      <AmplifyAuthenticator />
    </AmplifyAuthContainer>
  );
}
export default LoginPage;

import { AuthContext } from '../../App';
import { useContext, ReactElement, JSXElementConstructor } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function AuthComponent({
  children,
}: {
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>[]
    | ReactElement<any, any>;
}): any {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user?.username) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
}

export default AuthComponent;

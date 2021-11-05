import { AuthContext } from '../../App';
import { useContext } from 'react';
import { Route, RouteProps, Navigate } from 'react-router-dom';

function AuthRoute(props: RouteProps) {
  const { user } = useContext(AuthContext);

  console.log('USER: ', user?.username);

  return <p>test </p>;
}

export default AuthRoute;

import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import UserProfilePage from './pages/user-profile/UserProfilePage';
import LoginPage from './pages/login/LoginPage';

import AuthRoute from './components/AuthRoute/AuthRoute';

function AppRouter() {
  console.log('router');
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />} />
      <AuthRoute path="/user-profile" element={<UserProfilePage />} />
    </Routes>
  );
}

export default AppRouter;

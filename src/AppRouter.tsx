import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import UserProfilePage from './pages/user-profile/UserProfilePage';
import LoginPage from './pages/login/LoginPage';

import AuthComponent from './components/AuthComponent/AuthComponent';

function AppRouter() {
  console.log('router');
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/user-profile"
        element={
          <AuthComponent>
            <UserProfilePage />
          </AuthComponent>
        }
      />
    </Routes>
  );
}

export default AppRouter;

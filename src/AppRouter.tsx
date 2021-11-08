import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import UserProfilePage from './pages/user-profile/UserProfilePage';
import AuthComponent from './components/AuthComponent/AuthComponent';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
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

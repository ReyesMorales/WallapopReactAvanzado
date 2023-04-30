import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdvertsPage from './components/adverts/AdvertsPage';
import LoginPage from './components/auth/LoginPage';
import NewAdvertPage from './components/adverts/NewAdvertPage';
import { NotFoundPage } from './components/adverts/NotFound';
import { useIsLogged } from './hooks';
import { DetailedAdvert } from './components/adverts/DetailedAdvert';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);
  useIsLogged(isLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage onLogin={handleLogin} />}
      />
      <Route
        path="/adverts/new"
        element={<NewAdvertPage onLogout={handleLogout} isLogged={isLogged} />}
      />
      <Route
        path="/adverts"
        element={<AdvertsPage onLogout={handleLogout} isLogged={isLogged} />}
      />
      <Route
        path="/"
        element={<AdvertsPage onLogout={handleLogout} isLogged={isLogged} />}
      />
      <Route
        path="/adverts/:id"
        element={<DetailedAdvert onLogout={handleLogout} isLogged={isLogged} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

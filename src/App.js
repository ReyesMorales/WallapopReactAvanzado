import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import AdvertsPage from './components/adverts/AdvertsPage';
import LoginPage from './components/auth/LoginPage';
import NewAdvertPage from './components/adverts/NewAdvertPage';
import { NotFoundPage } from './components/adverts/NotFound';
import { useIsLogged } from './hooks';
import { DetailedAdvert } from './components/adverts/DetailedAdvert';

function App() {
  return (
    <Provider store={store}>
      <InnerApp />
    </Provider>
  );
}

function InnerApp() {
  const navigate = useNavigate();
  useIsLogged();

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={() => navigate('/')} />} />
      <Route path="/adverts/new" element={<NewAdvertPage />} />
      <Route path="/adverts" element={<AdvertsPage />} />
      <Route path="/" element={<AdvertsPage />} />
      <Route path="/adverts/:id" element={<DetailedAdvert />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

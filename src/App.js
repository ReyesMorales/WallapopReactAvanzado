import "./App.css";
import React, { Fragment, useState } from "react";
import AdvertsPage from "./components/adverts/AdvertsPage";
import LoginPage from "./components/auth/LoginPage";
import NewAdvertPage from './components/adverts/NewAdvertPage'

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div className="App">
      {isLogged ? (
      <>
      <AdvertsPage onLogout={handleLogout} isLogged={isLogged}/>
      <NewAdvertPage onLogout={handleLogout} isLogged={isLogged}/>
      </>
      ) :(
      <LoginPage onLogin={handleLogin}/>
      )}
    </div>
  );
}

export default App;

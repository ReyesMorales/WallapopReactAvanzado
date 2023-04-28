import "./App.css";
import React, { useState } from "react";
import AdvertsPage from "./components/adverts/AdvertsPage";
import Button from "./components/shared/Button";
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
      <AdvertsPage onLogout={handleLogout}/>
      <NewAdvertPage />
      </>
      ) :(
      <LoginPage onLogin={handleLogin}/>
      )}
      { /* <Button variant="primary" onClick={(event) => console.log(event)}>
        Click
      </Button>
      <Button variant="secondary" onClick={(event) => console.log(event)}>
        Click
  </Button> */}
    </div>
  );
}

export default App;

import "./App.css";
import React from "react";
/* import AdvertsPage from "./components/adverts/AdvertsPage";*/
import Button from "./components/shared/Button";
import LoginPage from "./components/auth/LoginPage";

function App() {
  return (
    <div className="App">
      {/* <AdvertsPage /> */}
      <LoginPage />
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

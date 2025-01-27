import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loginform from "./Components/Loginform";
// import Dashboard from "./Components/Dashboard";
import Schools from "./Components/Schools";
const App = () => {
  return (
    <>
      <Loginform />
      {/* <Dashboard /> */}
      <Schools />
    </>
  );
};

export default App;

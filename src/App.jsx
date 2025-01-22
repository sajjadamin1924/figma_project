import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loginform from "./Components/Loginform";
import Dashboard from "./Components/Dashboard";
const App = () => {
  return (
    <>
      <Loginform />
      <Dashboards />
    </>
  );
};

export default App;

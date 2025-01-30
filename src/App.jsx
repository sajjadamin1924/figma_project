import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginform from "./Components/Loginform";
import Dashboard from "./Components/Dashboard";
import Schools from "./Components/Schools";
import AbcSchool from "./Components/AbcSchool";
import Students from "./Components/Students";
import Teachers from "./Components/Teachers";
import Parents from "./Components/Parents";
import Events from "./Components/Events";
import Plans from "./Components/Plans";
import Cummunity from "./Components/Cummunity";
import Messages from "./Components/Messages";
import Classes from "./Components/Classes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/AbcSchool" element={<AbcSchool />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/Teachers" element={<Teachers />} />
        <Route path="/Parents" element={<Parents />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Plans" element={<Plans />} />
        <Route path="/cummunity" element={<Cummunity />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

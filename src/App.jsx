import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginform from "./Components/Loginform";
import Dashboard from "./Components/Dashboard";
import Schools from "./Components/Schools";
import AbcSchool from "./Components/AbcSchool";
import Students from "./Components/Students";
import Teachers from "./Components/Teachers";
import Parents from "./Components/Parents";
import Events from "./Components/Events";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/AbcSchool" element={<AbcSchool />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/Teachers" element={<Teachers />} />
        <Route path="/Parents" element={<Parents />} />
        <Route path="/Events" element={<Events />} />

        {/* <Route path="/community" element={<Community />} />
        <Route path="/messages" element={<Messages />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

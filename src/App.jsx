import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginform from "./Components/Loginform";
import Dashboard from "./Components/Dashboard";
import Schools from "./Components/Schools";
import AbcSchool from "./Components/AbcSchool";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/AbcSchool" element={<AbcSchool />} />
        {/* <Route path="/community" element={<Community />} />
        <Route path="/messages" element={<Messages />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

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
import Addnewstudent from "./Components/Addnewstudent";
import Addnewteacher from "./Components/Addnewteacher";
import StudentDetails from "./Components/Studentdetails";
import Quizzes from "./Components/Quizzes";
import File from "./Components/File";
import Examreport from "./Components/Examreport";
import Attendance from "./Components/Attendance";

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
        <Route path="/addnewstudent" element={<Addnewstudent />} />
        <Route path="/addnewteacher" element={<Addnewteacher />} />
        <Route path="/studentdetails" element={<StudentDetails />} />
        <Route path="/studentdetails" element={<Quizzes />} />
        <Route path="/studentdetails" element={<Examreport />} />
        <Route path="/studentdetails" element={<File />} />
        <Route path="/studentdetails" element={<Attendance />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

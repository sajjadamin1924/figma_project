import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const AbcSchool = () => {
  return (
    <div className="d-flex ">
     
     <div className="col-md-3 bg-white border-end d-flex flex-column px-0">
          <div className="text-center py-3">
            <h1>ISOAS</h1>
            <img
              src="Group 2186.png"
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: "100px" }}
            />
          </div>
          <nav className="nav flex flex-column align-items-start">
            <Link
              className="nav-link d-flex align-items-center text-dark"
              to="/dashboard"
            >
              <img
                src="Speedometer.png"
                alt="Dashboard Icon"
                className="me-2"
              />
              Dashboard
            </Link>
            <Link
              className="nav-link d-flex align-items-center text-dark"
              to="/schools"
            >
              <img src="Vector (1).png" alt="Schools Icon" className="me-2" />
              Schools
            </Link>
            <Link
              className="nav-link d-flex align-items-center text-dark"
              to="/plans"
            >
              <img src="Show.png" alt="Plans Icon" className="me-2" />
              Plans
            </Link>
            <Link
              className="nav-link d-flex align-items-center text-dark"
              to="/community"
            >
              <img src="Team.png" alt="Community Icon" className="me-2" />
              Community
            </Link>
            <Link
              className="nav-link d-flex align-items-center text-dark"
              to="/messages"
            >
              <img src="meeting.png" alt="Messages Icon" className="me-2" />
              Messages
            </Link>
          </nav>
        </div>

     
      <div className="flex-grow-1 p-4">
       
        <div className="card mb-4">
          <div className="card-body d-flex align-items-center">
            <div className="profile-picture rounded-circle bg-light me-3" style={{ width: "80px", height: "80px" }}></div>
            <div>
              <h5>Abc School</h5>
              <p className="mb-1 text-muted">Jakarta, Indonesia</p>
              <p className="mb-0">
                <span className="me-3"><i className="bi bi-telephone"></i> +12 345 6789 0</span>
                <span><i className="bi bi-envelope"></i> jordan@mail.com</span>
              </p>
            </div>
          </div>
        </div>

       
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Total Classes</h6>
                <h4 className="text-primary">45</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Total Teachers</h6>
                <h4 className="text-success">85</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Total Students</h6>
                <h4 className="text-info">5</h4>
              </div>
            </div>
          </div>
        </div>

       
        <div className="card">
          <div className="card-body">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a href="#" className="nav-link active">Classes</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Students</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Teachers</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Parents</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Events</a>
              </li>
            </ul>

            <table className="table mt-3">
              <thead>
                <tr>
                  <th>Class ID</th>
                  <th>Class Name</th>
                  <th>Year</th>
                  <th>Teacher(s)</th>
                  <th>Students Enrolled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>Mathematics</td>
                  <td>2023</td>
                  <td>Text</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Science</td>
                  <td>2023</td>
                  <td>Text</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>History</td>
                  <td>2023</td>
                  <td>Text</td>
                  <td>28</td>
                </tr>
              </tbody>
            </table>

            <div className="d-flex justify-content-center align-items-center">
              <button className="btn btn-primary ">Add New Class</button>
              <nav>
                <ul className="pagination mb-0">
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbcSchool;

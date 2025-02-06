import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Classes = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="col-md-3 bg-white border-end d-flex flex-column px-0">
          <div className="text-center py-3 p-5 d-flex">
            <img
              src="Group 2186.png"
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: "100px" }}
            />
            <h1 className="text-center p-3">ISOAS</h1>
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
              to="/cummunity"
            >
              <img src="Team.png" alt="cummunity Icon" className="me-2" />
              cummunity
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
          <div className="d-flex justify-content-between align-items-center gap-2">
            <h2 className="fw-bold">Classes</h2>
            <div className="d-flex align-items-center gap-2">
              <div className="position-relative">
                <img
                  src="notification.png"
                  alt="Notification"
                  style={{ width: "90px", height: "90px" }}
                />
              </div>
              <img
                src="setting.png"
                alt="Settings"
                style={{ width: "90px", height: "90px" }}
              />
              <div className="d-flex flex-column align-items-start">
                <span className="fw-bold">Nabila.</span>
                <span className="text-muted">Admin</span>
              </div>
              <img
                src="Placeholder.png"
                alt="User Avatar"
                className="rounded-circle"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#D6CFF7",
                }}
              />
            </div>
          </div>

          <div className="row mb-4">
            <h4>Overview</h4>
            <div className="col-md-3">
              <div className="card position-relative">
                <div className="card-body">
                  <h6 className="text-muted">Total Classes</h6>
                  <h4>45</h4>
                  <p className="text-danger">
                    <i className="bi bi-caret-up-fill"></i> 100%
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card ">
                <div className="card-body">
                  <h6 className="text-muted">Total Teachers</h6>
                  <h4>85</h4>
                  <p className="text-success">
                    <i className="bi bi-caret-up-fill"></i>75%
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h6 className="text-muted">Total Students</h6>
                  <h4>5</h4>
                  <div className="d-flex justify-content-end"></div>
                  <p className="text-success">
                    <i className="bi bi-caret-up-fill"></i> 11%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
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
                    <td>
                      <img
                        className="rounded-circle bg-primary"
                        src="text.png"
                        alt=""
                        width="30"
                        height="30"
                      />
                      Text
                    </td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>002</td>
                    <td>Science</td>
                    <td>2023</td>
                    <td>
                      <img
                        className="rounded-circle bg-warning"
                        src="text.png"
                        alt=""
                        width="30"
                        height="30"
                      />
                      Text
                    </td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>003</td>
                    <td>History</td>
                    <td>2023</td>
                    <td>
                      <img
                        className="rounded-circle bg-danger"
                        src="text.png"
                        alt=""
                        width="30"
                        height="30"
                      />
                      Text
                    </td>
                    <td>28</td>
                  </tr>
                  <tr>
                    <td>004</td>
                    <td>Literature</td>
                    <td>2023</td>
                    <td>
                      <img
                        className="rounded-circle bg-info"
                        src="text.png"
                        alt=""
                        width="30"
                        height="30"
                      />
                      Text
                    </td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>005</td>
                    <td>Art</td>
                    <td>2023</td>
                    <td>
                      <img
                        className="rounded-circle bg-success"
                        src="text.png"
                        alt=""
                        width="30"
                        height="30"
                      />
                      Text
                    </td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>006</td>
                    <td>Physical Education</td>
                    <td>2023</td>
                    <td>
                      <img
                        className="rounded-circle bg-secondary"
                        src="text.png"
                        alt=""
                        width="30"
                        height="30"
                      />
                      Text
                    </td>
                    <td>28</td>
                  </tr>
                  <tr>
                    <td>007</td>
                    <td>Computer Science</td>
                    <td>2023</td>
                    <td>
                      <img
                        className="rounded-circle bg-danger"
                        src="text.png"
                        alt=""
                        width="30"
                        height="30"
                      />
                      Text
                    </td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>008</td>
                    <td>Music</td>
                    <td>2023</td>
                    <td>
                      <img
                        className="rounded-circle bg-dark"
                        src="text.png"
                        alt=""
                        width="30"
                        height="30"
                      />
                      Text
                    </td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>009</td>
                    <td>Biology</td>
                    <td>2023</td>
                    <td>
                      <img
                        className="rounded-circle bg-success"
                        src="text.png"
                        alt=""
                        width="30"
                        height="30"
                      />
                      Text
                    </td>
                    <td>28</td>
                  </tr>
                  <tr>
                    <td>010</td>
                    <td>Chemistry</td>
                    <td>2023</td>
                    <td>
                      <img
                        className="rounded-circle bg-warning"
                        src="text.png"
                        alt=""
                        width="30"
                        height="30"
                      />
                      Text
                    </td>
                    <td>28</td>
                  </tr>
                </tbody>
              </table>

              <div className="d-flex align-items-center justify-content-between">
                <button className="add ms-auto">
                  <i className="bi bi-person-add me-2"></i>Add New Class
                </button>
                <nav aria-label="Page navigation example" className="mx-auto">
                  <ul className="pagination mb-0">
                    <li className="page-item">
                      <a
                        className="page-link border-0 bg-transparent rounded-circle d-flex align-items-center justify-content-center p-3"
                        href="#"
                        aria-label="Previous"
                      >
                        <i className="fas fa-chevron-left"></i>
                      </a>
                    </li>

                    <li className="page-item">
                      <a
                        className="page-link active rounded-pill px-3 py-2"
                        href="#"
                      >
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link rounded-pill px-3 py-2" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link rounded-pill px-3 py-2" href="#">
                        3
                      </a>
                    </li>

                    <li className="page-item">
                      <a
                        className="page-link border-0 bg-transparent rounded-circle d-flex align-items-center justify-content-center p-3"
                        href="#"
                        aria-label="Next"
                      >
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;

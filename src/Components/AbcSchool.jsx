import React from "react";
import { Link } from "react-router-dom";

const AbcSchool = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 bg-white border-end d-flex flex-column px-0">
          <div className="text-center py-3">
            <img
              src="Group 2186.png"
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: "100px" }}
            />
          </div>
          <nav className="nav flex-column align-items-start">
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

        <main className="col-md-9 ">
          <div className="d-flex">
            <div className="d-flex align-items-center justify-content-end gap-4">
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
            <div>
              <img src="cover.png" alt="" />
            </div>
          </div>

          <div>
            <nav>
              <ul
                className="d-flex"
                style={{
                  listStyle: "none",
                  alignItems: "start",
                }}
              >
                <li>Classes</li>
                <li>Students</li>
                <li>Teachers</li>
                <li>Parents</li>
                <li>Events</li>
              </ul>
            </nav>
          </div>

          <div className="table-responsive small">
            <table className="table  ">
              <thead>
                <tr>
                  <th scope="col">Class Id</th>
                  <th scope="col">Class Name</th>
                  <th scope="col">Year</th>
                  <th scope="col">Teacher(s)</th>
                  <th scope="col">Students Enrolled</th>
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
                <tr>
                  <td>004</td>
                  <td>Literature</td>
                  <td>2023</td>
                  <td>Text</td>
                  <td>22</td>
                </tr>
                <tr>
                  <td>005</td>
                  <td>Art</td>
                  <td>2023</td>
                  <td>Text</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>006</td>
                  <td>Physical Education</td>
                  <td>2023</td>
                  <td>Text</td>
                  <td>35</td>
                </tr>
                <tr>
                  <td>007</td>
                  <td>Computer Science</td>
                  <td>2023</td>
                  <td>Text</td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>008</td>
                  <td>Music</td>
                  <td>2023</td>
                  <td>Text</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>009</td>
                  <td>Biology</td>
                  <td>2023</td>
                  <td>Text</td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>010</td>
                  <td>Chemistry</td>
                  <td>2023</td>
                  <td>Text</td>
                  <td>29</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AbcSchool;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-md-2 bg-white border-end d-flex flex-column">
          <div className="text-center py-3">
            <img
              src="Group 2186.png"
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: "100px" }}
            />
          </div>
          <nav className="nav flex-column px-3">
            <a
              className="nav-link active text-primary fw-bold"
              href="#dashboard"
            >
              <img src="Speedometer.png" alt="" />
              Dashboard
            </a>
            <a className="nav-link text-dark" href="#schools">
              <img src="Vector (1).png" alt="" />
              Schools
            </a>
            <a className="nav-link text-dark" href="#plans">
              <img src="Show.png" alt="" />
              Plans
            </a>
            <a className="nav-link text-dark" href="#community">
              <img src="Team.png" alt="" />
              Community
            </a>
            <a className="nav-link text-dark" href="#messages">
              <img src="meeting.png" alt="" />
              Messages
            </a>
          </nav>
        </div>

        <div className="col-md-7 bg-light">
          <div className="d-flex justify-content-between align-items-center p-3">
            <h3>Dashboard</h3>

            <div className="input-group w-25">
              <span className="input-group-text bg-white border-0">
                <img
                  src="Search.png"
                  alt="Search Icon"
                  style={{ width: "20px", height: "20px" }}
                />
              </span>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Search here..."
              />
            </div>
          </div>
          <div className="p-3">
            <div className="bg-white p-4 rounded shadow-sm mb-4">
              <blockquote className="blockquote text-center">
                <img src="moti.png" alt="" />
              </blockquote>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="chart-placeholder">
                <img src="school performance.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 bg-light">
          <img src="notification.png" alt="" />
          <img src="setting.png" alt="" />
          <img
            src="Name.png"
            alt=""
            style={{ width: "60px", height: "60px" }}
          />
          <img src="Placeholder.png" alt="" />
          <div className="p-3">
            <img src="plan.png" alt="" />
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h5>Latest Activity</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-3">
                <p className="mb-1">
                  <strong>Karen Hope</strong> moved task
                  <blockquote className="span">User Research</blockquote> from
                  Progress to Done.
                </p>
                <small className="text-muted">2 March 2021, 13:45 PM</small>
              </li>
              <li className="mb-3">
                <p className="mb-1">
                  <strong>Samantha William</strong> added new 4 attached files
                  on task
                  <blockquote className="span1">Photo's Assets</blockquote>.
                </p>
                <small className="text-muted">2 March 2021, 13:45 PM</small>
              </li>
              <li className="mb-3">
                <p className="mb-1">
                  <strong>Tony Soop</strong> created new class
                  <blockquote className="span1">Wireframing</blockquote>.
                </p>
                <small className="text-muted">2 March 2021, 13:45 PM</small>
              </li>
              <li className="mb-3">
                <p className="mb-1">
                  <strong>Samantha William</strong> Add new student to class
                </p>
                <small className="text-muted">2 March 2021, 13:45 PM</small>
              </li>
              <li className="mb-3">
                <p className="mb-1">
                  <strong>Samantha William</strong> Add new student to class
                </p>
                <small className="text-muted">2 March 2021, 13:45 PM</small>
              </li>
              <li className="mb-3">
                <p className="mb-1">
                  <strong>Samantha William</strong> Add new student to class
                </p>
                <small className="text-muted">2 March 2021, 13:45 PM</small>
              </li>
              <li className="mb-3">
                <p className="mb-1">
                  <strong>Samantha William</strong> Add new student to class
                </p>
                <small className="text-muted">2 March 2021, 13:45 PM</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
} from "recharts";

const data = [
  { month: "Jan", thisWeek: 40, lastWeek: 30 },
  { month: "Feb", thisWeek: 60, lastWeek: 45 },
  { month: "Mar", thisWeek: 80, lastWeek: 55 },
  { month: "Apr", thisWeek: 70, lastWeek: 50 },
  { month: "May", thisWeek: 50, lastWeek: 40 },
  { month: "Jun", thisWeek: 60, lastWeek: 55 },
  { month: "Jul", thisWeek: 90, lastWeek: 70 },
  { month: "Aug", thisWeek: 70, lastWeek: 60 },
  { month: "Sep", thisWeek: 80, lastWeek: 65 },
  { month: "Oct", thisWeek: 100, lastWeek: 85 },
  { month: "Nov", thisWeek: 90, lastWeek: 80 },
  { month: "Dec", thisWeek: 80, lastWeek: 75 },
];

const Dashboard = () => {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
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
                className="me-2 image"
              />
              Dashboard
            </Link>
            <Link
              className="nav-link d-flex align-items-center text-dark"
              to="/schools"
            >
              <img
                src="Vector (1).png"
                alt="Schools Icon"
                className="me-2 image"
              />
              Schools
            </Link>
            <Link
              className="nav-link d-flex align-items-center text-dark"
              to="/plans"
            >
              <img src="Show.png" alt="Plans Icon" className="me-2 image" />
              Plans
            </Link>
            <Link
              className="nav-link d-flex align-items-center text-dark"
              to="/cummunity"
            >
              <img src="Team.png" alt="cummunity Icon" className="me-2 image" />
              cummunity
            </Link>
            <Link
              className="nav-link d-flex align-items-center text-dark"
              to="/messages"
            >
              <img
                src="meeting.png"
                alt="Messages Icon"
                className="me-2 image"
              />
              Messages
            </Link>
          </nav>
        </div>

        <div className="col-md-6 bg-light d-flex flex-column align-items-center">
          <div className="d-flex justify-content-between align-items-center p-3 w-100">
            <h3>Dashboard</h3>
            <div className="input-group w-25">
              <span className="input-group-text bg-white border-0 rounded-start-4">
                <img
                  src="Search.png"
                  alt="Search Icon"
                  style={{ width: "20px", height: "20px" }}
                />
              </span>
              <input
                type="text"
                className="form-control border-0 rounded-end-4 bg-white ps-2"
                placeholder="Search here..."
              />
            </div>
          </div>
          <div className="p-3 w-100">
            <div className="bg-white p-4 rounded shadow-sm mb-4 text-center">
              <blockquote className="blockquote">
                <img src="moti.png" alt="" className="img-fluid" />
              </blockquote>
            </div>
            <div className="bg-white p-4 rounded shadow-sm ">
              <h5 className="text-bold ">Performance</h5>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="lastWeek"
                    fill="rgba(255, 99, 132, 0.3)"
                    stroke="rgba(255, 99, 132, 1)"
                  />
                  <Area
                    type="monotone"
                    dataKey="thisWeek"
                    fill="rgba(54, 162, 235, 0.3)"
                    stroke="rgba(54, 162, 235, 1)"
                  />
                  <Line
                    type="monotone"
                    dataKey="thisWeek"
                    stroke="red"
                    strokeWidth={4}
                  />
                  <Line
                    type="monotone"
                    dataKey="lastWeek"
                    stroke="blue"
                    strokeWidth={4}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-md-3 rounded">
          <div className="d-flex align-items-center justify-content-end gap-2">
            <div className="position-relative ">
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
              <span className="fw-bold ">Nabila.</span>
              <span className="text-muted">Admin</span>
            </div>
            <img
              src="Placeholder.png"
              alt="User Avatar"
              className="rounded-circle "
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#D6CFF7",
              }}
            />
          </div>

          <div className="">
            <img src="plan.png" alt="" className="img-fluid mx-auto d-block" />
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h5 className="text-bold mb-4">Latest Activity</h5>
            <ul className=" list-unstyled">
              <li className="timeline-item mb-4">
                <div className="d-flex align-items-start">
                  <div className="timeline-icon">
                    <img src="Placeholder.png" alt="" />
                  </div>
                  <div>
                    <p className="mb-1 px-3">
                      <strong>Karen Hope</strong> moved task
                      <span className="text-primary">"User Research"</span> from
                      <span className="text-muted">On Progress</span> to Done
                    </p>
                    <small className="text-muted px-3">
                      2 March 2021, 13:45 PM
                    </small>
                  </div>
                </div>
              </li>
              <li className="timeline-item mb-4">
                <div className="d-flex align-items-start">
                  <div className="timeline-icon">
                    <img src="Placeholder.png" alt="" />
                  </div>
                  <div>
                    <p className="mb-1 px-3">
                      <strong>Samantha William</strong> added new 4 attached
                      files on task
                      <span className="text-warning">"Photo's Assets"</span>.
                    </p>
                    <small className="text-muted px-3">
                      2 March 2021, 13:45 PM
                    </small>
                  </div>
                </div>
              </li>
              <li className="timeline-item mb-4">
                <div className="d-flex align-items-start">
                  <div className="timeline-icon">
                    <img src="Placeholder.png" alt="" />
                  </div>
                  <div>
                    <p className="mb-1 px-3">
                      <strong>Tony Soop</strong> created new class{" "}
                      <span className="span">"Wireframing"</span>.
                    </p>
                    <small className="text-muted px-3">
                      2 March 2021, 13:45 PM
                    </small>
                  </div>
                </div>
              </li>
              <li className="timeline-item mb-4">
                <div className="d-flex align-items-start">
                  <div className="timeline-icon">
                    <img src="Placeholder.png" alt="" />
                  </div>
                  <div>
                    <p className="mb-1 px-3">
                      <strong>Samantha William</strong> added a new student to
                      class.
                    </p>
                    <small className="text-muted px-3">
                      2 March 2021, 13:45 PM
                    </small>
                  </div>
                </div>
              </li>
              <li className="timeline-item mb-4">
                <div className="d-flex align-items-start">
                  <div className="timeline-icon">
                    <img src="Placeholder.png" alt="" />
                  </div>
                  <div>
                    <p className="mb-1 px-3">
                      <strong>Samantha William</strong> added a new student to
                      class.
                    </p>
                    <small className="text-muted px-3">
                      2 March 2021, 13:45 PM
                    </small>
                  </div>
                </div>
              </li>
              <li className="timeline-item mb-4">
                <div className="d-flex align-items-start">
                  <div className="timeline-icon">
                    <img src="Placeholder.png" alt="" />
                  </div>
                  <div>
                    <p className="mb-1 px-3 ">
                      <strong>Samantha William</strong> added a new student to
                      class.
                    </p>
                    <small className="text-muted px-3">
                      2 March 2021, 13:45 PM
                    </small>
                  </div>
                </div>
              </li>
              <li className="timeline-item mb-4">
                <div className="d-flex align-items-start">
                  <div className="timeline-icon">
                    <img src="Placeholder.png" alt="" />
                  </div>
                  <div>
                    <p className="mb-1 px-3">
                      <strong>Samantha William</strong> added a new student to
                      class.
                    </p>
                    <small className="text-muted px-3">
                      2 March 2021, 13:45 PM
                    </small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

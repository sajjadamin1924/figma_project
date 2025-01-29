import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaBell, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const Messages = () => {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
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
            <img src="Speedometer.png" alt="Dashboard Icon" className="me-2" />
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

      {/* Chat Section */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Top Bar */}
        <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom bg-light">
          <h1>Chat</h1>
          <div className="input-group w-25 ">
            <span className="input-group-text bg-white border-0 rounded-5 ">
              <img src="Search.png" alt="" />
            </span>
            <input
              type="text"
              className="form-control border-0 rounded-5"
              placeholder="Search here..."
            />
          </div>
          <div className="d-flex align-items-center">
            <img
              src="notification.png"
              alt="Notification"
              style={{ width: "90px", height: "90px" }}
            />
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
        </div>

        {/* Chat Content */}
        <div className="d-flex flex-grow-1">
          {/* Chat List */}
          <div className="p-3 border-end" style={{ width: "300px" }}>
            <h6>Messages between teacher & students</h6>
            <div className="input-group my-2 border-2 rounded-5">
              <span className="input-group-text bg-white">
                <FaSearch />
              </span>
              <input
                type="text"
                className="form-control border-2 rounded-5"
                placeholder="Search here..."
              />
            </div>
            <h4 className="text-muted">chats</h4>
            <div>
              <div className="d-flex align-items-center py-2 border-bottom">
                <div
                  className="rounded-circle"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#D6CFF7",
                  }}
                ></div>
                <div className="ms-2 flex-grow-1">
                  <h6>Samantha / William</h6>
                  <p className="text-muted m-0" style={{ fontSize: "12px" }}>
                    Lorem ipsum dolor sit amet...
                  </p>
                </div>
                <span className="badge bg-danger">2</span>
                <small className="text-muted text-end">12:45 PM</small>
              </div>

              <div className="d-flex align-items-center py-2 border-bottom">
                <div
                  className="rounded-circle"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#D6CFF7",
                  }}
                ></div>
                <div className="ms-2 flex-grow-1">
                  <h6>Tony Soap / Alex</h6>
                  <p className="text-muted m-0" style={{ fontSize: "12px" }}>
                    Lorem ipsum dolor sit amet...
                  </p>
                </div>
                <span className="badge bg-danger">2</span>
                <small className="text-muted text-end">12:45 PM</small>
              </div>

              <div className="d-flex align-items-center py-2 border-bottom">
                <div
                  className="rounded-circle"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#D6CFF7",
                  }}
                ></div>
                <div className="ms-2 flex-grow-1">
                  <h6>Karen / Hope</h6>
                  <p className="text-muted m-0" style={{ fontSize: "12px" }}>
                    Lorem ipsum dolor sit amet...
                  </p>
                </div>

                <small className="text-muted text-end">12:45 PM</small>
              </div>

              <div className="d-flex align-items-center py-2 border-bottom">
                <div
                  className="rounded-circle"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#D6CFF7",
                  }}
                ></div>
                <div className="ms-2 flex-grow-1">
                  <h6>Samantha / William</h6>
                  <p className="text-muted m-0" style={{ fontSize: "12px" }}>
                    Lorem ipsum dolor sit amet...
                  </p>
                </div>
                <span className="badge bg-danger">2</span>
                <small className="text-muted text-end">12:45 PM</small>
              </div>

              <div className="d-flex align-items-center py-2 border-bottom">
                <div
                  className="rounded-circle"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#D6CFF7",
                  }}
                ></div>
                <div className="ms-2 flex-grow-1">
                  <h6>Tony Soap / Alex</h6>
                  <p className="text-muted m-0" style={{ fontSize: "12px" }}>
                    Lorem ipsum dolor sit amet...
                  </p>
                </div>
                <span className="badge bg-danger">2</span>
                <small className="text-muted text-end">12:45 PM</small>
              </div>

              <div className="d-flex align-items-center py-2 border-bottom">
                <div
                  className="rounded-circle"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#D6CFF7",
                  }}
                ></div>
                <div className="ms-2 flex-grow-1">
                  <h6>Karen / Hope</h6>
                  <p className="text-muted m-0" style={{ fontSize: "12px" }}>
                    Lorem ipsum dolor sit amet...
                  </p>
                </div>

                <small className="text-muted text-end">12:45 PM</small>
              </div>
              <div className="text-center">
                <button className="mt-4 border-0 backup  py-1 rounded-5 w-100">
                  View More
                </button>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-grow-1 d-flex flex-column p-3">
            <h6 className="fw-bold">
              Samantha / William <span className="text-success">● Online</span>
            </h6>
            <div className="flex-grow-1 d-flex flex-column justify-content-start">
              <div className="mb-2 align-self-start bg-light px-3 py-2 rounded">
                Hello Nabila!
              </div>
              <div className="mb-2 align-self-start bg-light px-3 py-2 rounded">
                Can I see your history lesson homework?
              </div>
              <div className="mb-2 align-self-end background text-white px-3 py-2 rounded">
                Hello Samantha!
              </div>
              <div className="mb-2 align-self-end background text-white px-3 py-2 rounded">
                I'm not finished yet, why don’t we work together to finish
                homework?
              </div>
            </div>
            <small className="text-muted text-end">12:45 PM</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;

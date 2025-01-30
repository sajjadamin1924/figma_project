import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

const Community = () => {
  return (
    <div className="d-flex">
      <div className="col-md-3 bg-white border-end d-flex flex-column p-3">
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
            Cummunity
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

      {/* Main Content */}
      <div className="flex-grow-1 p-4 ">
        <h3 className="fw-bold">Community</h3>
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <input
            type="text"
            className="form-control w-25 rounded-5"
            placeholder="Search here..."
          />
          <button className="text-white border-0 rounded-pill px-3 py-2 button">
            + New Post
          </button>
        </div>

        <div className="card mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <img
                src="m4.png"
                className="rounded-circle me-2"
                width="40"
                alt="User"
              />
              <strong>Joel Rubio</strong>
              <span className="text-muted px-4">2h ago</span>
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className="ms-auto cursor-pointer"
                style={{ fontSize: "20px" }}
              />
            </div>
            <h3 className="mt-2">Lorem Ipsum is simply dummy text.</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standad dummy text
              ever since the 1500s
            </p>
            <div className="d-flex justify-content-end">
              <div>
                <FontAwesomeIcon icon={faThumbsUp} className="me-4" />
                <span className="me-2">3</span>
                <FontAwesomeIcon icon={faThumbsDown} className="me-4" />
                <FontAwesomeIcon icon={faMessage} />
                <span className="ms-2">3</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <img
                src="m3.png"
                className="rounded-circle me-2"
                width="40"
                alt="User"
              />
              <strong>Sterling Davis</strong>
              <span className="text-muted px-4">2h ago</span>
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className="ms-auto cursor-pointer"
                style={{ fontSize: "20px" }}
              />
            </div>
            <h3 className="mt-2">Lorem Ipsum is simply dummy text.</h3>
            <img
              src="video.png"
              className="img-fluid rounded mb-2"
              alt="Post"
            />
            <div className="d-flex justify-content-end">
              <div>
                <FontAwesomeIcon icon={faThumbsUp} className="me-4" />
                <span className="me-2">3</span>
                <FontAwesomeIcon icon={faThumbsDown} className="me-4" />
                <FontAwesomeIcon icon={faMessage} />{" "}
                <span className="ms-2">3</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <img
                src="m3.png"
                className="rounded-circle me-2"
                width="40"
                alt="User"
              />
              <strong>Sterling Davis</strong>{" "}
              <span className="text-muted px-4">2h ago</span>
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className="ms-auto cursor-pointer"
                style={{ fontSize: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3 p-3 bg-white">
        <div className="messages-container p-3">
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold mb-2">Recent Students</h5>

            <button className=" text-white border-0 rounded-pill px-3 py-2 button">
              +
            </button>
          </div>
          <p className="text-muted">you have 456 students</p>
          <ul className="list-group">
            <li className="list-group-item border-0 d-flex align-items-center justify-content-between px-0">
              <div className="d-flex align-items-center">
                <img
                  src="4.png"
                  className="rounded-circle me-2"
                  width="40"
                  alt="Student"
                />
                <div>
                  <span className="fw-bold text-primary text-top">
                    Samantha William
                  </span>
                </div>
              </div>
              <div className="text-end">
                <div className="icon-circle">
                  <FontAwesomeIcon icon={faEnvelope} className="icon1" />
                </div>
              </div>
            </li>

            <li className="list-group-item border-0 d-flex align-items-center justify-content-between px-0">
              <div className="d-flex align-items-center">
                <img
                  src="4.png"
                  className="rounded-circle me-2"
                  width="40"
                  alt="Student"
                />
                <div>
                  <span className="fw-bold text-primary">Tony Soap</span>
                </div>
              </div>
              <div className="text-end">
                <div className="icon-circle">
                  <FontAwesomeIcon icon={faEnvelope} className="icon1" />
                </div>
              </div>
            </li>
            <li className="list-group-item border-0 d-flex align-items-center justify-content-between px-0">
              <div className="d-flex align-items-center">
                <img
                  src="4.png"
                  className="rounded-circle me-2"
                  width="40"
                  alt="Student"
                />
                <div>
                  <span className="fw-bold text-primary text-top">
                    Karen Hope
                  </span>
                </div>
              </div>
              <div className="text-end">
                <div className="icon-circle">
                  <FontAwesomeIcon icon={faEnvelope} className="icon1" />
                </div>
              </div>
            </li>

            <li className="list-group-item border-0 d-flex align-items-center justify-content-between px-0">
              <div className="d-flex align-items-center">
                <img
                  src="4.png"
                  className="rounded-circle me-2"
                  width="40"
                  alt="Student"
                />
                <div>
                  <span className="fw-bold text-primary">Jordan Nico</span>
                </div>
              </div>
              <div className="text-end">
                <div className="icon-circle">
                  <FontAwesomeIcon icon={faEnvelope} className="icon1" />
                </div>
              </div>
            </li>

            <li className="list-group-item border-0 d-flex align-items-center justify-content-between px-0">
              <div className="d-flex align-items-center">
                <img
                  src="4.png"
                  className="rounded-circle me-2"
                  width="40"
                  alt="Student"
                />
                <div>
                  <span className="fw-bold text-primary">Nadika Adja</span>
                </div>
              </div>
              <div className="text-end">
                <div className="icon-circle">
                  <FontAwesomeIcon icon={faEnvelope} className="icon1" />
                </div>
              </div>
            </li>
          </ul>
          <button className="backup p-2 border-0 rounded-5 w-100">
            View More
          </button>
        </div>

        <div className="messages-container p-3">
          <h5 className="fw-bold mb-3">Messages</h5>
          <ul className="list-group">
            <li className="list-group-item border-0 d-flex align-items-center justify-content-between px-0">
              <div className="d-flex align-items-center">
                <img
                  src="4.png"
                  className="rounded-circle me-2"
                  width="40"
                  alt="Student"
                />
                <div>
                  <span className="fw-bold text-primary">Samantha William</span>
                  <p className="mb-0 text-muted small">
                    Lorem ipsum dolor sit amet...
                  </p>
                </div>
              </div>
              <div className="text-end">
                <span className="text-muted small">12:45 PM</span>
              </div>
            </li>

            <li className="list-group-item border-0 d-flex align-items-center justify-content-between px-0">
              <div className="d-flex align-items-center">
                <img
                  src="4.png"
                  className="rounded-circle me-2"
                  width="40"
                  alt="Student"
                />
                <div>
                  <span className="fw-bold text-primary">Tony Soap</span>
                  <p className="mb-0 text-muted small">
                    Lorem ipsum dolor sit amet...
                  </p>
                </div>
              </div>
              <div className="text-end">
                <span className="text-muted small">12:45 PM</span>
              </div>
            </li>

            <li className="list-group-item border-0 d-flex align-items-center justify-content-between px-0">
              <div className="d-flex align-items-center">
                <img
                  src="4.png"
                  className="rounded-circle me-2"
                  width="40"
                  alt="Student"
                />
                <div>
                  <span className="fw-bold text-primary">Jordan Nico</span>
                  <p className="mb-0 text-muted small">
                    Lorem ipsum dolor sit amet...
                  </p>
                </div>
              </div>
              <div className="text-end">
                <span className="text-muted small">12:45 PM</span>
              </div>
            </li>

            <li className="list-group-item border-0 d-flex align-items-center justify-content-between px-0">
              <div className="d-flex align-items-center">
                <img
                  src="4.png"
                  className="rounded-circle me-2"
                  width="40"
                  alt="Student"
                />
                <div>
                  <span className="fw-bold text-primary">Nadika Adja</span>
                  <p className="mb-0 text-muted small">
                    Lorem ipsum dolor sit amet...
                  </p>
                </div>
              </div>
              <div className="text-end">
                <span className="text-muted small">12:45 PM</span>
              </div>
            </li>
          </ul>
          <button className="backup p-2 border-0 rounded-5 w-100">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;

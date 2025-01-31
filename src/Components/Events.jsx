import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";

const Events = () => {
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState(2021);

  const daysInMonth = new Date(year, new Date().getMonth() + 1, 0).getDate();
  const firstDay = new Date(year, new Date().getMonth(), 1).getDay();
  const weeks = [];

  let currentDay = 1;
  for (let i = 0; i < 6; i++) {
    let week = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDay) || currentDay > daysInMonth) {
        week.push(null);
      } else {
        week.push(currentDay);
        currentDay++;
      }
    }
    weeks.push(week);
  }
  return (
    <div className="d-flex bg-light">
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

      <div className="flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-center gap-2">
          <h2 className="fw-bold">Schools/Events</h2>
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
        <div className="card mb-4">
          <img className="img-fluid" src="cover.png" alt="cover" />
          <div
            className="profile-picture rounded-circle 
             position-absolute avatar "
          ></div>
          <div className="card-body d-flex align-items-center">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <div className="px-4">
                <h5 className="fw-bold">Abc School</h5>
                <p className="mb-0">
                  <i className="bi bi-geo-alt-fill me-1"></i> Jakarta, Indonesia
                </p>
              </div>

              <div className="d-flex flex-column align-items-center text-center mx-3">
                <span className="fw-bold text-muted">Phone</span>
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle bg-orange d-flex justify-content-center align-items-center me-2"
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#FF7043",
                    }}
                  >
                    <i className="bi bi-telephone text-white"></i>
                  </div>
                  <span className="fw-bold">+12 345 6789 0</span>
                </div>
              </div>

              <div className="d-flex flex-column align-items-center text-center">
                <span className="fw-bold text-muted">Email</span>
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle bg-orange d-flex justify-content-center align-items-center me-2"
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#FF7043",
                    }}
                  >
                    <i className="bi bi-envelope text-white"></i>
                  </div>
                  <span className="fw-bold">jordan@mail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <h4>Overview</h4>
          <div className="col-md-3">
            <div className="card ">
              <div className="card-body">
                <h6 className="text-muted">Total Classes</h6>
                <h4>45</h4>
                <p className="text-danger">
                  <i className="bi bi-caret-down-fill"></i>100%
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
                  <i className="bi bi-caret-up-fill"></i>11%
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card ">
              <div className="card-body">
                <h6 className="text-muted">Total Students</h6>
                <h4>5</h4>
                <p className="text-success">
                  <i className="bi bi-caret-up-fill"></i>11%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link to="/classes" className="nav-link">
                Classes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/students" className="nav-link">
                Students
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/teachers" className="nav-link">
                Teachers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/parents" className="nav-link">
                Parents
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-link">
                Events
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex col-md-12" style={{ gap: "10px" }}>
          <div className="col-md-9 ">
            <Container className="calendar-container p-4 rounded shadow">
              <Row className="mb-3 d-flex justify-content-between align-items-center">
                <Col xs="auto">
                  <h3 className="fw-bold">Calendar</h3>
                </Col>
                <Col xs="auto" className="d-flex">
                  <Dropdown onSelect={(e) => setMonth(e)}>
                    <Dropdown.Toggle variant="outline-primary">
                      {month}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {["January", "February", "March", "April", "May"].map(
                        (m) => (
                          <Dropdown.Item eventKey={m} key={m}>
                            {m}
                          </Dropdown.Item>
                        )
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown onSelect={(e) => setYear(e)} className="ms-2">
                    <Dropdown.Toggle variant="outline-primary">
                      {year}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {[2021, 2022, 2023, 2024].map((y) => (
                        <Dropdown.Item eventKey={y} key={y}>
                          {y}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col xs="auto">
                  <Button variant="primary" className="rounded-pill px-4">
                    + New Event
                  </Button>
                </Col>
              </Row>
              <Row className="text-center fw-bold">
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day) => (
                  <Col
                    key={day}
                    className="border py-2 text-uppercase small text-muted"
                  >
                    {day}
                  </Col>
                ))}
              </Row>
              {weeks.map((week, i) => (
                <Row key={i} className="text-center">
                  {week.map((day, j) => (
                    <Col
                      key={j}
                      className={`border py-3 ${
                        day ? "date-cell rounded position-relative" : "bg-light"
                      }`}
                    >
                      {day && <span className="fw-bold">{day}</span>}
                    </Col>
                  ))}
                </Row>
              ))}
            </Container>
          </div>
          <div className="col-md-3">
            <div className="col">
              <div className="card w-100 position-relative px-2">
                <div className="card-body text-start">
                  <h4 className="card-text">Schedule Details</h4>
                  <p className="text-muted">Thursday, 10th april, 2021</p>
                </div>
              </div>
            </div>
            <div className="col py-2">
              <div className="card w-100 position-relative">
                <div className="card-body text-start">
                  <h4 className="card-text">Basic Algorithm</h4>
                  <p className="text-muted">Algorithm</p>
                  <p className="text-muted">March,20,2021</p>
                  <p className="text-muted">09.00 - 10.00 AM</p>
                </div>
              </div>
            </div>
            <div className="col py-2">
              <div className="card w-100 position-relative">
                <div className="card-body text-start">
                  <h4 className="card-text">Basic Art</h4>
                  <p className="text-muted">Art</p>
                  <p className="text-muted">March,20,2021</p>
                  <p className="text-muted">09.00 - 10.00 AM</p>
                </div>
              </div>
            </div>
            <div className="col py-2">
              <div className="card w-100 position-relative">
                <div className="card-body text-start">
                  <h4 className="card-text">HTML & CSS Class</h4>
                  <p className="text-muted">Programming</p>
                  <p className="text-muted">March,20,2021</p>
                  <p className="text-muted">09.00 - 10.00 AM</p>
                </div>
              </div>
            </div>
            <div className="col py-2">
              <div className="card w-100 position-relative">
                <div className="card-body text-start">
                  <h4 className="card-text">Parents and Teachers Meeting</h4>
                  <p className="text-muted">March,20,2021</p>
                  <p className="text-muted">09.00 - 10.00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

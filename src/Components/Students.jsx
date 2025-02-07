import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Students = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Addnewstudent");
  };
  return (
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
            <img src="meeting.png" alt="Messages Icon" className="me-2 image" />
            Messages
          </Link>
        </nav>
      </div>

      <div className="flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-center gap-2">
          <h2 className="fw-bold">Schools/Student</h2>
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

        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
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

              <div className="d-flex gap-3">
                <button
                  style={{
                    width: "150px",
                    height: "40px",
                    border: "1px solid blue",
                  }}
                  className="btn-1"
                >
                  Newest
                  <FontAwesomeIcon icon={faSortDown} />
                </button>
                <button
                  style={{ width: "150px", height: "40px" }}
                  className="btn-2"
                  onClick={handleClick}
                >
                  <FontAwesomeIcon icon={faPlus} />
                  New Student
                </button>
              </div>
            </div>

            <table className="table mt-3">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Parent Name</th>
                  <th>Contact</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img
                      src="6.png"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                    Samantha William
                  </td>
                  <td>#123456789</td>
                  <td>March 25, 2021</td>
                  <td>Mana William</td>
                  <td>
                    <span
                      className="bg-light text-primary rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-telephone"></i>
                    </span>
                    <span
                      className="bg-light text-primary rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-envelope"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img
                      src="1 (1).png"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                    Tony Soap
                  </td>
                  <td>#123456789</td>
                  <td>March 25, 2021</td>
                  <td>James Soap</td>
                  <td>
                    <span
                      className="bg-light text-primary rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-telephone"></i>
                    </span>
                    <span
                      className="bg-light text-primary rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-envelope"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img
                      src="2.png"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                    Karen Hope
                  </td>
                  <td>#123456789</td>
                  <td>March 25, 2021</td>
                  <td>Justin Hope</td>
                  <td>
                    <span
                      className="bg-light text-primary rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-telephone"></i>
                    </span>
                    <span
                      className="bg-light text-primary rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-envelope"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img
                      src="3.png"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                    Jordan Nico
                  </td>
                  <td>#123456789</td>
                  <td>March 25, 2021</td>
                  <td>Amanda Nico</td>
                  <td>
                    <span
                      className="bg-light text-primary rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-telephone"></i>
                    </span>
                    <span
                      className="bg-light text-primary rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-envelope"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img
                      src="4.png"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                    Nadila Adja
                  </td>
                  <td>#123456789</td>
                  <td>March 25, 2021</td>
                  <td>Jack Adja</td>
                  <td>
                    <span
                      className="bg-light text-primary rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-telephone"></i>
                    </span>
                    <span
                      className="bg-light text-primary rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-envelope"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img
                      src="1 (1).png"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                    Johnny Ahmad
                  </td>
                  <td>#123456789</td>
                  <td>March 25, 2021</td>
                  <td>Danny Ahmad</td>
                  <td>
                    <span
                      className="bg-light text-primary rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-telephone"></i>
                    </span>
                    <span
                      className="bg-light text-primary rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-envelope"></i>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="d-flex justify-content-between align-items-center">
              <p>Showing 1-6 from 100 data</p>
              <nav>
                <ul className="pagination mb-0">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;

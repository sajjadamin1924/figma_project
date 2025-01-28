import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Parents = () => {
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
              <a href="#" className="nav-link ">
                Classes
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link ">
                Students
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link ">
                Teachers
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active">
                Parents
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Events
              </a>
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="input-group w-25 ">
                <span className="input-group-text bg-white border-0">
                  <img
                    src="Search.png"
                    alt="Search Icon"
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "10px",
                    }}
                  />
                </span>
                <input
                  type="text"
                  className="form-control border-0 bg-light"
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
                >
                  <FontAwesomeIcon icon={faPlus} />
                  New Teacher
                </button>
              </div>
            </div>
            <div className="bg-light d-flex flex-column pt-5">
  <div className="row g-4 row-cols-1 row-cols-md-4">
                <div className="col">
                  <div className="card w-100 position-relative">
                    <div className="position-absolute top-0 end-0 p-2">
                    <button className="btn btn-link">
                        <i className="bi bi-three-dots"></i>
                      </button>
                    </div>
                    <img
                      src="m1.png"
                      style={{ width: "90px", height: "90px" }}
                      className="card-img-top rounded-circle mx-auto d-block mt-2"
                      alt="Avatar"
                    />
                    <div className="card-body text-center">
                      <h4 className="card-text">Dimiteres Viga</h4>
                      <p>Mathematics</p>
                      <div className="d-flex justify-content-center gap-3">
                        <button
                          className="btn btn-link p-2"
                          style={{
                            backgroundColor: "blue",
                            color: "white",
                            borderRadius: "50%",
                          }}
                        >
                          <i className="bi bi-telephone"></i>
                        </button>
                        <button
                          className="btn btn-link p-2"
                          style={{
                            backgroundColor: "blue",
                            color: "white",
                            borderRadius: "50%",
                          }}
                        >
                          <i className="bi bi-envelope"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card w-100 position-relative">
                    <div className="position-absolute top-0 end-0 p-2">
                      <button className="btn btn-link">
                        <i className="bi bi-three-dots"></i>
                      </button>
                    </div>
                    <img
                      src="m2.png"
                      style={{ width: "90px", height: "90px" }}
                      className="card-img-top rounded-circle mx-auto d-block mt-2"
                      alt="Avatar"
                    />
                    <div className="card-body text-center">
                      <h4 className="card-text">Tom Housenburg</h4>
                      <p>Science</p>
                      <div className="d-flex justify-content-center gap-3">
                        <button
                          className="btn btn-link p-2"
                          style={{
                            backgroundColor: "blue",
                            color: "white",
                            borderRadius: "50%",
                          }}
                        >
                          <i className="bi bi-telephone"></i>
                        </button>
                        <button
                          className="btn btn-link p-2"
                          style={{
                            backgroundColor: "blue",
                            color: "white",
                            borderRadius: "50%",
                          }}
                        >
                          <i className="bi bi-envelope"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card w-100 position-relative">
                    <div className="position-absolute top-0 end-0 p-2">
                      <button className="btn btn-link">
                        <i className="bi bi-three-dots"></i>
                      </button>
                    </div>
                    <img
                      src="m3.png"
                      style={{ width: "90px", height: "90px" }}
                      className="card-img-top rounded-circle mx-auto d-block mt-2"
                      alt="Avatar"
                    />
                    <div className="card-body text-center">
                      <h4 className="card-text">Dana benevista</h4>
                      <p>Art</p>
                      <div className="d-flex justify-content-center gap-3">
                        <button
                          className="btn btn-link p-2"
                          style={{
                            backgroundColor: "blue",
                            color: "white",
                            borderRadius: "50%",
                          }}
                        >
                          <i className="bi bi-telephone"></i>
                        </button>
                        <button
                          className="btn btn-link p-2"
                          style={{
                            backgroundColor: "blue",
                            color: "white",
                            borderRadius: "50%",
                          }}
                        >
                          <i className="bi bi-envelope"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card w-100 position-relative">
                    <div className="position-absolute top-0 end-0 p-2">
                      <button className="btn btn-link">
                        <i className="bi bi-three-dots"></i>
                      </button>
                    </div>
                    <img
                      src="m4.png"
                      style={{ width: "90px", height: "90px" }}
                      className="card-img-top rounded-circle mx-auto d-block mt-2"
                      alt="Avatar"
                    />
                    <div className="card-body text-center">
                    <h4 className="card-text">Soldavore Morebeau</h4>
                    <p>Biology</p>
                      <div className="d-flex justify-content-center gap-3">
                        <button
                          className="btn btn-link p-2"
                          style={{
                            backgroundColor: "blue",
                            color: "white",
                            borderRadius: "50%",
                          }}
                        >
                          <i className="bi bi-telephone"></i>
                        </button>
                        <button
                          className="btn btn-link p-2"
                          style={{
                            backgroundColor: "blue",
                            color: "white",
                            borderRadius: "50%",
                          }}
                        >
                          <i className="bi bi-envelope"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parents;

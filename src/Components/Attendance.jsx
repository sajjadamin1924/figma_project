import React from "react";

import { Link } from "react-router-dom";

const Attendance = () => {
  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row h-100">
          <div className="col-md-3 bg-white border-end d-flex flex-column px-0">
            <div className="text-center py-3 p-5 d-flex">
              <img
                src="image 1.png"
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
                <img
                  src="Team.png"
                  alt="cummunity Icon"
                  className="me-2 image"
                />
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

          <div className="col-md-9 bg-light px-4 d-flex flex-column ">
            <div className="d-flex justify-content-between align-items-center p-3">
              <h3>Studentdetails</h3>
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
            </div>
            <div className="d-flex">
              <div className="col-md-9">
                <div className="card mb-4">
                  <img
                    className="img-fluid w-100 mb-4"
                    src="cover1.png"
                    alt="cover"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="profile-picture rounded-circle position-absolute avatar">
                    <img src="prof.png" alt="prof" />
                  </div>
                  <div class="px-4">
                    <h4 className="mt-4 px-4">KarenHope</h4>
                    <p className="mt-2 px-4">Student</p>
                  </div>

                  <div className="card-body d-flex align-items-center">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <div className="px-4">
                        <p className="text-muted px-0">Parents:</p>
                        <p className="fw-bold d-flex align-items-center">
                          <div
                            className="rounded-circle d-flex justify-content-center align-items-center me-2"
                            style={{
                              width: "32px",
                              height: "32px",
                              backgroundColor: "#007bff",
                              color: "white",
                            }}
                          >
                            <i className="bi bi-person"></i>
                          </div>
                          Justin Hope
                        </p>
                      </div>

                      <div className="px-4">
                        <p className="text-muted px-0">Address:</p>
                        <p className="fw-bold d-flex align-items-center">
                          <div
                            className="rounded-circle d-flex justify-content-center align-items-center me-2"
                            style={{
                              width: "32px",
                              height: "32px",
                              backgroundColor: "#007bff",
                              color: "white",
                            }}
                          >
                            <i className="bi bi-geo-alt-fill"></i>
                          </div>
                          Jakarta, Indonesia
                        </p>
                      </div>

                      <div className="px-4">
                        <p className="text-muted px-0">Phone:</p>
                        <p className="fw-bold d-flex align-items-center">
                          <div
                            className="rounded-circle d-flex justify-content-center align-items-center me-2"
                            style={{
                              width: "32px",
                              height: "32px",
                              backgroundColor: "#007bff",
                              color: "white",
                            }}
                          >
                            <i className="bi bi-telephone"></i>
                          </div>
                          +12 345 6789 0
                        </p>
                      </div>

                      <div className="px-4">
                        <p className="text-muted px-0">Email:</p>
                        <p className="fw-bold d-flex align-items-center">
                          <div
                            className="rounded-circle d-flex justify-content-center align-items-center me-2"
                            style={{
                              width: "32px",
                              height: "32px",
                              backgroundColor: "#007bff",
                              color: "white",
                            }}
                          >
                            <i className="bi bi-envelope"></i>
                          </div>
                          Hope@mail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card p-4">
                  <h4>Academics History</h4>
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <Link className="nav-link active" to="#">
                        Assignments
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        Quizzes
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        Exam Report
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        Files
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        Attendance
                      </Link>
                    </li>
                  </ul>
                  <div className="row mt-3">
                    {[...Array(4)].map((_, index) => (
                      <div className="col-md-3" key={index}>
                        <div className="card p-3 shadow-sm position-relative d-flex flex-column">
                          <span className="badge fw-bold text-danger">
                            Pending
                          </span>
                          <p>Till 09:30 PM</p>
                          <h4>Complete the question</h4>
                          <p>
                            There are lots of times in life you may need to wear
                            a tie. This is a skill that once mastered{" "}
                          </p>
                          <img
                            src="card.png"
                            alt=""
                            className=""
                            style={{ width: "50px" }}
                          />

                          <p>Mathematics</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 d-flex justify-content-between align-items-center">
                  <p>Showing 1 to 5 from 100 data</p>
                  <nav aria-label="Page navigation example">
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
                        <a
                          className="page-link rounded-pill px-3 py-2"
                          href="#"
                        >
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link rounded-pill px-3 py-2"
                          href="#"
                        >
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

              <div className="d-flex col-md-3 rounded">
                <div className="bg-white rounded px-4  shadow-sm">
                  <div class="card px-4 rounded-4 ">
                    <h5 className="text-primary">Class joined</h5>
                    <p className="text-muted" style={{ fontSize: "12px" }}>
                      Thursday,10th april,2021
                    </p>
                  </div>
                  <div
                    className="card rounded-4 px-4 mt-4 d-flex flex-column position-relative overflow-hidden"
                    style={{ background: "#4D44B5" }}
                  >
                    <h5 className="text-white">Mathematics</h5>
                    <p className="text-white" style={{ fontSize: "12px" }}>
                      Welcome to Physics! I'm looking forward to using ISOAS to
                      share updates, notes, and more.
                    </p>
                    <div className="d-flex justify-content-end align-items-end position-absolute bottom-0 end-0">
                      <img
                        src="join.png"
                        alt=""
                        className="img-fluid"
                        style={{
                          width: "164px",
                          height: "105px",
                          objectFit: "cover",
                          zIndex: "2",
                        }}
                      />
                      <img
                        src="student.png"
                        alt="Profile"
                        className="rounded-circle border justify-content-end align-items-end position-absolute"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          zIndex: "2",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className="card rounded-4  px-4 mt-4 d-flex flex-column position-relative"
                    style={{
                      background:
                        "linear-gradient(to right, #5028c6 5%, #ffffff 5%)",
                    }}
                  >
                    <h5 className="text-primary">Mathematics</h5>
                    <p className="text-muted" style={{ fontSize: "12px" }}>
                      Welcome to Physics! I'm looking forward to using ISOAS to
                      share updates, notes, and more.
                    </p>
                    <div className="d-flex justify-content-end align-items-end position-absolute bottom-0 end-0">
                      <img
                        src="join.png"
                        alt=""
                        className="img-fluid"
                        style={{
                          width: "164px",
                          height: "105px",
                          objectFit: "cover",
                          zIndex: "2",
                        }}
                      />
                      <img
                        src="student.png"
                        alt="Profile"
                        className="rounded-circle border justify-content-end align-items-end position-absolute"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          zIndex: "2",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className="card rounded-4 px-4 mt-4 d-flex flex-column position-relative"
                    style={{
                      background:
                        "linear-gradient(to right,#FB7D5B 5%, #ffffff 5%)",
                    }}
                  >
                    <h5 className="text-primary">Arts</h5>
                    <p className="text-muted" style={{ fontSize: "12px" }}>
                      Welcome to Physics! I'm looking forward to using ISOAS to
                      share updates, notes, and more.
                    </p>
                    <div className="d-flex justify-content-end align-items-end position-absolute bottom-0 end-0">
                      <img
                        src="join.png"
                        alt=""
                        className="img-fluid"
                        style={{
                          width: "164px",
                          height: "105px",
                          objectFit: "cover",
                          zIndex: "2",
                        }}
                      />
                      <img
                        src="student.png"
                        alt="Profile"
                        className="rounded-circle border justify-content-end align-items-end position-absolute"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          zIndex: "2",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className="card rounded-4  px-4 mt-4 d-flex flex-column position-relative"
                    style={{
                      background:
                        "linear-gradient(to right, #FCC43E 5%, #ffffff 5%)",
                    }}
                  >
                    <h5 className="text-primary">English</h5>
                    <p className="text-muted" style={{ fontSize: "12px" }}>
                      Welcome to Physics! I'm looking forward to using ISOAS to
                      share updates, notes, and more.
                    </p>
                    <div className="d-flex justify-content-end align-items-end position-absolute bottom-0 end-0">
                      <img
                        src="join.png"
                        alt=""
                        className="img-fluid"
                        style={{
                          width: "164px",
                          height: "105px",
                          objectFit: "cover",
                          zIndex: "2",
                        }}
                      />
                      <img
                        src="student.png"
                        alt="Profile"
                        className="rounded-circle border justify-content-end align-items-end position-absolute"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          zIndex: "2",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className="card rounded-4  px-4 mt-4  d-flex flex-column position-relative"
                    style={{
                      background:
                        "linear-gradient(to right,#303972 5%, #ffffff 5%)",
                    }}
                  >
                    <h5 className="text-primary">Physics</h5>
                    <p className="text-muted" style={{ fontSize: "12px" }}>
                      Welcome to Physics! I'm looking forward to using ISOAS to
                      share updates, notes, and more.
                    </p>
                    <div className="d-flex justify-content-end align-items-end position-absolute bottom-0 end-0">
                      <img
                        src="join.png"
                        alt=""
                        className="img-fluid"
                        style={{
                          width: "164px",
                          height: "105px",
                          objectFit: "cover",
                          zIndex: "2",
                        }}
                      />
                      <img
                        src="student.png"
                        alt="Profile"
                        className="rounded-circle border justify-content-end align-items-end position-absolute"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          zIndex: "2",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studentdetails;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Studentdetails = () => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/Abcschool");
  // };
  return (
    <div>
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

          <div className="col-md-6 bg-light d-flex flex-column ">
            <div className="d-flex justify-content-between align-items-center p-3 w-100">
              <h3>Studentdetails</h3>
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
            <div className="d-flex justify-content-between align-items-center"></div>
            <div className="bg-light d-flex flex-column pt-5">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card w-100 position-relative">
                    <div className="position-absolute top-0 end-0 p-2">
                      <button className="btn btn-link">
                        <i className="bi bi-three-dots"></i>
                      </button>
                    </div>
                    <img
                      src="Mask group.png"
                      style={{ width: "90px", height: "90px" }}
                      className="card-img-top rounded-circle mx-auto d-block mt-2"
                      alt="Avatar"
                    />
                    <div className="card-body text-center">
                      <p className="card-text">Abc School</p>
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
                      src="698271.png"
                      style={{ width: "90px", height: "90px" }}
                      className="card-img-top rounded-circle mx-auto d-block mt-2"
                      alt="Avatar"
                    />
                    <div className="card-body text-center">
                      <p className="card-text">Abc School</p>
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
                      src="image 5.png"
                      style={{ width: "90px", height: "90px" }}
                      className="card-img-top rounded-circle mx-auto d-block mt-2"
                      alt="Avatar"
                    />
                    <div className="card-body text-center">
                      <p className="card-text">ABC School</p>
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
                      src="Mask group.png"
                      style={{ width: "90px", height: "90px" }}
                      className="card-img-top rounded-circle mx-auto d-block mt-2"
                      alt="Avatar"
                    />
                    <div className="card-body text-center">
                      <p className="card-text">Abc School</p>
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
                      src="698271.png"
                      style={{ width: "90px", height: "90px" }}
                      className="card-img-top rounded-circle mx-auto d-block mt-2"
                      alt="Avatar"
                    />
                    <div className="card-body text-center">
                      <p className="card-text">Abc School</p>
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
                      src="image 5.png"
                      style={{ width: "90px", height: "90px" }}
                      className="card-img-top rounded-circle mx-auto d-block mt-2"
                      alt="Avatar"
                    />
                    <div className="card-body text-center">
                      <p className="card-text">ABC School</p>
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
                      src="Mask group.png"
                      style={{ width: "90px", height: "90px" }}
                      className="card-img-top rounded-circle mx-auto d-block mt-2"
                      alt="Avatar"
                    />
                    <div className="card-body text-center">
                      <p className="card-text">Abc School</p>
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
                      src="698271.png"
                      style={{ width: "90px", height: "90px" }}
                      className="card-img-top rounded-circle mx-auto d-block mt-2"
                      alt="Avatar"
                    />
                    <div className="card-body text-center">
                      <p className="card-text">Abc School</p>
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
                      src="image 5.png"
                      style={{ width: "90px", height: "90px" }}
                      className="card-img-top rounded-circle mx-auto d-block mt-2"
                      alt="Avatar"
                    />
                    <div className="card-body text-center">
                      <p className="card-text">ABC School</p>
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
                        <span className="text-primary">
                          "User Research"
                        </span>{" "}
                        from
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
    </div>
  );
};

export default Studentdetails;

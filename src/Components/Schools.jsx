import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSortDown } from "@fortawesome/free-solid-svg-icons";

const Schools = () => {
  return (
    <div>
      <div className="container-fluid vh-100">
        <div className="row h-100">
          <div className="col-md-3 bg-white border-end d-flex flex-column px-0">
            <div className="text-center py-3">
              <img
                src="Group 2186.png"
                alt="Logo"
                className="img-fluid"
                style={{ maxWidth: "100px" }}
              />
            </div>
            <nav className="nav flex flex-column align-items-start">
              <a
                className="nav-link d-flex align-items-center text-dark"
                href="#dashboard"
              >
                <img
                  src="Speedometer.png"
                  alt="Dashboard Icon"
                  className="me-2"
                />
                Dashboard
              </a>
              <a
                className="nav-link d-flex align-items-center text-dark"
                href="#schools"
              >
                <img src="Vector (1).png" alt="Schools Icon" className="me-2" />
                Schools
              </a>
              <a
                className="nav-link d-flex align-items-center text-dark"
                href="#plans"
              >
                <img src="Show.png" alt="Plans Icon" className="me-2" />
                Plans
              </a>
              <a
                className="nav-link d-flex align-items-center text-dark"
                href="#community"
              >
                <img src="Team.png" alt="Community Icon" className="me-2" />
                Community
              </a>
              <a
                className="nav-link d-flex align-items-center text-dark"
                href="#messages"
              >
                <img src="meeting.png" alt="Messages Icon" className="me-2" />
                Messages
              </a>
            </nav>
          </div>

          <div className="col-md-6 bg-light d-flex flex-column ">
            <div className="d-flex justify-content-between align-items-center p-3 w-100">
              <h3>Schools</h3>
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
            <div className="d-flex justify-content-between align-items-center">
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

              <div className="d-flex gap-3">
                <button
                  style={{ width: "150px", height: "40px" }}
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
                  School
                </button>
              </div>
            </div>
            <div>
              
            </div>
          </div>

          <div className="col-md-3 rounded">
            <div className="d-flex align-items-center justify-content-center gap-4">
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

export default Schools;

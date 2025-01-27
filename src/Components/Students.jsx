import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone, FaEnvelope, FaTrashAlt } from "react-icons/fa";

const Students= () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-light vh-100 p-3">
        <h4 className="text-primary">ISOAS</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link text-dark">Dashboard</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark">Schools</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark">Plans</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark">Community</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark">Messages</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        {/* Profile Card */}
        <div className="card mb-4">
          <div className="card-body d-flex align-items-center">
            <div className="profile-picture rounded-circle bg-light me-3" style={{ width: "80px", height: "80px" }}></div>
            <div>
              <h5>Abc School</h5>
              <p className="mb-1 text-muted">Jakarta, Indonesia</p>
              <p className="mb-0">
                <span className="me-3"><FaPhone /> +12 345 6789 0</span>
                <span><FaEnvelope /> jordan@mail.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Total Classes</h6>
                <h4 className="text-primary">45</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Total Teachers</h6>
                <h4 className="text-success">85</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Total Students</h6>
                <h4 className="text-info">5</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="card">
          <div className="card-body">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a href="#" className="nav-link">Classes</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link active">Students</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Teachers</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Parents</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Events</a>
              </li>
            </ul>

            {/* Search and Add Buttons */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <input type="text" className="form-control w-25" placeholder="Search here..." />
              <div className="d-flex align-items-center">
                <select className="form-select w-auto me-2">
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
                <button className="btn btn-primary">+ New Student</button>
              </div>
            </div>

            {/* Table */}
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
                {[
                  { name: "Samanta William", id: "#123456789", date: "March 25, 2021", parent: "Mana William" },
                  { name: "Tony Soap", id: "#123456789", date: "March 25, 2021", parent: "James Soap" },
                  { name: "Karen Hope", id: "#123456789", date: "March 25, 2021", parent: "Justin Hope" },
                  { name: "Jordan Nico", id: "#123456789", date: "March 25, 2021", parent: "Amanda Nico" },
                  { name: "Nadila Adja", id: "#123456789", date: "March 25, 2021", parent: "Jack Adja" },
                  { name: "Johnny Ahmad", id: "#123456789", date: "March 25, 2021", parent: "Danny Ahmad" },
                ].map((student, index) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{student.name}</td>
                    <td>{student.id}</td>
                    <td>{student.date}</td>
                    <td>{student.parent}</td>
                    <td>
                      <button className="btn btn-danger btn-sm me-2">
                        <FaTrashAlt /> Remove Student
                      </button>
                      <button className="btn btn-secondary btn-sm me-2">
                        <FaPhone />
                      </button>
                      <button className="btn btn-secondary btn-sm">
                        <FaEnvelope />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center">
              <p>Showing 1-6 from 100 data</p>
              <nav>
                <ul className="pagination mb-0">
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
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

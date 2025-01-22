import React from "react";

const Loginform = () => {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-md-6 d-flex align-items-center justify-content-center  background text-white">
          <img
            src="hero-3-cover.png"
            alt="Student"
            className="img-fluid"
            style={{ maxHeight: "90%", borderRadius: "10px" }}
          />
        </div>

        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center bg-light">
          <img
            src="isoar.png"
            alt="Logo"
            className="mb-4"
            style={{ maxWidth: "150px" }}
          />
          <h1 className="text-center mb-3">Registration Form</h1>
          <p>
            Already have an account?
            <a href="/login" className="text-warning">
              Login
            </a>
          </p>
          <form className="w-75">
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name *"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name *"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email *"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Confirm Email *"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number *"
                required
              />
            </div>
            <center>
              <button type="submit" className="custom-button">
                <span className="icon">
                  <img src="Vector.png" alt="image" />
                </span>
                REGISTER
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginform;

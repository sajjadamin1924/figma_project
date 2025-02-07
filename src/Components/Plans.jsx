import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="container-fluid ">
      <div className="row">
        {/* Sidebar */}
        <nav className="  col-md-3 col-lg-2 d-md-block bg-light d-flex sidebar p-3">
          <div className="d-flex text-center py-3 p-5">
            <img
              src="image 1.png"
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: "100px" }}
            />
            <h1 className="text-center p-3">ISOAS</h1>
          </div>

          <ul className="nav flex-column mt-4">
            <li className="nav-item">
              <Link to="/Dashboard" className="nav-link">
                <img
                  src="Speedometer.png"
                  alt="Dashboard Icon"
                  className="me-2 image"
                />
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Schools" className="nav-link">
                <img
                  src="Vector (1).png"
                  alt="Schools Icon"
                  className="me-2 image"
                />
                Schools
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Plans" className="nav-link active">
                <img src="Show.png" alt="Plans Icon" className="me-2 image" />
                Plans
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Cummunity" className="nav-link">
                <img
                  src="Team.png"
                  alt="cummunity Icon"
                  className="me-2 image"
                />
                Cummunity
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Messages" className="nav-link">
                <img
                  src="meeting.png"
                  alt="Messages Icon"
                  className="me-2 image"
                />
                Messages
              </Link>
            </li>
          </ul>
        </nav>

        <main className=" col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex align-items-center justify-content-center flex-column back">
            <h4 className="text-white">15-day free trial.</h4>
            <p className="text-white">
              Find simple plans for comprehensive automations
            </p>
            <div className="form-check form-switch d-flex justify-content-center">
              <input
                className="form-check-input me-2"
                type="checkbox"
                checked={billingCycle === "yearly"}
                onChange={() =>
                  setBillingCycle(
                    billingCycle === "monthly" ? "yearly" : "monthly"
                  )
                }
              />
              <label className="form-check-label">
                {billingCycle === "monthly" ? "Monthly" : "Yearly"}
              </label>
            </div>
          </div>

          <div className="row text-center px-4" style={{ marginTop: "-45px" }}>
            <div className="col-md-4">
              <div className="card shadow-sm p-3 mb-4">
                <h5 className="card-title py-2 background text-white rounded">
                  Basic Plan
                </h5>
                <hr />
                <h3 className="fs-4">
                  ${billingCycle === "monthly" ? 100 : 90}/month
                </h3>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-outline-dark my-2 btn-sm">
                    Get Started
                  </button>
                </div>
                <ul className="list-unstyled text-start px-3 mt-4">
                  <li className="mt-4 checkmark">
                    Offers Core Features like Messaging
                  </li>
                  <li className="mt-4 checkmark"> File Sharing</li>
                  <li className="mt-4 checkmark"> Basic Analytics</li>
                  <li className="mt-4 checkmark"> Scheduling Tools</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm p-3 mb-4">
                <h5 className="card-title py-2 background text-white rounded">
                  Pro Plan
                </h5>
                <hr />
                <h3 className="fs-4">
                  ${billingCycle === "monthly" ? 100 : 90}/month
                </h3>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-outline-dark my-2 btn-sm">
                    Get Started
                  </button>
                </div>
                <ul className="list-unstyled text-start px-3 mt-4">
                  <li className="mt-4 checkmark">Detailed Analytics</li>
                  <li className="mt-4 checkmark">Two Factor Authorization</li>
                  <li className="mt-4 checkmark"> Emergency Alerts</li>
                  <li className="mt-4 checkmark">
                    Professional Development Integration
                  </li>
                  <li className="mt-4 checkmark"> API Access</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm p-3 mb-4">
                <h5 className="card-title py-2 background text-white rounded">
                  Enterprise Plan
                </h5>
                <hr />
                <h3 className="fs-4">
                  ${billingCycle === "monthly" ? 100 : 90}/month
                </h3>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-outline-dark my-2 btn-sm">
                    Get Started
                  </button>
                </div>
                <ul className="list-unstyled text-start px-3 mt-4">
                  <li className="mt-4 checkmark">
                    Customizable Package Offering All Features
                  </li>
                  <li className="mt-4 checkmark">Including Premium Support</li>
                  <li className="mt-4 checkmark">Custom Integrations</li>
                  <li className="mt-4 checkmark">
                    Dedicated Account Management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PricingPlans;

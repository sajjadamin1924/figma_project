import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Addnewteacher = () => {
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
            <img src="Speedometer.png" alt="Dashboard Icon" className="me-2 image" />
            Dashboard
          </Link>
          <Link
            className="nav-link d-flex align-items-center text-dark"
            to="/schools"
          >
            <img src="Vector (1).png" alt="Schools Icon" className="me-2 image" />
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
          <h2 className="fw-bold">Add new teacher</h2>
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
        <Container className="mt-4">
          <Card className="p-3 mb-4 border-primary">
            <Card.Header className="bg-primary text-white">
              Personal Details
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label>Photo</Form.Label>
                      <div className="border p-3 text-center">
                        Drag and drop or click here to select file
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={9}>
                    <Row>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" placeholder="Samantha" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" placeholder="William" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Date & Place of Birth</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="24 February 1997"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Parent Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Mona William"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="william@mail.com"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Phone</Form.Label>
                          <Form.Control type="text" placeholder="+1234567890" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col>
                        <Form.Group>
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter address here"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>

          <Card className="p-3 mb-4 border-primary">
            <Card.Header className="bg-primary text-white">
              Education
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label>Photo</Form.Label>
                      <div className="border p-3 text-center">
                        Drag and drop or click here to select file
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={9}>
                    <Row>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" placeholder="Mona" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" placeholder="William" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="mona@mail.com"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Phone</Form.Label>
                          <Form.Control type="text" placeholder="+1234567890" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col>
                        <Form.Group>
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter address here"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>

          <div className="text-end">
            <Button variant="primary">Submit</Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Addnewteacher;

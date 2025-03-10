import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaClock,
  FaPhone,
} from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-dark text-white py-2 d-flex justify-content-between align-items-center px-4 flex-wrap">
        <div className="d-flex align-items-center">
          <FaClock className="me-2" /> <span>Mon - Fri: 9.00 - 17.00</span>
          <FaEnvelope className="ms-4 me-2" />{" "}
          <a
            href="mailto:inquiry@dexterityconsult.co"
            className="text-white text-decoration-none"
          >
            inquiry@dexterityconsult.co
          </a>
        </div>
        <div className="d-flex align-items-center">
          <span className="me-2">Follow On:</span>
          <FaFacebook className="me-2" />
          <FaTwitter className="me-2" />
          <FaInstagram className="me-2" />
          <FaLinkedin />
        </div>
      </div>

      {/* Navigation Bar */}
      <Navbar expand="lg" className="bg-white shadow-sm py-3">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="/logo.png"
              alt="Dexterity Logo"
              height="40"
              className="me-2"
            />
            <strong>DEXTERITY CONSULT LIMITED</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Our Company</Nav.Link>
              <Nav.Link href="#">Our Services</Nav.Link>
              <Nav.Link href="#">Case Studies</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center ms-3">
              <FaPhone className="text-primary me-2" size={20} />
              <div>
                <small className="d-block text-muted">
                  Contact For Support
                </small>
                <strong className="text-dark">+233 30 295 2799</strong>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

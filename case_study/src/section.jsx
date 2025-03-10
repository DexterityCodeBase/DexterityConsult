import React from "react";
import { Container } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const Section = ({ title, body, bgColor = "white", Icon = FaInfoCircle }) => {
  return (
    <div style={{ backgroundColor: bgColor, padding: "40px 0" }}>
      <Container>
        <div className="d-flex align-items-center mb-3">
          <Icon size={50} color="red" className="me-3" />
          <h2 style={{ color: "red" }}>{title}</h2>
        </div>
        <p className="text-dark">{body}</p>
      </Container>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  Icon: PropTypes.elementType,
};

export default Section;

import React from "react";
import { Container } from "react-bootstrap";
import about from "../images/about.svg";

function About() {
  return (
    <>
      <Container>
        <div className="main">
          <h2>ABOUT PAGE</h2>
          <img src={about} alt="about" />
        </div>
      </Container>
    </>
  );
}

export default About;

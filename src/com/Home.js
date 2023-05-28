import React from "react";
import home from "../images/home.svg";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <>
      <Container>
        <div className="main">
          <h2>1st PAGE</h2>
          <img src={home} alt="home" />
        </div>
      </Container>
    </>
  );
}

export default Home;

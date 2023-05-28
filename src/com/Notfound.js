import React from "react";
import { Container } from "react-bootstrap";
import notfound from "../images/notfound.svg";
function Notfound() {
  return (
    <>
      <Container>
        <div className="main">
          <img src={notfound} alt="notfound" />
          <h3>NOT FOUND MABOI</h3>
        </div>
      </Container>
    </>
  );
}

export default Notfound;

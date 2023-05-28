import React from "react";
import data from "../data/data.js";
import { Container, Card, Col, Row, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <Container>
      <article>
        <Row>
          {data.map((item) => (
            
            <Col lg={6} style={{ marginBottom: "1rem" }}>
              <Card>
                <Card.Body>
                <Link to={`/blog/${item.id}`} key={item.id}>
                  <Card.Title><h2>{item.title}</h2></Card.Title>
                  </Link>
                  <Card.Text>{item.content.substring(0, 50)}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{item.author}</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      </article>
    </Container>
  );
}

export default Blogs;

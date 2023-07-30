import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
export default function ShowcaseCard({ project }) {
  return (
    <Card className="my-3">
      <Card.Title>{project.title}</Card.Title>
      <Card.Body>
        <Row>
          <Col>
            <img
              src={project.image}
              style={{ height: "150px", border: "5px solid black" }}
            />
          </Col>
          <Col>
            <p>{project.projectDesc}</p>
            <Row>
              <Col>
                <Button
                  className={!project.url ? "disabled" : ""}
                  style={{ width: "100%" }}
                  href={project.url}
                >
                  Deployed Site
                </Button>
              </Col>
              <Col>
                <Button style={{ width: "100%" }} href={project.git}>
                  GitHub
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

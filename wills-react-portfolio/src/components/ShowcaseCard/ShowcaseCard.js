import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
export default function ShowcaseCard({ project }) {
  return (
    <Card className="my-3">
      <Card.Header>{project.title}</Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Card.Img
              src={project.image}
              style={{ border: "5px solid black" }}
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
                <Button style={{ width: "100%", bottom: "10"}} href={project.git}>
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

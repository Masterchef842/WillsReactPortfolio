import { useState } from "react";
import { Card, Container, Row, Col, Nav } from "react-bootstrap";

export default function BioCard() {
  const [bioTab, setTab] = useState("bio");

  const handleClick = ({ target }) => {
    setTab(target.bio);
  };

  return (
    <Card variant="Primary" style={{ top: "20vh", margin: "auto auto 40vh" }}>
      <Card.Header style={{justifyContent: "right"}}>
        <Card.Title>About Me</Card.Title>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Bio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Education</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled" d>
              Skills
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col xs={4}>
              <Card.Img src="http://shackmanlab.org/wp-content/uploads/2013/07/person-placeholder.jpg" />
            </Col>
            <Col>
              <Card.Text
                name="bio"
                style={bioTab === "bio" ? {} : { display: "none" }}
                
              >
                <p>
                  Hello, I'm Robert William "Will" Lord, a highly motivated and
                  skilled full-stack web developer with expertise in React,
                  Bootstrap, MERN Stack, and associated technologies. My coding
                  journey began in high school with learning Java, which I
                  nurtured through a comprehensive three-year computer science
                  program.
                </p>

                <p>
                  I graduated from Southwestern University in 2021 with a
                  Bachelor of Arts in Political Science and a minor in music. In
                  2023, I completed the University of Texas Full-Stack Flex
                  coding boot camp with an exceptional grade of 94.5%.
                </p>

                <p>
                  I possess proficiency in JavaScript ES6, front-end and
                  back-end development, object-oriented programming, and various
                  databases like NoSQL (MongoDB and Mongoose) and
                  MySQL/Sequelize. I also have hands-on experience with Git,
                  Heroku, Handlebars.js, and Jest for testing.
                </p>

                <p>
                  As a lifelong learner, I'm committed to staying updated with
                  the latest industry trends and best practices. I thrive on
                  challenges and enjoy collaborating with diverse teams to
                  create innovative solutions.
                </p>

                <p>
                  Whether as a valuable addition to your company or as a
                  freelance collaborator, I'm dedicated to utilizing my
                  technical expertise and problem-solving skills to achieve
                  success. Feel free to explore my portfolio website, download
                  my detailed resume, or get in touch through the contact form.
                  I look forward to connecting and discussing potential
                  opportunities.
                </p>
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

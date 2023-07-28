import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PageHeader from "./components/Header/Header";
import Pagefooter from "./components/Footer/Footer";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Showcase from "./pages/MyWork";
import Resume from "./pages/Resume";
import "./App.css";

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Hanalei&family=Maven+Pro:wght@400;500&display=swap"
        rel="stylesheet"
      ></link>

      <Router>
        <Container fluid>
          <Row>
              <PageHeader />
          </Row>
          <Row>
            <Col xs={12}>
            <Routes>
              <Route exact path="/" element={<AboutMe />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/showcase" element={<Showcase />} />
              <Route exact path="/resume" element={<Resume />} />
            </Routes>
            </Col>
            
          </Row>

          <Row>
            <Pagefooter />
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import BioCard from "../components/BioCard/BioCard.js";
import CurrentlyWorkingCard from "../components/CurrentlyWorkingCard/CurrentlyWorkingCard.js";
import { Card, Container, Row, Col } from "react-bootstrap";


function AboutMe(){

    return (
        <Container fluid>
            <Row>
                <Col xs={9}>
                    <BioCard/> 
                </Col>
                <Col xs={3} >
                <CurrentlyWorkingCard/>
                </Col>

            </Row>
           
        </Container>
        
        
    );
}

export default AboutMe;
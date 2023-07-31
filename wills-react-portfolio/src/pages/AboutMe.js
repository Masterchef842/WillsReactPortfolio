import React from "react";
import BioCard from "../components/BioCard/BioCard.js";
import CurrentlyWorkingCard from "../components/CurrentlyWorkingCard/CurrentlyWorkingCard.js";
import CurrentProjCard from "../components/CurrentProjCard/CurrentProjCard.js";
import QuotesCard from "../components/Quotes Card/QuotesCard.js";
import { Card, Container, Row, Col } from "react-bootstrap";


function AboutMe(){

    return (
        <Container fluid>
            <Row>
                <Col xs={12} lg={9}>
                    <BioCard/> 
                </Col>
                <Col lg={3} >
                    <CurrentlyWorkingCard />
                    <CurrentProjCard/>
                    <QuotesCard/>

                </Col>

            </Row>
           
        </Container>
        
        
    );
}

export default AboutMe;
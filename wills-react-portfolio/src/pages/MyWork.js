import React from "react";
import TMF from '../assets/TMF.png'
import JATE from '../assets/JATE.png' 
import SMT from '../assets/SMT.png' 
import WWWOT from '../assets/WWWOT.png' 


import { Carousel, Container, Row, Col } from "react-bootstrap";
function Showcase(){

    return(
        <Container>
            <Row>
                <Col xs={6}> 
                    <Carousel  className="top-50"> 
                        <Carousel.Item>
                            <a href="https://taskmaster-flex-be1c20d82d58.herokuapp.com/"><img src={TMF} style={{height: '400px'}}/></a>
                            <Carousel.Caption style={{color: "white", fontWeight: "bold", fontSize: "200%", textShadow: "4px 4px 4px black"}}>Taskmaster-Flex</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="https://github.com/Meister7K/02-Project-Gamer4Lyfe"><img src={SMT} style={{height: '400px'}}/></a>
                            <Carousel.Caption style={{color: "white", fontWeight: "bold", fontSize: "200%", textShadow: "4px 4px 4px black"}}>Spaceship Mission Tracker</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="https://willswildworldoftech.herokuapp.com/"><img src={WWWOT} style={{height: '400px'}}/></a>
                            <Carousel.Caption style={{color: "black", fontWeight: "bold", fontSize: "200%", textShadow: "none"}}>Wild World of Tech Blog</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="https://worldsbesttexteditor.herokuapp.com/"><img src={JATE} style={{height: '400px'}}/></a>
                            <Carousel.Caption style={{color: "white", fontWeight: "bold", fontSize: "200%", textShadow: "4px 4px 4px black"}}>JA Text Editor PWA</Carousel.Caption>
                        </Carousel.Item>

                    </Carousel> 
                </Col>
                <Col xs={6}>
                </Col>
              
            </Row>
            
        </Container>
        
    );
}

export default Showcase;
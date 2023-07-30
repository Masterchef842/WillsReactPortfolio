import { useState } from "react";
import TMF from "../assets/TMF.png";
import JATE from "../assets/JATE.png";
import SMT from "../assets/SMT.png";
import WWWOT from "../assets/WWWOT.png";
import down from  "../assets/down-arrow.png";
import ShowcaseCard from "../components/ShowcaseCard/ShowcaseCard";

import {
  Carousel,
  Container,
  Row,
  Col,
  Card,
  Button,
  Alert,
} from "react-bootstrap";

function Showcase() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const projData = [
    {
      title: "Taskmaster-Flex",
      projectDesc: "A gameified habit tracking app where progress you make on your chores/habits/responsibilities translates into progress in a RPG style dungeon crawler, built using React, PhaserJS, MongoDB, Express and GraphQL",
      image: TMF,
      url: "https://taskmaster-flex-be1c20d82d58.herokuapp.com/",
      git: "https://github.com/Meister7K/TaskMaster-Flex",
      featured: true
    },
    {
      title: "Spaceship Mission Tracker",
      projectDesc: "A website for tracking upcoming spaceship launches by various agencies across the world. Includes monitoring of weather conditions at a launch site, information about the rocket and a countdown until launch, Built using Javascript, Express, and Swift  ",
      image: SMT,
      url: "https://masterchef842.github.io/Spaceship-Mission-Tracker/",
      git: "https://github.com/Masterchef842/Spaceship-Mission-Tracker",
      featured: true
    },
    {
      title: "Wild World of Tech Blog",
      projectDesc: "A social media blog and API complete with functionality for posting, liking, commenting, login/logout, and cookies. Built using handlebarsJS , MySQL, Sequelize, and Express ",
      image: WWWOT,
      url: "https://willswildworldoftech.herokuapp.com/",
      git: "https://github.com/Masterchef842/WillsWildWorldOfTech",
      featured: true,
      textColor: "black",
    },
    {
      title: "JA Text Editor PWA",
      projectDesc: "An online text editor with Progressive Web App capabilities. Built using Webpack",
      image: JATE,
      url: "https://worldsbesttexteditor.herokuapp.com/",
      git: "https://github.com/Masterchef842/WorldsBestTextEditor",
      featured: true
    },
  ];

  const renderProjects = () => {
    return projData.map((project) => {
        if(project.featured){
            return (
                <Carousel.Item>
                  <a href={project.url || project.git}>
                    <img src={project.image} style={{ height: "400px" }} />
                  </a>
                  <Carousel.Caption
                    style={{
                      color: project.textColor || "white",
                      fontWeight: "bold",
                      fontSize: "200%",
                      textShadow: project.textColor ? "none" : "4px 4px 4px black",
                    }}
                  >
                    {project.title}
                  </Carousel.Caption>
                </Carousel.Item>
              );

        }
        return <></>
      
    });
  };

  const renderCards=()=>{
    return (projData.map((proj ,i)=>{
        return (<ShowcaseCard project={proj}/>) 
        
    }));
  }

  return (
    <>
    
    <Container style={{height: "90vh"}}>
      <Row>
        <Col xs={6}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="top-50"
            style={{ border: "solid 5px black" }}
          >
            {renderProjects()}
          </Carousel>
        </Col>
        <Col xs={6}>
          <Card className="top-50" style={{ height: "410px", alignItems: "center"}}>
            <Card.Body>
              <Card.Title>{projData[index].title}</Card.Title>
              <Card.Text>{projData[index].projectDesc}</Card.Text>
            </Card.Body>
            <Row className="justify-content-between" style={{bottom: "10px"}}>
                <Col className="d-inline-flex p-2 my-2">
                  <Button className={!projData[index].url ? "disabled": ""} style={{width: "100%"}}href={projData[index].url}>Deployed Site</Button>
                </Col>
                <Col className="d-inline-flex p-2 my-2">
                  <Button style={{width: "100%"}}href={projData[index].git} >GitHub</Button>
                </Col>
              </Row>
            <Alert style={{bottom: "10px", width: "80%"}}>Scroll Down For More<img src={down} style={{height :"20px", left: "10%"}}/></Alert>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container className="justify-content-center"fluid>
        <h2 style={{background: "#496DDB", border: "solid 5px black"}}>All Projects</h2>
        {renderCards()}
    </Container>
    
</>
     
        

    
  );
}

export default Showcase;

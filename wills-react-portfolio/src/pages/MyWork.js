import { useState } from "react";
import TMF from "../assets/TMF.png";
import JATE from "../assets/JATE.png";
import SMT from "../assets/SMT.png";
import WWWOT from "../assets/WWWOT.png";
import DG from "../assets/DG.gif"
import down from "../assets/down-arrow.png";
import ShowcaseCard from "../components/ShowcaseCard/ShowcaseCard";
import SMW from "../assets/SMW.png"

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
      projectDesc:
        "A gameified habit tracking app where progress you make on your chores/habits/responsibilities translates into progress in a RPG style dungeon crawler, built using React, PhaserJS, MongoDB, Express and GraphQL",
      image: TMF,
      url: "https://taskmaster-flex-be1c20d82d58.herokuapp.com/",
      git: "https://github.com/Meister7K/TaskMaster-Flex",
      featured: true,
    },
    
    {
      title: "Wild World of Tech Blog",
      projectDesc:
        "A social media blog and API complete with functionality for posting, liking, commenting, login/logout, and cookies. Built using handlebarsJS , MySQL, Sequelize, and Express ",
      image: WWWOT,
      url: "https://willswildworldoftech.herokuapp.com/",
      git: "https://github.com/Masterchef842/WillsWildWorldOfTech",
      featured: true,
      textColor: "black",
    },
   
    {
      title: "dungeon crawler",
      projectDesc: "A platforming game with login/ logout capabilities, data storage/persistence and cookies. Built with SQL, Javascript, Handlebars and Express",
      image: DG,
      git: "https://github.com/Meister7K/02-Project-Gamer4Lyfe",
      featured: true
    },
    {
      title: "Wills Super Cool E-Commerce Backend",
      projectDesc: "Functioning back end routes and database schema for an e-commerce website, tested using insomnia. Built with sequelize/SQL and express",
      image: "https://www.conversific.com/wp-content/uploads/2020/03/ecommerce_1280x717-1024x574.jpg",
      git: "https://github.com/Masterchef842/willssupercoolecommerce-backend",
      url: "https://drive.google.com/file/d/1TuvAbUg6JfboNOdVKaxKEhulS25QUTe8/view?usp=sharing",
      featured: true
    },
    {
      title: "NoZuckerberg Social Media API",
      projectDesc: "Routes and database for a social media API, complete with the ability to like comment, friend and add/ delete posts. Built with Mongoose/ MongoDB and ExpressJS, Tested with insomina",
      image: "https://www.waxmarketing.com/wp-content/uploads/2019/08/social-media-800x534.png",
      git:"https://github.com/Masterchef842/NoZuckerburgSocialNetworkAPI",
      url: "https://drive.google.com/file/d/1APhUEfTTnou45J1C-RyaIlSpg-iTAN7N/view",
      featured: true

    },
    {
      title: "Spaceship Mission Tracker",
      projectDesc:
        "A website for tracking upcoming spaceship launches by various agencies across the world. Includes monitoring of weather conditions at a launch site, information about the rocket and a countdown until launch, Built using Javascript, Express, and Swift  ",
      image: SMT,
      url: "https://masterchef842.github.io/Spaceship-Mission-Tracker/",
      git: "https://github.com/Masterchef842/Spaceship-Mission-Tracker",
      featured: false,
    },
    {
      title: "JA Text Editor PWA",
      projectDesc:
        "An online text editor with Progressive Web App capabilities. Built using Webpack",
      image: JATE,
      url: "https://worldsbesttexteditor.herokuapp.com/",
      git: "https://github.com/Masterchef842/WorldsBestTextEditor",
      featured: false,
    },
    {
      title: "Stormy Monday Weather App",
      projectDesc: "A weather app made using the 5 day weather forecast API",
      image:SMW,
      url:"https://masterchef842.github.io/Stormy-Monday/",
      git: "https://github.com/Masterchef842/Stormy-Monday",
      
    }
    
  ];

  const renderProjects = () => {
    return projData.map((project) => {
      if (project.featured===true) {
        return (
          <Carousel.Item key={project.title}>
            <a href={project.url || project.git}>
              <img src={project.image} style={{ height: "55vh" }} />
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
      return null;
    });
  };

  const renderCards = () => {
    return projData.map((proj, i) => {
      return <ShowcaseCard key={proj.title} project={proj} />;
    });
  };

  return (
    <>
      <Container style={{ height: "90vh" }} fluid>
        <Row>
          <Row>
            <Col>
              <h2 style={{position:'realative', background: "#496DDB", marginTop: "20vh", border: "solid 5px black" }}>
                FEATURED PROJECTS
              </h2>
            </Col>
          </Row>

          <Col xs={6}>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              style={{ border: "solid 5px black" }}
            >
              {renderProjects()}
            </Carousel>
          </Col>
          <Col xs={6}>
            <Card border="dark" style={{ height: "56vh", alignItems: "center" }}>
              <Card.Body>
                <Card.Header style={{width: "100%"}}>
                  <Card.Title>{projData[index].title}</Card.Title>
                </Card.Header>
                <Card.Text>{projData[index].projectDesc}</Card.Text>
              </Card.Body>
              <Row
                className="justify-content-between"
                style={{ bottom: "10px" }}
              >
                <Col className="d-inline-flex p-2 my-2">
                  <Button
                    className={!projData[index].url ? "disabled" : ""}
                    style={{ width: "100%" }}
                    href={projData[index].url}
                  >
                    Deployed Site
                  </Button>
                </Col>
                <Col className="d-inline-flex p-2 my-2">
                  <Button style={{ width: "100%" }} href={projData[index].git}>
                    GitHub
                  </Button>
                </Col>
              </Row>
              <Alert style={{ bottom: "10px", width: "80%" }}>
                Scroll Down For More
                <img src={down} style={{ height: "20px", left: "10%" }} />
              </Alert>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container
        className="justify-content-center"
        style={{ margin: "auto auto 20vh" }}
        fluid
      >
        <h2 style={{ background: "#496DDB", border: "solid 5px black" }}>
          All Projects
        </h2>
        {renderCards()}
      </Container>
    </>
  );
}

export default Showcase;

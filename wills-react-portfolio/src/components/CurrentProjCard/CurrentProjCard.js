import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function CurrentProjCard(){
    return(
        <Card
        bg='info'
        key='Info'
        text='light'
        style={{top: "20vh", margin: "10px auto"}}

       
        
      >
        <Card.Header><Card.Title>Current Project </Card.Title></Card.Header>
        <Card.Body>
          
          <div>
            <Card.Text><strong>Chess Coach</strong></Card.Text>
            <Card.Text>A Chess Coach bot using GPT4 API, Stockfish and Phaser.js</Card.Text> 
          </div>
        </Card.Body>
      </Card>
    );
}
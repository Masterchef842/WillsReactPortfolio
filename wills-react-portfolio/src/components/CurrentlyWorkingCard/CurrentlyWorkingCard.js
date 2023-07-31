import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function CurrentlyWorkingCard(){
    return(
        <Card
        bg='danger'
        key='Danger'
        text='dark'
        style={{top: "20vh"}}
        className="mb-2"
        
      >
        <Card.Header><Card.Title>Currently Learning </Card.Title></Card.Header>
        <Card.Body>
          
          <Card.Text>
            <p><strong>Codeacademy Comp Science Course</strong></p>
            <p>A comprehensive course on mastering important algorithms and data structures</p> 
          </Card.Text>
        </Card.Body>
      </Card>
    );
}
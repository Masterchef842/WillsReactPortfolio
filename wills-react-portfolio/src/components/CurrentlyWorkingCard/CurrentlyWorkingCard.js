import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function CurrentlyWorkingCard(){
    return(
        <Card
        bg='danger'
        key='Danger'
        text='light'
        style={{top: "20vh"}}
        

        
      >
        <Card.Header><Card.Title>Currently Learning </Card.Title></Card.Header>
        <Card.Body>
          
          <div>
            <Card.Text><strong>Codeacademy Computer Science Course</strong></Card.Text>
            <Card.Text>A comprehensive course on mastering important algorithms and data structures</Card.Text> 
          </div>
        </Card.Body>
      </Card>
    );
}
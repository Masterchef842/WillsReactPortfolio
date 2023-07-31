import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function QuotesCard(){
    return(
        <Card
        bg='success'
        key='Success'
        text='light'
        style={{top: "20vh", margin: "10px auto"}}
        

        
      >
        <Card.Header><Card.Title>Daily Motivation</Card.Title></Card.Header>
        <Card.Body>
          
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            “You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential.”{' '}
          </p>
          <footer className="blockquote-footer" style={{color: "white"}}>
            David Goggins, <cite title="Source Title">Cant Hurt Me</cite>
          </footer>
        </blockquote>
        </Card.Body>
      </Card>
    );
}
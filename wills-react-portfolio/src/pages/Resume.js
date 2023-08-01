import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";


function Resume(){

    return (
        <Row style={{marginTop: "35vh",  }}>
            <Col>
            <h2 style={{marginBottom:'40px'}}>Click below to view/download my resume!</h2>
            <Button href="https://docs.google.com/document/d/1lFRkE5YcmBWq92EbrwdYNRiIRqi491jTU2YMrqXZpko/edit?usp=sharing" variant="outline-primary" style={{width:'20%', height:'150%', fontSize:"200%"}} download>Download</Button>
            <Button href='https://docs.google.com/document/d/1lFRkE5YcmBWq92EbrwdYNRiIRqi491jTU2YMrqXZpko/edit?usp=sharing' variant="outline-success" style={{width:'20%', height:'150%', fontSize:"200%"}}>View on Google Docs</Button>
            </Col>
           
        
            
        </Row>
        
    );

}

export default Resume 
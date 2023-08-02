import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";


function Resume(){
    const PDFurl='http://localhost:3000/RobertLordResume.pdf'
    const downloadFile=(url)=>{
        const aTag=document.createElement('a');
        aTag.href=url;
        aTag.setAttribute('download','Robert_Lord_Resume.pdf');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    return (
        <Row >
            
            <Col>
            <h2 style={{ background: "#496DDB", margin: "20vh 10%", border: "solid 5px black", alignSelf:"center" }}>Downloads Center</h2>
            <h3 style={{marginBottom:'40px'}}>Click below to view/download my resume!</h3>
            <Button variant="outline-primary" style={{width:'20%', height:'30%', fontSize:"200%"}} onClick={()=>{downloadFile(PDFurl)}} >Download</Button>
            <Button href='https://docs.google.com/document/d/1lFRkE5YcmBWq92EbrwdYNRiIRqi491jTU2YMrqXZpko/edit?usp=sharing' variant="outline-success" style={{width:'20%', height:'30%', fontSize:"200%"}}>View on Google Docs</Button>
            </Col>
           
        
            
        </Row>
        
    );

}

export default Resume 
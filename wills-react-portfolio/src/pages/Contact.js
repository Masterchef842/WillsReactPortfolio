import React, { useRef, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [user, setUser]=useState('');
  const [userEmail, setEmail]=useState('');
  const [userMessage, setMessage]=useState('');
  const [displayErr, setErr]=useState( false)

  const sendEmail = (e) => {
    e.preventDefault();

    if(user && userMessage && /^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|\"[a-zA-Z0-9.+!% -]{1,64}\")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$/.test(userEmail)){
        setErr(false)
          emailjs
      .sendForm(
        "service_ke9fl14",
        "template_jet9z4m",
        form.current,
        "sBAIHVIqVWTZAloOn"
      )
      .then(
        (result) => {
          console.log(result.text)
         
        },
        (error) => {
          console.log(error.text);
        }
      );
    
      setEmail('')
      setUser('')
      setMessage('')
      e.target.reset()
    }
    else{
        setErr(true)
    }
    
  };

  const handleFormChange=(e)=>{
    if(e.target.name==="from_name")
        setUser(e.target.value)
    if(e.target.name==="reply_to" )
        setEmail(e.target.value)
    if(e.target.name==="message")
        setMessage(e.target.value)

    if(e.target.value=""){

    }

    

  }

  return (
    <Container>
      <Row style={{ marginTop: "20vh" }}>
        <Col>
          <Card bg="light" text="dark" border="primary">
            <Card.Header>Contact Form</Card.Header>

            <form
              ref={form}
              onSubmit={sendEmail}
              style={{ width: "80%", alignSelf: "center", margin: "10%" }}
            >
              <Row style={{ margin: "0 5% 5%" }}>
                <label>Name</label>
                <input type="text" name="from_name" onChange={(e)=>{handleFormChange(e)}} value={user}/>
                <span style={displayErr && !user? {color:'red'} : {display: 'none'}}>Name is required</span>
              </Row>
              <Row style={{ margin: "5%" }}>
                <label>Email</label>
                <input type="email" name="reply_to" onChange={(e)=>{handleFormChange(e)}} value={userEmail}/>
                <span style={displayErr && !userEmail? {color:'red'} : {display: 'none'}}>Valid email is required</span>
                
              </Row>

              <Row style={{ margin: "5%"}}>
                <label>Message</label>
                <textarea name="message"  onChange={(e)=>{handleFormChange(e)}} value={userMessage}/>
                <span style={displayErr && !userMessage? {color:'red'} : {display: 'none'}}>Message is required</span>
              </Row>
              <input type="submit" value="Send" />
            </form>
          </Card>
        </Col>
        <Col>
          <h3 style={{marginTop: "20%"}}>
            <p>
              Need a website built or a position filled at you company? Leave a
              message and your email address in the contact form, and Ill reach back out to you as soon
              as possible!
            </p>
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

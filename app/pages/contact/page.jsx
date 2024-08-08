/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col ,Form,Button} from 'react-bootstrap';
import FooterComponent from '../../component/footer/FooterComponent'
import NavbarComponent from "../../component/navbar/Navbar";
import './contact.css'
const page = () => {
  return (
    <div>
        <NavbarComponent />
     
     <div className='page_about'>
       <div className='bredcramp'>
         <h1>Contact Us</h1>
         <div className="prive_bredcramp">
         <span> Home </span> <span>Contact Us</span>
         </div>
       </div>
     </div>

        <div className='contact'>
            <h1>Get In Touch</h1>
            <p>Organic foods are typically certified by regulatory bodies to ensure they meet specific organic standards.</p>


            <Container>
                <div className='background'>
                <Row>
                <Col xs={12} sm={12} md={4}>
                    <div className='information_contanct'>
                        <div className='text_contatc'>
                        <h1>Contact Information</h1>
                        <p>Organic foods are typically certified by regulatory bodies to ensure they meet</p>
                        </div>

                        <div className='contant_tel'>
                            <div className='display'>
                            <img src='/imgs/call1.png' /><span>+966592804512</span>
                            </div>
                            <div className='display'>
                           <img src='/imgs/mail-01.png' /><span>Support@Saldwich.com</span>
                           </div>
                           <div className='display'>
                            <img src='/imgs/location-06.png' /><span>Riyadh & Dammam</span>
                            </div>
                        </div>

                        <div className='social_contact'>
                            <h1>Follow Social Media</h1>
                            <div className='icon_social'>
                                <ul>
                                    <li><img src='/icon/facebook-01.png' /></li>
                                    <li><img src='/icon/instagram.png' /></li>
                                    <li><img src='/icon/new-twitter-rectangle.png' /></li>
                                    <li><img src='/icon/tiktok.png' /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={8}>

            <div className='form_contact'>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" placeholder="Ex, Ahmed khaled" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="Ex, Ahmed khaled@gmail.com" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Your Subject</Form.Label>
                    <Form.Control placeholder="Ex, Report" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={10} placeholder='Write here your message'/>
                </Form.Group>

                <Button variant="primary" type="submit">
                Send Message
                </Button>
            </Form>
            </div>
                </Col>
                </Row>
                </div>
            </Container>
        </div>



     <div className="section_footer">
      <FooterComponent />
    </div>
    </div>
  )
}

export default page

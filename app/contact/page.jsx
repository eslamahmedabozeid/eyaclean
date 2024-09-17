/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FooterComponent from '../component/footer/FooterComponent';
import NavbarComponent from "../component/navbar/Navbar";
import './contact.css';
import { translate } from '../translations/TranslationContext';
import Link from 'next/link';

const Page = () => {

 const events = (e)=>{
    e.preventDefault();
  }

  const [lang, setLang] = useState('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('lang') || 'en';
    setLang(storedLang);
  }, []);

  return (
    <div>
      <NavbarComponent onLanguageChange={setLang} />

      <div className='page_about'>
        <div className='bredcramp'>
          <h1>{translate('Contact Us', lang)}</h1>
          <div className="prive_bredcramp">
            <span><Link href='/' className='about_link'>{translate('Home', lang)}</Link></span> <span>&gt;</span> <span>{translate('Contact Us', lang)}</span>
          </div>
        </div>
      </div>

      <div className='contact'>
        <h1 className='title_intro'>{translate('Get In Touch', lang)}</h1>
        <p>{translate('Organic foods are typically certified by regulatory bodies to ensure they meet specific organic standards.', lang)}</p>

        <Container>
          <div className='background'>
            <Row>
              <Col xs={12} sm={12} md={4}>
                <div className='information_contanct'>
                  <div className='text_contatc'>
                    <h1>{translate('Contact Information', lang)}</h1>
                    <p>{translate('Organic foods are typically certified by regulatory bodies to ensure they meet', lang)}</p>
                  </div>

                  <div className='contant_tel'>
                    <div className='display'>
                      <img src='/imgs/call.svg' /><span>+966592804512</span>
                    </div>
                    <div className='display'>
                      <img src='/imgs/mail-01.svg' /><span>Support@Saldwich.com</span>
                    </div>
                    <div className='display'>
                      <img src='/imgs/location-06.svg' /><span>{translate('Riyadh & Dammam', lang)}</span>
                    </div>
                  </div>

                  <div className='social_contact'>
                    <h1>{translate('Follow Social Media', lang)}</h1>
                    <div className='icon_social'>
                      <ul>
                        <li><img src='/icon/tiktok.svg' /></li>
                        <li><img src='/icon/new-twitter-rectangle.svg' /></li>
                        <li><img src='/icon/instagram.svg' /></li>
                        <li><img src='/icon/facebook-01.svg' /></li>
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
                        <Form.Label>{translate('Your name', lang)}</Form.Label>
                        <Form.Control type="text" placeholder={translate('', lang)} />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>{translate('Your Email', lang)}</Form.Label>
                        <Form.Control type="email" placeholder={translate('', lang)} />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>{translate('Your Subject', lang)}</Form.Label>
                      <Form.Control placeholder={translate('', lang)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>{translate('Message', lang)}</Form.Label>
                      <Form.Control as="textarea" rows={10} placeholder={translate('', lang)} />
                    </Form.Group>

                    <Button variant="" type="submit" onClick={events}>
                      {translate('Send Message', lang)}
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className="section_footer">
        <FooterComponent lang={lang} />
      </div>
    </div>
  );
};

export default Page;

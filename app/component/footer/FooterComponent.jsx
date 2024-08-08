/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './footerStyle.css'
const FooterComponent = () => {
  return (
    <div>
      <Container>
        <img src='/imgs/Union64.png' className='poshion' />
        <div className='frist_section'>
        <img src='/imgs/salate.png' />
        <div className='title_footer'>
            <h1>Download Our app</h1>
            <div className='flexed_footer'>
                <img src='/imgs/Apple.png' />
                <img src='/imgs/Google.png' />
            </div>
        </div>
        <img src='/imgs/tost.png' />
        </div>


        <Row>
          <Col xs={12} sm={6} md={4}>
            <img src='/imgs/logo.png' className='logo'/>
          </Col>
          <Col  xs={12} sm={6} md={4}>
            <ul className='footer_link'>
              <li>Our Story</li>
              <li>Menu</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col  xs={12} sm={6} md={4}>
          <ul className='footer_social'>
              <li><img src='/imgs/Frame25.png' /> </li>
              <li><img src='/imgs/Frame24.png' /> </li>
              <li><img src='/imgs/Frame23.png' /> </li>
              <li><img src='/imgs/Frame22.png' /> </li>
            </ul>
          </Col>
        </Row>
        <div className='copy_right'>
          <Row>
            <Col xs={6} sm={6} md={6}>
              <h3>2024©All rights reserved</h3>
            </Col>
            <Col xs={6} sm={6} md={6}>
              <div className='terms'>
                <ul>
                  <li>Terms & Conditions</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default FooterComponent

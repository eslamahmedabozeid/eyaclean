/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './footerStyle.css'
const FooterComponent = () => {
  return (
    <div>
      <Container>
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
          <Col>
            <img src='/imgs/logo.png' />
          </Col>
          <Col>
            <ul>
              <li>Our Story</li>
              <li>Menu</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col>
          <ul>
              <li><img src='/imgs/Frame25.png' /> </li>
              <li><img src='/imgs/Frame24.png' /> </li>
              <li><img src='/imgs/Frame23.png' /> </li>
              <li><img src='/imgs/Frame22.png' /> </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent

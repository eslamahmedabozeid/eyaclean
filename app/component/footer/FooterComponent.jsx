/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './footerStyle.css';
import { translate } from '../../translations/TranslationContext';
import Link from 'next/link';

const FooterComponent = ({ lang }) => {
  return (
    <div>
    <Container>
      <div className='Union'>
      <img src='/imgs/Union64.png' className='poshion' alt="Union64" />
      </div>
      <div className='frist_section'>
        <img src='/imgs/salate.png' alt="Salate" />
        <div className='title_footer'>
          <h1>{translate('Download Our app', lang)}</h1>
          <div className='flexed_footer'>
            <img src='/imgs/Apple.svg' alt="Apple" />
            <img src='/imgs/Google.svg' alt="Google" />
          </div>
        </div>
        <img src='/imgs/tost.png' alt="Tost" />
      </div>

      <Row>
        <Col xs={12} sm={6} md={4}>
          <Link href='/'><img src='/imgs/logo2.png' className='logo' alt="Logo" /></Link> 
        </Col>
        <Col xs={12} sm={6} md={4}>
          <ul className='footer_link'>
            <li><Link href="#">{translate('Our Story', lang)}</Link></li>
            <li><Link href="/menu">{translate('Menu', lang)}</Link></li>
            <li><Link href="#">{translate('Gallery', lang)}</Link></li>
            <li><Link href="/contact">{translate('Contact', lang)}</Link></li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <ul className='footer_social'>
            <li><a href='#'> <img src='/imgs/Frame_22.svg' alt="Social 1" /></a></li>
            <li><a href='#'> <img src='/imgs/Frame_23.svg' alt="Social 2" /></a> </li>
            <li><a href='#'> <img src='/imgs/Frame_24.svg' alt="Social 3" /></a></li>
            <li><a href='#'> <img src='/imgs/Frame_25.svg' alt="Social 4" /></a></li>
          </ul>
        </Col>
      </Row>
      <div className='copy_right'>
        <Row>
          <Col xs={6} sm={6} md={6}>
            <h3>{translate('2024©All rights reserved', lang)}</h3>
          </Col>
          <Col xs={6} sm={6} md={6}>
            <div className='terms'>
              <ul>
                <li>{translate('Terms & Conditions', lang)}</li>
                <li>{translate('Privacy policy', lang)}</li>
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

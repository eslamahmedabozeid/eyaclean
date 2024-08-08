import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Image from 'next/image';
import Aboutcomponent from '../../component/aboutSection/Aboutcomponent';
import Testimonials from '../../component/testimonials/Testimonials';
import FooterComponent from '../../component/footer/FooterComponent'
import NavbarComponent from "../../component/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import HowWorkingComponent from '../../component/howWorking/HowWorkingComponent'

// import './About.module.css';
import './AboutStyle.css';
import './AboutStyle.css';
import styles from './SliderComponent.module.css'; 



const page = () => {
  return (
    <div>
      <NavbarComponent />
     
      <div className='page_about'>
        <div className='bredcramp'>
          <h1>About Us</h1>
          <div className="prive_bredcramp">
          <span> Home </span> <span>About Us</span>
          </div>
        </div>
      </div>

      <div className='About_section'>
      <Aboutcomponent />
    </div>


    <div className='section_working'>
      <HowWorkingComponent />
    </div>


    <div className='section_Delivery'>
    
      <Container>
      <div className='image_background'>
            <img src='/imgs/Rectangle29454.png' />
          </div>
        <Row>
          <Col xs={12} sm={12} md={6}>
              <div className='title_Delivery'>
                <p>Why Choose Us</p>
                <h1>The Fastes Delivery To Your Favorite Food</h1>
                <p className='prgraphe_Delivery'>
                At Saldwich, we provide the freshest and healthiest food options in KSA. Join us in promoting a healthier lifestyle At Saldwich, we provide the freshest and healthiest food options in KSA. Join us in promoting a healthier lifestyle
                </p>
              </div>
          <div className='grid_rows'>
            <Row>
              <Col xs={12} sm={12} md={6}>
              <div className='box_Delivery'>
                <div className='flexed_Delivery'>
                <img src='/imgs/Frame420.png' />
                  <div className='child_title'>
                  <h3>Fresh Product</h3>
                  <p>At Saldwich, we provide the freshest and healthiest food</p>
                  </div>
                </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6}>
              <div className='box_Delivery'>
                <div className='flexed_Delivery'>
                <img src='/imgs/Frame420.png' />
                  <div className='child_title'>
                  <h3>Fresh Product</h3>
                  <p>At Saldwich, we provide the freshest and healthiest food</p>
                  </div>
                </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={6}>
              <div className='box_Delivery'>
                <div className='flexed_Delivery'>
                <img src='/imgs/Frame420.png' />
                  <div className='child_title'>
                  <h3>Fresh Product</h3>
                  <p>At Saldwich, we provide the freshest and healthiest food</p>
                  </div>
                </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6}>
              <div className='box_Delivery'>
                <div className='flexed_Delivery'>
                <img src='/imgs/Frame420.png' />
                  <div className='child_title'>
                  <h3>Fresh Product</h3>
                  <p>At Saldwich, we provide the freshest and healthiest food</p>
                  </div>
                </div>
                </div>
              </Col>
             </Row>
            </div>
          </Col>

          <Col>
          <div className='text-center Delivery'>
            <img src='/imgs/image6.png' />
            </div>
          </Col>

       
        </Row>
      </Container>
    </div>

    <div className="testimonials_section">
      <Testimonials />
    </div>
    
    <div className="section_footer">
      <FooterComponent />
    </div>

    </div>
  )
}

export default page

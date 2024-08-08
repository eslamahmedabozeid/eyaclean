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

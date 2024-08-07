/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './styleHome.css'
import {Container, Row, Col} from 'react-bootstrap';
import Image from 'next/image';
import  './styleHome.css'
import SliderComponent from '../../component/slider/SliderComponent';
import Aboutcomponent from '../../component/aboutSection/Aboutcomponent';
import Testimonials from '../../component/testimonials/Testimonials';
import FooterComponent from '../../component/footer/FooterComponent'
  
const HomeComponent = () => {
  return (
    <div>
    <div className="section_home">
    <main className="main">
      <div className="hero">

              <video className="video" loop muted autoPlay playsInline>
                <source src="https://55prod.mtjrsahl-ksa.com/WhatsApp.mp4" type="video/mp4" />
              </video>

        <div className="overlay">
          <div className="Enjoying">
            <span>Enjoying</span> 
            <img src="/imgs/FZFFBmXoAA3sjs 1.png" /> 
            </div>
            <div className="Enjoying">
            <img src="/imgs/FZFFBmXoAA3sjs 1.png" /> 
            <span>balance</span> 
            </div>
          <p className="lift_time">In Life</p>
          <p className="bragraph">The healthiest and freshest food delivered to your doorsteps</p>
          <div className='text_center'>
          <button className="DownloadNow">
            <img 
          src="/imgs/download-withe.png" 
          alt="Picture of the author" 
          style={{ width: 'auto', height: 'auto' }} 
          />
           Download now</button>
        </div>
        </div>
      </div>
    </main>
  </div>
    <div className='second_section'>
          <Container>
            <div className='second_aline'>
            <Row>
              <Col className="aline_flxed">
                <div className="data_text">
                  <h1>Download Our <br/>
                  Mobile App</h1>
                  <p>Order your favorite meals on the go. Available on the App Store and Google Play.</p>
                  <div className='fixed_section'>
                  <img src='/imgs/Apple.png' />
                  <img src='/imgs/Google.png' />
                  </div>
                </div>
              </Col>
              <Col>
                <img className='image_mobile' src='/imgs/Frame54.png' />
              </Col>
            </Row>
            </div>
          </Container>
      </div>

      <div className='three_section'>
        <div className='images'>
        <img src='/imgs/Frame52.png' />
        <img src='/imgs/Union.png' />
        </div>
        <div className="inner_section">
          <Container>
            <Row>
              <Col>
              <div className='text_line'>
               <p>Salads</p>
               <h1>The Fastes Delivery To Your Favorite Food</h1>
               </div>
              </Col>
              <Col>
                <img className='posishion' src="/imgs/Vector.png" />
              </Col>
            </Row>

            
            </Container>

            <div className='section_slider'>
            <SliderComponent />
            </div>
        </div>
      </div>


      
      <div className='three_section secoond'>
        <div className='images'>
        <img src='/imgs/Union1.png' className="seccond_img" />
        </div>
        <div className="inner_section">
          <Container>
            <Row>
              <Col>
              <div className='text_line'>
               <p>Salads</p>
               <h1>The Fastes Delivery To Your Favorite Food</h1>
               </div>
              </Col>
              <Col>
                <img className='posishion' src="/imgs/Vector.png" />
              </Col>
            </Row>

            
            </Container>

            <div className='section_slider'>
            <SliderComponent />
            </div>
            <img src='/imgs/Union2.png'/>

        </div>

      </div>



      <div className='three_section'>
        <div className='images'>

        </div>
        <div className="inner_section">
          <Container>
            <Row>
              <Col>
              <div className='text_line'>
               <p>Salads</p>
               <h1>The Fastes Delivery To Your Favorite Food</h1>
               </div>
              </Col>
              <Col>
                <img className='posishion' src="/imgs/Vector.png" />
              </Col>
            </Row>

            
            </Container>

            <div className='section_slider'>
            <SliderComponent />
            </div>
        </div>
      </div>



    <div className='About_section'>
      <Aboutcomponent />
    </div>

    <div className="testimonials_section">
      <Testimonials />
    </div>

    <div className='mapping'>
     <Container>
      <Row>
        <Col>
          <img src='/imgs/Map.png' />
        </Col>
        <Col>
          <div className='title_mapping'>
            <p>Location</p>
            <h1>Al Olaya</h1>
            <p className='values'>Hanifa Valley St, Al Olaya, Riyadh 12214</p>

            <div className='mapping_icons'>
              <div>
                <img src='/imgs/location-09.png' />
                <span>Direction</span>
              </div>
              <div>
                <img src='/imgs/call.png' />
                <span>+966592804512</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
     </Container>
    </div>

    <div className="section_footer">
      <FooterComponent />
    </div>

  </div>
  )
}

export default HomeComponent

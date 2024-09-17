/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import './styleHome.css'
import {Container, Row, Col} from 'react-bootstrap';
import Image from 'next/image';
import  './styleHome.css'
import SliderComponent from '../../component/slider/SliderComponent';
import Aboutcomponent from '../../component/aboutSection/Aboutcomponent';
import Testimonials from '../../component/testimonials/Testimonials';
import FooterComponent from '../../component/footer/FooterComponent'
import NavbarComponent from "../../component/navbar/Navbar";
import { translate } from '../../translations/TranslationContext';
import { useState, useEffect } from 'react';
import MappingComponent from '@/app/component/mapping/MappingComponent';
import OurService from '@/app/component/ourService/OurService';

const HomeComponent = () => {
  const [lang, setLang] = useState('en');
  const [homePageData, setHomePageData] = useState<any>({});
  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        const storedLang = localStorage.getItem('lang') || 'en';
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages/home-page`, {
          method: 'GET',
          headers: {
            'Accept-Language': storedLang,
          }
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        setHomePageData(data); 
      } catch (error) {
        console.error('Error fetching home page data:', error);
      }
    };
  
    fetchHomePageData();
  }, []);

  useEffect(() => {
    const storedLang = localStorage.getItem('lang') || 'en';
    setLang(storedLang);
  }, []);


  if (!homePageData) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <div className='HomeNave'>
            <NavbarComponent onLanguageChange={setLang}/>
            </div>
    <div className="section_home">
    <main className="main">
      <div className="hero">

              <video className="video" loop muted autoPlay playsInline>
                <source src={homePageData.data?.sliders[0]?.original} type="video/mp4" />
              </video>

        <div className="overlay">
          <div className="Enjoying">
            <span>{homePageData.data?.title?.split(' ').slice(0, 1).join('')}</span> 
            <img src="/imgs/FZFFBmXoAA3sjs 1.png" /> 
            </div>
            <div className="Enjoying">
            <img src="/imgs/FZFFBmXoAA3sjs 1.png" /> 
            <span>{homePageData.data?.title?.split(' ').slice(1, 2).join('')}</span> 
            </div>
          <p className="lift_time">{homePageData.data?.title?.split(' ').slice(2, 4).join('')}</p>
          <p className="bragraph">{homePageData.data?.description}</p>
          <div className='text_center'>
          <button className="DownloadNow">
            <img 
          src="/imgs/download-05.svg" 
          alt="Picture of the author" 
          style={{ width: 'auto', height: 'auto' }}
          />
           {translate('Download now' , lang)}</button>
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
                  <h1>{homePageData.data?.sections[0].title}</h1>
                  <p>{homePageData.data?.sections[0].slug}</p>
                  <div className='fixed_section'>
                  <a href={homePageData.data?.sections[0].Posts[0].additional.ios}><img src='/imgs/Apple.svg' /></a>
                  <a href={homePageData.data?.sections[0].Posts[0].additional.indriod}><img src='/imgs/Google.svg' /></a>
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
        <img src='/imgs/Frame_52.png' />
        <OurService />
        <img src='/imgs/Union.png' />
        </div>

        {homePageData?.data?.category.map((item: any) => (
            <div key={item.id}>
        <div className="inner_section">
          <Container>
            <Row>
              <Col>
              <div className='text_line'>
              <p>{item.name}</p>
              <h1>{item.description}</h1>
               </div>
              </Col>
              <Col>
                <img className='posishion' src="/imgs/Vector.png" />
              </Col>
            </Row>

            
            </Container>

            <div className='section_slider'>
            <SliderComponent images={item.products[0].image.map((img: any) => img.original)}/>
            </div>
        </div>
      </div>
      ))}

      </div>


      
      {/* <div className='three_section secoond'>
        <div className='images'>
        <img src='/imgs/Union1.png' className="seccond_img" />
        </div>
        <div className="inner_section">
          <Container>
            <Row>
              <Col>
              <div className='text_line'>
               <p>{translate('Salads', lang)}</p>
               <h1>{translate('The Fastes Delivery To Your Favorite Food' , lang)}</h1>
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

      </div> */}



      {/* <div className='three_section'>
        <div className='images'>

        </div>
        <div className="inner_section">
          <Container>
            <Row>
              <Col>
              <div className='text_line'>
               <p>{translate('Salads' , lang)}</p>
               <h1>{translate('The Fastes Delivery To Your Favorite Food' , lang)}</h1>
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
      </div> */}



    <div className='About_section'>
    {/* <Aboutcomponent lang={lang} /> */}
    <div>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div className="title_about">
              <h6>{homePageData.data?.sections[2]?.title}</h6>
              <h1>{homePageData.data?.sections[2]?.slug}</h1>
              <p>{homePageData.data?.sections[2]?.Posts[0]?.description}</p>

              <div className='line_section'>
              {homePageData.data?.sections[2]?.Posts[0]?.children.map((item: any)=>(
              <div className='frist_line' key={item.id}>
                <img src='/imgs/Frame_42.svg' />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
               ))}
              {/* <div className='frist_line'>
                <img src='/imgs/Frame_420.svg' />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div> */}
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <img src={homePageData.data?.sections[2]?.Posts[0]?.attachment[0]?.original} />
          </Col>
        </Row>
      </Container>
    </div>
    </div>

    <div className="testimonials_section">
      <Testimonials lang={lang} />
    </div>

    {/* <div className='mapping'>
     <Container>
      <Row>
        <Col>
        <div className='maping'>
          <img src='/imgs/Map2.png' />
          <button className='mapping_button'><img src='/imgs/Pointlocation.svg'/></button>
          <button className='mapping_button_1'><img src='/imgs/Pointlocation.svg'/></button>
          <button className='mapping_button_2'><img src='/imgs/Pointlocation.svg'/></button>
          <button className='mapping_button_3'><img src='/imgs/Pointlocation.svg'/></button>
          <button className='mapping_button_4'><img src='/imgs/Pointlocation.svg'/></button>
          <button className='mapping_button_5'><img src='/imgs/Pointlocation.svg'/></button>
          <button className='mapping_button_6'><img src='/imgs/Pointlocation.svg'/></button>
          <button className='mapping_button_7'><img src='/imgs/Pointlocation.svg'/></button>
          <button className='mapping_button_8'><img src='/imgs/Pointlocation.svg'/></button>
          <button className='mapping_button_9'><img src='/imgs/Pointlocation.svg'/></button>
          <button className='mapping_button_10'><img src='/imgs/Pointlocation.svg'/></button>
          <button className='mapping_button_11'><img src='/imgs/Pointlocation.svg'/></button>
          </div>
        </Col>
        <Col>
          <div className='title_mapping'>
            <p>{translate('Location' , lang)}</p>
            <h1>{translate('Al Olaya' , lang)}</h1>
            <p className='values'>{translate('Hanifa Valley St, Al Olaya, Riyadh 12214' , lang)}</p>

            <div className='mapping_icons'>
              <div>
                <img src='/imgs/location-09.png' />
                <span>{translate('Direction' , lang)}</span>
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
    </div> */}

  <MappingComponent/>
      
    <div className="section_footer">
      <FooterComponent lang={lang}/>
    </div>

  </div>
  )
}

export default HomeComponent

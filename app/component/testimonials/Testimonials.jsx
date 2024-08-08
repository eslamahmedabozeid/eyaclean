/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Testimonials.css'
const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
          ]
      };


  return (
    <div>
        <div className='title'>
            <p>Testimonials</p>
            <h1>Our Customer Feedbacks</h1>
        </div>

        <div className="slider-container">
      <Slider {...settings}>
        <div className="sliders_testimonials">
            <img src='/sldier/quote-up.png' />

            <div className="text_testimonials">
                <p>Lorem ipsum dolor sit amet consectetur. Augue semper commodo risus hac tellus. Pellentesque laoreet tristique fusce egestas dolor sit bibendum. Sed arcu a risus eget suspendisse nam non id sit.</p>
            </div>
            <div className='flexed_testimonials'>
                <img src='/sldier/Ellipse 8.png' />
                <div className='title_personal'>
                    <h2>Osama Zafar</h2>
                    <p>Product Designer</p>
                </div>
            </div>
        </div>
        <div className="sliders_testimonials">
            <img src='/sldier/quote-up.png' />

            <div className="text_testimonials">
                <p>Lorem ipsum dolor sit amet consectetur. Augue semper commodo risus hac tellus. Pellentesque laoreet tristique fusce egestas dolor sit bibendum. Sed arcu a risus eget suspendisse nam non id sit.</p>
            </div>
            <div className='flexed_testimonials'>
                <img src='/sldier/Ellipse 8.png' />
                <div className='title_personal'>
                    <h2>Osama Zafar</h2>
                    <p>Product Designer</p>
                </div>
            </div>
        </div>
        <div className="sliders_testimonials">
            <img src='/sldier/quote-up.png' />

            <div className="text_testimonials">
                <p>Lorem ipsum dolor sit amet consectetur. Augue semper commodo risus hac tellus. Pellentesque laoreet tristique fusce egestas dolor sit bibendum. Sed arcu a risus eget suspendisse nam non id sit.</p>
            </div>
            <div className='flexed_testimonials'>
                <img src='/sldier/Ellipse 8.png' />
                <div className='title_personal'>
                    <h2>Osama Zafar</h2>
                    <p>Product Designer</p>
                </div>
            </div>
        </div>
        <div className="sliders_testimonials">
            <img src='/sldier/quote-up.png' />

            <div className="text_testimonials">
                <p>Lorem ipsum dolor sit amet consectetur. Augue semper commodo risus hac tellus. Pellentesque laoreet tristique fusce egestas dolor sit bibendum. Sed arcu a risus eget suspendisse nam non id sit.</p>
            </div>
            <div className='flexed_testimonials'>
                <img src='/sldier/Ellipse 8.png' />
                <div className='title_personal'>
                    <h2>Osama Zafar</h2>
                    <p>Product Designer</p>
                </div>
            </div>
        </div>
        <div className="sliders_testimonials">
            <img src='/sldier/quote-up.png' />

            <div className="text_testimonials">
                <p>Lorem ipsum dolor sit amet consectetur. Augue semper commodo risus hac tellus. Pellentesque laoreet tristique fusce egestas dolor sit bibendum. Sed arcu a risus eget suspendisse nam non id sit.</p>
            </div>
            <div className='flexed_testimonials'>
                <img src='/sldier/Ellipse 8.png' />
                <div className='title_personal'>
                    <h2>Osama Zafar</h2>
                    <p>Product Designer</p>
                </div>
            </div>
        </div>
        <div className="sliders_testimonials">
            <img src='/sldier/quote-up.png' />

            <div className="text_testimonials">
                <p>Lorem ipsum dolor sit amet consectetur. Augue semper commodo risus hac tellus. Pellentesque laoreet tristique fusce egestas dolor sit bibendum. Sed arcu a risus eget suspendisse nam non id sit.</p>
            </div>
            <div className='flexed_testimonials'>
                <img src='/sldier/Ellipse 8.png' />
                <div className='title_personal'>
                    <h2>Osama Zafar</h2>
                    <p>Product Designer</p>
                </div>
            </div>
        </div>
      </Slider>
    </div>
    <div className="slider-container">
      <Slider {...settings}>
        <div className="sliders_testimonials">
            <img src='/sldier/quote-up.png' />

            <div className="text_testimonials">
                <p>Lorem ipsum dolor sit amet consectetur. Augue semper commodo risus hac tellus. Pellentesque laoreet tristique fusce egestas dolor sit bibendum. Sed arcu a risus eget suspendisse nam non id sit.</p>
            </div>
            <div className='flexed_testimonials'>
                <img src='/sldier/Ellipse 8.png' />
                <div className='title_personal'>
                    <h2>Osama Zafar</h2>
                    <p>Product Designer</p>
                </div>
            </div>
        </div>
        <div className="sliders_testimonials">
            <img src='/sldier/quote-up.png' />

            <div className="text_testimonials">
                <p>Lorem ipsum dolor sit amet consectetur. Augue semper commodo risus hac tellus. Pellentesque laoreet tristique fusce egestas dolor sit bibendum. Sed arcu a risus eget suspendisse nam non id sit.</p>
            </div>
            <div className='flexed_testimonials'>
                <img src='/sldier/Ellipse 8.png' />
                <div className='title_personal'>
                    <h2>Osama Zafar</h2>
                    <p>Product Designer</p>
                </div>
            </div>
        </div>
        <div className="sliders_testimonials">
            <img src='/sldier/quote-up.png' />

            <div className="text_testimonials">
                <p>Lorem ipsum dolor sit amet consectetur. Augue semper commodo risus hac tellus. Pellentesque laoreet tristique fusce egestas dolor sit bibendum. Sed arcu a risus eget suspendisse nam non id sit.</p>
            </div>
            <div className='flexed_testimonials'>
                <img src='/sldier/Ellipse 8.png' />
                <div className='title_personal'>
                    <h2>Osama Zafar</h2>
                    <p>Product Designer</p>
                </div>
            </div>
        </div>
        <div className="sliders_testimonials">
            <img src='/sldier/quote-up.png' />

            <div className="text_testimonials">
                <p>Lorem ipsum dolor sit amet consectetur. Augue semper commodo risus hac tellus. Pellentesque laoreet tristique fusce egestas dolor sit bibendum. Sed arcu a risus eget suspendisse nam non id sit.</p>
            </div>
            <div className='flexed_testimonials'>
                <img src='/sldier/Ellipse 8.png' />
                <div className='title_personal'>
                    <h2>Osama Zafar</h2>
                    <p>Product Designer</p>
                </div>
            </div>
        </div>
        <div className="sliders_testimonials">
            <img src='/sldier/quote-up.png' />

            <div className="text_testimonials">
                <p>Lorem ipsum dolor sit amet consectetur. Augue semper commodo risus hac tellus. Pellentesque laoreet tristique fusce egestas dolor sit bibendum. Sed arcu a risus eget suspendisse nam non id sit.</p>
            </div>
            <div className='flexed_testimonials'>
                <img src='/sldier/Ellipse 8.png' />
                <div className='title_personal'>
                    <h2>Osama Zafar</h2>
                    <p>Product Designer</p>
                </div>
            </div>
        </div>
        <div className="sliders_testimonials">
            <img src='/sldier/quote-up.png' />

            <div className="text_testimonials">
                <p>Lorem ipsum dolor sit amet consectetur. Augue semper commodo risus hac tellus. Pellentesque laoreet tristique fusce egestas dolor sit bibendum. Sed arcu a risus eget suspendisse nam non id sit.</p>
            </div>
            <div className='flexed_testimonials'>
                <img src='/sldier/Ellipse 8.png' />
                <div className='title_personal'>
                    <h2>Osama Zafar</h2>
                    <p>Product Designer</p>
                </div>
            </div>
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default Testimonials

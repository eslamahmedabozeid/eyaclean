'use client'

import React, { useState,useRef,useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

// import './ProductSlider.css';
import styles from './SliderComponent.module.css'; 
import Image from 'next/image';

const names = [
    { id: 1, name: 'Salads', images: ['/sldier/Group1.png', '/sldier/Group2.png', '/sldier/Group3.png','/sldier/Group1.png'] },
    { id: 2, name: 'Sandwich', images: ['/sldier/Group1.png', '/sldier/Group1.png','/sldier/Group1.png','/sldier/Group1.png'] },
    { id: 3, name: 'Gym meal', images: ['/sldier/Group1.png', '/sldier/Group1.png','/sldier/Group1.png','/sldier/Group1.png'] },
    { id: 4, name: 'bluePary', images: ['/sldier/Group1.png', '/sldier/Group2.png', '/sldier/Group3.png','/sldier/Group1.png'] },
    { id: 5, name: 'Sandin', images: ['/sldier/Group1.png', '/sldier/Group1.png','/sldier/Group1.png','/sldier/Group1.png'] },
    { id: 6, name: 'Good meal', images: ['/sldier/Group1.png', '/sldier/Group1.png','/sldier/Group1.png','/sldier/Group1.png'] },
    { id: 7, name: 'Warsp', images: ['/sldier/Group1.png', '/sldier/Group2.png', '/sldier/Group3.png','/sldier/Group1.png'] },
    { id: 8, name: 'Chicken', images: ['/sldier/Group1.png', '/sldier/Group1.png','/sldier/Group1.png','/sldier/Group1.png'] },
    { id: 9, name: 'Cheese', images: ['/sldier/Group1.png', '/sldier/Group1.png','/sldier/Group1.png','/sldier/Group1.png'] },
    { id: 10, name: 'Cake', images: ['/sldier/Group1.png', '/sldier/Group1.png','/sldier/Group1.png','/sldier/Group1.png'] },
    { id: 11, name: 'Broccoli', images: ['/sldier/Group1.png', '/sldier/Group1.png','/sldier/Group1.png','/sldier/Group1.png'] },
    { id: 12, name: 'Warp', images: ['/sldier/Group1.png', '/sldier/Group2.png', '/sldier/Group3.png','/sldier/Group1.png'] },
    { id: 13, name: 'Chickenflay', images: ['/sldier/Group1.png', '/sldier/Group1.png','/sldier/Group1.png','/sldier/Group1.png'] },
    { id: 14, name: 'Cheeses', images: ['/sldier/Group1.png', '/sldier/Group1.png','/sldier/Group1.png','/sldier/Group1.png'] },
    { id: 15, name: 'Cakes', images: ['/sldier/Group1.png', '/sldier/Group1.png','/sldier/Group1.png','/sldier/Group1.png'] },
    { id: 16, name: 'BroccSoup', images: ['/sldier/Group1.png', '/sldier/Group1.png','/sldier/Group1.png','/sldier/Group1.png'] },

  ];
  
  
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} ${styles.arrow} ${styles.nextArrow}`} style={{ ...style }} onClick={onClick}>
        <div className='sliders'>
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
      </div>
    );
  };
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} ${styles.arrow} ${styles.prevArrow}`} style={{ ...style }} onClick={onClick}>
        <div className='sliders'>
        <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
        </div>
      </div>
    );
  };

const ProductSlider = () => {





    const [selectedNameIndex, setSelectedNameIndex] = useState(0);
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const nameSliderRef = useRef(null);
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const lang = localStorage.getItem('lang') || 'en'; 
        setCurrentLanguage(lang);
      }
    }, []);

    const keenSliderOptions = currentLanguage === 'en'
    ? {
        slides: {
          perView: 8,
          spacing: 15,
        },
        breakpoints: {
          '(max-width: 768px)': {
            slides: {
              perView: 2,
            },
          },
        },
      }
    : {
        loop: true,
        rtl: true,
        slides: {
          perView: 2,
          spacing: 10,
        },
      };

  // استخدام useKeenSlider مع الخيارات المناسبة
  const [sliderRef] = useKeenSlider(keenSliderOptions);

    

    const handleNameClick = (index) => {
      setSelectedNameIndex(index);
  
      if (nameSliderRef.current) {
        nameSliderRef.current.slickGoTo(currentLanguage === 'ar' ? totalSlides - index - 1 : index);
      }
    };
  

    const totalSlides = names.length;
  
    const nameSliderSettings = {
      dots:false,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 8,
      rtl: currentLanguage === 'ar',
      initialSlide: currentLanguage === 'ar' ? totalSlides - 1 : 0,
      focusOnSelect: true,
      beforeChange: (current, next) => setSelectedNameIndex(next),
      responsive: [
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    };
    
  
    const imageSliderSettings = {
        dots: false,
        className: "center",
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            className: "center",
            centerMode: true,
            // centerMode: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            className: "center",
            centerMode: true,
          },
        },
      ],
    };
  
    return (
        <div>



<div className={styles.name_text}>
 {/* Keen Slider for Name Selection */}
 <div ref={sliderRef} className="keen-slider">
        {names.map((name, index) => (
          <div
            key={name.id}
            className={`keen-slider__slide ${styles.nameButton} ${index === selectedNameIndex ? styles.selectedName : ''}`}
            onClick={() => handleNameClick(index)}
          >
            {name.name}
          </div>
        ))}
      </div>
      </div>


        <div className={styles.sliderContainer}>
        {/* Image Slider */}
        <div className=''>
        <div className='slide_image'>
        <Slider {...imageSliderSettings}>
          {names[selectedNameIndex].images.map((image, idx) => (
            <div key={idx} className={styles.productCard}>
              {/* <Image src={image} alt={`Image ${idx}`} width={399} height={399} /> */}
              <img src={image} alt={`Image ${idx}`}/>
              <p className={styles.productName}>{names[selectedNameIndex].name}</p>
            </div>
          ))}
        </Slider>
        </div>
        </div>
        </div>

       


      </div>
      
    )
};

export default ProductSlider;

'use client'

import React from 'react'
import Slider from 'react-slick';
import Image from 'next/image';
import styles from './SliderComponent.module.css'; 

const products = [
  { id: 1, name: 'Product 1', image: '/sldier/Group1.png' },
  { id: 2, name: 'Product 2', image: '/sldier/Group2.png' },
  { id: 3, name: 'Product 3', image: '/sldier/Group3.png' }
];

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} ${styles.arrow} ${styles.nextArrow}`} style={{ ...style }} onClick={onClick}>
      <Image src="/sldier/Frame9.png" alt="Next" width={50} height={50} />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} ${styles.arrow} ${styles.prevArrow}`} style={{ ...style }} onClick={onClick}>
    <Image src="/sldier/Frame10.png" alt="Prev" width={50} height={50} />
  </div>
  );
};

const SliderComponent: React.FC = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <Image src={product.image} alt={product.name} width={399} height={399} />
            <p className={styles.productName}>{product.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderComponent;

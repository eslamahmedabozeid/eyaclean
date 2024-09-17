/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState,useEffect } from 'react';
import './OurService.css';
import styles from './OurService.module.css'; 
import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { translate } from '../../translations/TranslationContext';


const names = [
  {
    id: 1,
    name: 'Business',
    model: [
      {
        id:1,
        icon: "/service/Frame_16.svg",
        title: "Catering",
        prg: "At Saldwich, we provide the freshest and healthiest food options in KSA. Join us in"
      },
      {
        id:2,
        icon: "/service/Frame_17.svg",
        title: "Food Truck",
        prg: "At Saldwich, we provide the freshest and healthiest food options in KSA. Join us in"
      },
      {
        id:3,
        icon: "/service/Frame_18.svg",
        title: "Kiosk",
        prg: "At Saldwich, we provide the freshest and healthiest food options in KSA. Join us in "
      }
    ]
  },
  {
    id: 2,
    name: 'Individual',
    model: [
      {
        id:1,
        icon: "/service/Frame_16.svg",
        title: "loream",
        prg: "At Saldwich, we provide the freshest and healthiest food options in KSA. Join us in"
      },
      {
        id:2,
        icon: "/service/Frame_17.svg",
        title: "Food loream",
        prg: "At Saldwich, we provide the freshest and healthiest food options in KSA. Join us in"
      },
      {
        id:3,
        icon: "/service/Frame_18.svg",
        title: "Kiosk loream",
        prg: "At Saldwich, we provide the freshest and healthiest food options in KSA. Join us in "
      }
    ]
  }
];

const OurService = () => {

  const [lang, setLang] = useState('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('lang') || 'en';
    setLang(storedLang);
  }, []);


  const [selectedNameIndex, setSelectedNameIndex] = useState(0);
  const router = useRouter();

  const handleNameClick = (index: number) => {
    setSelectedNameIndex(index);
  };

  const handleViewMoreClick = (id: number) => {
    router.push(`/order/${id}`);
  };

  return (
    <div>
      <Container>
        <Row>
          <div className='row_center' id='OurServices'>
            <div className='title_service'>
              <p>{translate('Our Services', lang)}</p>   
              <h1>{translate('The Fastest Delivery To Your Favorite Food', lang)}</h1>
              <span>{translate('At Saldwich, we provide the freshest and healthiest food options in KSA. Join us in promoting a healthier lifestyle', lang)}</span>
            </div>
          </div>
            <div className={styles.perant}>
          <div className={styles.name_button}>
            {names.map((name, index) => (
              <div
                key={index}
                className={`${styles.nameButton} ${index === selectedNameIndex ? styles.selectedName : ''}`}
                onClick={() => handleNameClick(index)}
              >
                {name.name}
              </div>
            ))}
          </div>
          </div>
          <div className={styles.grid_box}>
            <Row>
            {names[selectedNameIndex].model.map((item, idx) => (
                <Col xs={12} md={4} key={idx}>
                <div  className={styles.productCard}>
                <img src={item.icon} />
                <h3 className={styles.productName}>{item.title}</h3>
                <p className={styles.productprgraph}>{item.prg}</p>
                <button className='button'  onClick={() => handleViewMoreClick(names[selectedNameIndex].id)}>View More<img src='/service/arrow-right-02.svg'/></button>
              </div>
              </Col>
            ))}
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default OurService;

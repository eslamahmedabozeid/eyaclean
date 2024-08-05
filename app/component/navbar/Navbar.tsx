/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import  './styleNav.css'
import {Container, Row, Col, Button} from 'react-bootstrap';

function Navbar() {
  return (
    <div>
      <Container className='navBar'>
      <div className="flexed">
      <Image src="/Logo.png" width={127.64} 
      height={31.456} alt="Picture of the author"/>

        <ul className='nav_bar'>
          <li>Home</li>
          <li>About Us</li>
          <li>Menu</li>
          <li>Contact Us</li>
        </ul>
      <div className="langu">
        <Button className='downloadButton'>       
            <img 
          src="/imgs/download-04.png" 
          alt="Picture of the author" 
          style={{ width: 'auto', height: 'auto' }} 
          />
        Download App</Button>
      </div>
      </div>
      </Container>

     


    </div>
  )
}

export default Navbar

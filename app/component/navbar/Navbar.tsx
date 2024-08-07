/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import Image from 'next/image'
import  './styleNav.css'
import {Container, Row, Col, Button} from 'react-bootstrap';
import Link from 'next/link';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarComponent() {
  return (
    // <div>
    //   <Container className='navBar'>
    //   <div className="flexed">
    //   <Image src="/Logo.png" width={127.64} 
    //   height={31.456} alt="Picture of the author"/>

    //     <ul className='nav_bar'>
    //       <li><Link href="/"> Home </Link></li>
    //       <li><Link href="/pages/about"> About Us </Link></li>
    //       <li>Menu</li>
    //       <li>Contact Us</li>
    //     </ul>
    //   <div className="langu">
    //     <Button className='downloadButton'>       
    //         <img 
    //       src="/imgs/download-04.png" 
    //       alt="Picture of the author" 
    //       style={{ width: 'auto', height: 'auto' }} 
    //       />
    //     Download App</Button>
    //   </div>
    //   </div>
    //   </Container>

     


    // </div>

    <Navbar expand="lg" className="navBar">
      <Container>
        <Navbar.Brand href="#home"><Image src="/Logo.png" width={127.64} 
      height={31.456} alt="Picture of the author"/></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav_bar">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pages/about">About Us</Nav.Link>
            <Nav.Link href="#link">Menu</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
          <div className="langu">
         <Button className='downloadButton'>       
            <img 
           src="/imgs/download-04.png" 
           alt="Picture of the author" 
           style={{ width: 'auto', height: 'auto' }} 
           />
         Download App</Button>
       </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent

import React from 'react'
import Image from 'next/image'
import  './styleNav.css'
import {Container, Row, Col} from 'react-bootstrap';


function Navbar() {
  return (
    <div>
      <Container>
      <div className="flexed">
        <ul className='nav_bar'>
          <li>تواصل معنا</li>
          <li>سياسة الخصوصية</li>
          <li>سياسة الاسترجاع</li>
        </ul>
      <div className="langu">
        <p>الإنجليزية</p>
      </div>
      </div>
      </Container>

      <div className='logo'>
        <Image src="/logo.png" width={500} height={500} alt="Picture of the author"/>
      </div>


    </div>
  )
}

export default Navbar

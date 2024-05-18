import React from 'react'
import './styleHome.css'
import {Container, Row, Col} from 'react-bootstrap';
import Image from 'next/image';




const HomeComponent = () => {
  return (
    <div className="section_home">
      <Container>
        <Row>
        <Col>
          <Image src="/logo.png" width={500} height={500} alt="Picture of the author"/>
        </Col>
        <Col>
        
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeComponent

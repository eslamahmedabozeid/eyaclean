/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import './Working.css';

const HowWorkingComponent = () => {
  return (
    <div>
        <div className='title_how'>
            <p>How We Make quality Foods </p>
            <h1>How We work It?</h1>
        <Container>
            <Row>
                <Col>
                    <div className='grid_working'>
                    <img src='/imgs/Rectangle1.png' />
                    <h2>Lorem ipsum dolor </h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Vestibulum urna.</p>
                    </div>
                </Col>
                <Col>
                    <div className='grid_working'>
                    <img src='/imgs/Rectangle1.png' />
                    <h2>Lorem ipsum dolor </h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Vestibulum urna.</p>
                    </div>
                </Col>
                <Col>
                    <div className='grid_working'>
                    <img src='/imgs/Rectangle1.png' />
                    <h2>Lorem ipsum dolor </h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Vestibulum urna.</p>
                    </div>
                </Col>
                <Col>
                    <div className='grid_working'>
                    <img src='/imgs/Rectangle1.png' />
                    <h2>Lorem ipsum dolor </h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Vestibulum urna.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </div>
  )
}

export default HowWorkingComponent

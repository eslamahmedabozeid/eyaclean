import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './AboutStyle.css';

const Aboutcomponent = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col xs={12} sm={12} md={6}>
                <div className="title_about">
                    <h6>About Us</h6>
                    <h1>The Fastes Delivery To Your Favorite Food</h1>
                    <p>At Saldwich, we provide the freshest and healthiest food options in KSA. Join us in promoting a healthier lifestyle</p>

                    <div className='line_section'>
                        <div className='frist_line'>
                            <img src='/imgs/Frame42.png' />
                            <div>
                                <h3>Sustainable Sourcing</h3>
                                <p>Locally sourced, eco-friendly ingredients for the freshest produce.</p>
                            </div>
                        </div>
                        <div className='frist_line'>
                        <img src='/imgs/Frame420.png' />
                            <div>
                                <h3>Sustainable Sourcing</h3>
                                <p>Locally sourced, eco-friendly ingredients for the freshest produce.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <img src='/imgs/image7.png' />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Aboutcomponent

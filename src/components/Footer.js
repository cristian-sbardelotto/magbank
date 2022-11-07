import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/MAGbank.png';
import appleStore from '../assets/applestore.png';
import googlePlay from '../assets/googleplay.png';
import './Footer.scss';

const Footer = () => (
  <footer className='footer'>
    <Container>
      <Row className='text-center py-5'>
        <Col xs={12} lg={6} className='text-lg-left footer__logo'>
          <Image src={logo}/>
        </Col>

        <Col xs={12} lg={4} className='footer__apps'>
          <Image src={appleStore} />
          <Image src={googlePlay} className='ms-2'/>
        </Col>

        <Col xs={12} lg={2} className='d-flex align-items-center justify-content-center'>
          <FontAwesomeIcon icon={faFacebookSquare} color='#7c7c7c' size='2x' />
          <FontAwesomeIcon icon={faTwitter} color='#7c7c7c' size='2x' className='ms-2'/>
          <FontAwesomeIcon icon={faYoutube} color='#7c7c7c' size='2x' className='ms-2'/>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer;
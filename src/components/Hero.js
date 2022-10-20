import React from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import logo from '../assets/logo__magic-pay.png'

const Hero = () => (
  <div className="jumbotron text-center text-light">
      <Row className="my-lg-5">
        <Col lg className="text-lg-right my-lg-5">
          <Image src={logo} />
        </Col>
        <Col lg className="text-lg-left my-lg-5">
          <p>Pague suas contas pelo nosso APP</p>
          <Button variant="outline-light">Abra sua conta</Button>
        </Col>
      </Row>
    </div>
);

export default Hero;

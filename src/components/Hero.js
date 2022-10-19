import React from 'react';
import { Button, Image } from 'react-bootstrap';
import logo from '../assets/logo__magic-pay.png'

const Hero = () => (
  <div className="jumbotron text-center">
    <div className="container-fluid bg-light text-dark p-5">
      <Image src={logo} />
      <p>Pague suas contas pelo nosso APP</p>
      <Button variant="outline-light">Abra sua conta</Button>
    </div>
  </div>
);

export default Hero;

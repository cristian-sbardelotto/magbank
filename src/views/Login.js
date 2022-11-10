import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Form, Button, Image } from 'react-bootstrap';
import logo from '../assets/logo-login.png';
import './Login.scss'

const Login = ({ auth }) => {
  const [name, setName] = useState();
  const [account, setAccount] = useState();
  const navigate = useNavigate();

  const handleSubmit = () => {
    auth.login(name, account, navigate('/dashboard'));
  };
  
  return (
    <section className='login'>
      <div className='login__container'>
        <Row>
          <Col className='text-center text-light'>
          <Image src={logo} className='mb-5' />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='lead'>Nome Completo</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='lead'>Número da Conta</Form.Label>
                <Form.Control type="number" value={account} onChange={(e) => setAccount(e.currentTarget.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='lead mt-4'>Senha</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Button className='mt-3' id='login__button' variant="success" type="submit" onClick={handleSubmit}>
                Acessar Conta
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Login;
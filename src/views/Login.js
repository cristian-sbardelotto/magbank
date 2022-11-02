import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import logo from '../assets/logo-login.png';
import './Login.scss'

const Login = () => (
  <section className='login'>
    <div className='login__container'>
      <Row>
        <Col className='text-center text-light'>
        <Image src={logo} className='mb-5' />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Número da Conta</Form.Label>
              <Form.Control type="number" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button variant="success" type="submit">
              Criar Conta
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  </section>
);

export default Login;
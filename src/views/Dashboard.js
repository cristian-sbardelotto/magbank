import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircle } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.scss';

import AccountBalance from '../components/AccountBalance';
import { useState } from "react";

const Dashboard = ({ className = false }) => {
  const [ activeLink, setActiveLink ] = useState(0);

  const links = [
    { text: 'Minha Conta', path: '/dashboard', exact: true },
    { text: 'Pagamentos', path: '/dashboard/payments' },
    { text: 'Extrato', path: '/dashboard/history' },
  ];


  const data = { 
    latestBalance: [
      {date: '22/07', description: 'Saque 24h 012345', value:'300,00'},
      {date: '21/07', description: 'Supermercado 123312132', value:'275,00'},
      {date: '20/07', description: 'NETFLIX 312312', value:'30,00'},
      {date: '15/07', description: 'Farmácia 12445415', value:'350,00'}
  ],

    futureBalance: [
      {date: '22/08', description: 'Salário 012345', value:'3000,00'},
      {date: '21/08', description: 'Imagine 123312132', value:'275,00'},
      {date: '20/08', description: 'NETFLIX 312312', value:'30,00'},
      {date: '15/08', description: 'Farmácia 12445415', value:'350,00'}
  ]
};

  return (
    <Container className={`dashboard py-5 ${className ? className : ''}`}>       
     <Row> 
        <Col xs={12} lg={4}>
          <Row className='align-items-center mb-5'>
            <Col xs={3}>
              <span className='dashboard__user-avatar'>
                <FontAwesomeIcon icon={faCircle} size='5x' color='#f8f9fa' />
                <FontAwesomeIcon className='dashboard__user-icon' icon={faUser} size='3x' color='#7c7d7d' />
              </span>
            </Col>
            <Col xs={9}>
              <h4>Cristian Sbardelotto</h4>
              <p className='text-muted'>ag: 1234 c/: 4321-5</p>
            </Col>
          </Row>
          <div className='d-grid gap-2'>
            {links.map(({ text, path, exact }, key) => (
            <Link to={path} exact={exact ? exact : false} key={key}>
              <Button className={`dashboard__button text-start ${key === activeLink ? 'dashboard__button--active' : ''}`} variant='link' size='lg' 
              onClick={() => setActiveLink(key)}>
                {text}
              </Button>
            </Link>
            ))}
          </div>
        </Col>

        <Routes>
          <Route path='history' element={<h2>History</h2>} />
          <Route path='payments' element={<h2>Pagamentos</h2>} />
          <Route path='/' element={<AccountBalance data={data} />} />
        </Routes>
     </Row>
    </Container>
  );
};

export default Dashboard;
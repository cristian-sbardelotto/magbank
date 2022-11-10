import React from 'react';
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircle } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.scss';

import AccountBalance from '../components/AccountBalance';
import AccountPayments from '../components/AccountPayments';
import AccountHistory from '../components/AccountHistory';

const Dashboard = ({ className = false, name, account }) => {
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
  ],
    history: [
      {date: '17/07', description: 'SAQUE 24H 012345', value: '200,00-', balance: ''},
      {date: '17/07', description: 'SALDO DO DIA', value: '', balance: '2.7800,00'},
      {date: '19/07', description: 'ESTACIONAMENTO 123234', value: '12,00-', balance: ''},
      {date: '19/07', description: 'COMPRA INTERNET 123432', value: '450,00-', balance: ''},
      {date: '19/07', description: 'SALDO DO DIA', value: '', balance: '2.318,00'},
      {date: '21/07', description: 'SUPERMERCADO 2312332', value: '275,90-', balance: ''},
      {date: '21/07', description: 'ESTACIONAMENTO 123234', value: '12,00-', balance: ''},
      {date: '21/07', description: 'SHOPPING 123432', value: '180,00-', balance: ''},
      {date: '21/07', description: 'SALDO DO DIA', value: '', balance: '1,851,00'},
      {date: '22/07', description: 'SUPERMERCADO 2312332', value: '275,90-', balance: ''},
      {date: '22/07', description: 'DEPÓSITO 123234', value: '1,000,00-', balance: ''},
      {date: '22/07', description: 'SALDO DO DIA', value: '', balance: '2576,00'},
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
              <h4>{name}</h4>
              <p className='text-muted'>{account}</p>
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
          <Route path='history' element={<AccountHistory data={data} />} />
          <Route path='payments' element={<AccountPayments />} />
          <Route path='/' element={<AccountBalance data={data} />} />
        </Routes>
     </Row>
    </Container>
  );
};

export default Dashboard;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircle } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.scss';

import AccountBalance from '../components/AccountBalance';

const Dashboard = () => {

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

    <Container className='dashboard py-5'>
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
              <Link to='/dashboard'>
                <Button className='dashboard__button dashboard__button--active text-start' variant='link' size='lg'>Minha conta</Button>
              </Link>
              <Link to='/dashboard/payments'>
                <Button className='dashboard__button text-start' variant='link' size='lg'>Pagamentos</Button>
              </Link>
              <Link to='/dashboard/history'>
                <Button className='dashboard__button text-start' variant='link' size='lg'>Extrato</Button>
              </Link>
            </div>
          </Col>

          <Routes>
            <Route path='/dashboard/history' element={<h2>Extratos</h2>} />
            <Route path='/dashboard/payments' element={<h2>Pagamentos</h2>} />
            <Route index path='/dashboard' element={<AccountBalance data={data} />} />
          </Routes>

        </Row>
      </Container>


  );
};

export default Dashboard;
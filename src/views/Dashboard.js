import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.scss';

const Dashboard = () => (
  <Container>
    <Row>
      <Col xs={12} lg={3}>
        <Row>
          <Col xs={4}>
            <FontAwesomeIcon icon={faUser} size='4x' />
          </Col>
          <Col xs={8}>
            <h2>Cristian</h2>
            <p className='text-muted'>ag: 1234 c/: 4321-5</p>
          </Col>
        </Row>
      </Col>

      <Col xs={12} lg={3}></Col>
      <Col xs={12} lg={6}></Col>
    </Row>
  </Container>
);

export default Dashboard;
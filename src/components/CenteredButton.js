import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import './CenteredButton.scss';

const CenteredButton = ({ children }) => (
  <Container>
    <Row className='d-flex justify-content-center'>
      <Button className='my-5 py-3 px-5 open-account' variant='success' style={{ width: 'fit-content' }}>
        {children}
      </Button>
    </Row>
  </Container>
);

export default CenteredButton;
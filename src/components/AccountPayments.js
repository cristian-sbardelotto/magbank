import React from 'react';
import { Col, Tab, Tabs, Form, Button } from 'react-bootstrap';

const AccountPayments = ({ data }) => (
  <>
    <Col xs={12} lg={8} className='mt-lg-5 pt-lg-5'>
      <h3 className='my-4'>Pagamentos</h3>
      <Tabs defaultActiveKey='boleto' className='pt-lg-3'>
        <Tab eventKey='boleto' title='Boleto'>
          <Form> 
            <Form.Group className="my-5" controlId="formBarCode">
              <Form.Label>Código de barras</Form.Label>
              <Form.Control className="mb-3" type='number' placeholder='Insira o código de barras' />
            </Form.Group>
            <Form.Group controlId='formPaymentType' key='inline-radio'>
              <Form.Label className='mt-4'>Forma de Pagamento</Form.Label>
              <div className='d-flex gap-5 mb-5'>
                <Form.Check type='radio' id='debit' label='Débito em Conta Corrente' name='paymentType' />
                <Form.Check type='radio' id='credit' label='Cartão de Crédito' name='paymentType' />
              </div>
            </Form.Group>
            <Button variant='success'>Continuar</Button>
          </Form>
        </Tab>
        <Tab eventKey='transfer' title='Transferência'></Tab>
      </Tabs>
    </Col>
  </>
);


export default AccountPayments;
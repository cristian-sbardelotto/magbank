import React from "react";
import { Container, Col, Row, Button } from 'react-bootstrap';
import IconText from "./IconText";
import { faMobileAlt, faMobile, faGlobe, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import './Institutional.scss';

const Institutional = () => (
  <section className="institutional text-light py-5">
    <Container>
      <Row>
        <Col xs={12} lg={5} />
        <Col xs={12} lg={7}>
          <h2 className="institutional-title my-5">Já nascemos digital</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie quis nisi quis suscipit. In convallis mauris eu ipsum mattis eleifend. Aliquam pretium venenatis aliquet. Praesent fringilla posuere eros id pharetra. Nulla suscipit nisl et ultrices aliquam. Ut in gravida neque, sit amet blandit neque. Duis euismod diam eros, a suscipit odio ultrices vel. Integer interdum erat nec metus convallis hendrerit.
          </p>

          <IconText icon={faMobileAlt} color='#fff' className='mb-2'>
            Sem fila e sem burocracia
          </IconText>

          <IconText icon={faMobile} color='#fff' className='mb-2'>
            Simples e prático
          </IconText>

          <IconText icon={faGlobe} color='#fff' className='mb-2'>
            Abertura de conta 100% online
          </IconText>

          <IconText icon={faShieldAlt} color='#fff' className='mb-2'>
            Transações mais seguras
          </IconText>


          <Button variant='outline-light' className="mt-5">
            Abra sua conta
          </Button>
        </Col>
      </Row>
    </Container>


  </section>
);

export default Institutional;
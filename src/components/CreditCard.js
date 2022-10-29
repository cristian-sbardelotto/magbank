import React from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMobile, faShoppingCart, faWallet} from '';
import './CreditCard.scss';

const Credit = () => (
  <Container>
    <Col>
      <Row>
        <h2 className="mt-4">Cartão de crétido</h2>
      </Row>    
      <Row className="d-inline">
        <p className="d-inline">Crédito Pessoal</p>
        <p className="d-inline">Pagamentos Online</p>
        {/* <FontAwesomeIcon icon={"fa-solid fa-credit-card"} /> */}
      </Row>
      <br /> <br />
      <Row className="d-inline my-5">
        <p className="d-inline">APP</p>
        <p className="d-inline">Carteira Digital</p>
      </Row>
    </Col>
    <Col>
      <img src="../assets/credit-card.png" alt="img" />
    </Col>
  </Container>
);

export default Credit;
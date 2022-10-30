import React from 'react';
import { Col, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconText = ({
  icon,
  size = 1,
  className = '',
  textClassName = '',
  color = '#000',
  children
}) => (
  <Row className={`d-flex align-items-center ${className}`}>
    <Col xs={size} className="d-flex justify-content-center">
      <FontAwesomeIcon icon={icon} size={`${size}x`} color={color} className='' />
    </Col>
    <Col xs={12 - size} className={textClassName}>
      {children}
    </Col>
  </Row>
);

export default IconText;
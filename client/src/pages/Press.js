import React from 'react';
import { Parallax } from 'react-parallax';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Press.css';
// import PressCard from '../components/PressCard';

const Press = () => {

  return (
    <div>
      <Parallax bgImage="https://laura-cullen.s3.us-west-1.amazonaws.com/studio.png" strength={500}>
        <div style={{ height: 500 }}>
          <div className='press'>Press</div>
        </div>
      </Parallax>

      <Container fluid>
        <Row>
          <Col>
              <h3>No Results to Display</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Press;

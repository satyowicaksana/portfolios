import React from 'react';
import { Row, Col, Typography } from 'antd';
import './App.css';
import Portfolios from './Portfolios';

const { Title } = Typography

const App = () => (
  <div className="App">
    <Row>
      <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{textAlign: 'center'}}>
        <Title>Portfolios</Title>
        <h3>Satyo Wicaksana</h3>
        <img style={{ width: '90%'}} src={require('./assets/illustration.jpg')} alt="illustrartion"/>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
        <Portfolios></Portfolios>
      </Col>
    </Row>
  </div>
);

export default App;

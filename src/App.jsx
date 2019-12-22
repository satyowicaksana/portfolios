import React from 'react';
import { Row, Col, Typography } from 'antd';
import './App.css';
import Portfolios from './Portfolios';

const { Title } = Typography

const App = () => (
  <div className="App">
    <Title>Portfolios - Satyo Wicaksana</Title>
    <Row>
      <Col span={12}>
        <Portfolios></Portfolios>
      </Col>
      <Col span={12}>
        a
      </Col>
    </Row>
  </div>
);

export default App;

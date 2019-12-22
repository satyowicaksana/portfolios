import React from 'react';
import { List, Avatar, Icon } from 'antd';

const data = [
  {
    title: 'Check.it',
    description: 'Todo list web',
    content: (
      <ul>
        <li>jQuery</li>
        <li>Materialize</li>
      </ul>
    )
  }
];

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Portfolios = () => (
  <List
    itemLayout="vertical"
    dataSource={data}
    renderItem={item => (
      <List.Item
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={require('./assets/checkit-logo.png')} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
)

export default Portfolios
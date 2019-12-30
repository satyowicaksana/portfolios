import React from 'react';
import { List, Avatar } from 'antd';
import './Portfolios.css'

const data = [
  {
    name: 'checkit',
    title: 'Check.it',
    description: 'Todo List web',
    content: (
      <ul>
        <li>jQuery</li>
        <li>Materialize</li>
        <li>Express</li>
        <li>Mongoose</li>
      </ul>
    ),
    link: 'http://checkit.satyowicaksana.com'
  },
  {
    name: 'spotlight',
    title: 'Spotlight',
    description: 'Article Posting web',
    content: (
      <ul>
        <li>Vue.js</li>
        <li>Buefy</li>
        <li>Express</li>
        <li>Mongoose</li>
      </ul>
    ),
    link: 'http://spotlight.satyowicaksana.com'
  },
  {
    name: 'omniverse',
    title: 'Omniverse',
    description: 'E-commerce web',
    content: (
      <ul>
        <li>Vue.js</li>
        <li>Vuetify</li>
        <li>Express</li>
        <li>Mongoose</li>
      </ul>
    ),
    link: 'http://omniverse.satyowicaksana.online'
  },
  {
    name: 'fakeoverflow',
    title: 'Fake Overflow',
    description: 'Stack Overflow clone web',
    content: (
      <ul>
        <li>Vue.js</li>
        <li>Buefy</li>
        <li>Express</li>
        <li>Mongoose</li>
      </ul>
    ),
    link: 'http://fakeoverflow.satyowicaksana.online'
  },
  {
    name: 'peregrine',
    title: 'Peregrine',
    description: 'Kanban (task manager) web',
    content: (
      <ul>
        <li>Vue.js</li>
        <li>Buefy</li>
        <li>Express</li>
        <li>Firebase</li>
      </ul>
    ),
    link: 'http://peregrine.satyowicaksana.online'
  },
  {
    name: 'shield',
    title: 'S.H.I.E.L.D. Database',
    description: 'Superhero List (react exercise) web',
    content: (
      <ul>
        <li>React.js</li>
        <li>Material UI</li>
        <li>Express</li>
        <li>Firebase</li>
      </ul>
    ),
    link: 'https://shield-database.firebaseapp.com'
  },
  {
    name: 'vaultron',
    title: 'Vaultron',
    description: 'Password Manager web',
    content: (
      <ul>
        <li>React.js</li>
        <li>React Semantic UI</li>
        <li>Express</li>
        <li>Firebase</li>
      </ul>
    ),
    link: 'https://vaultron-pass.firebaseapp.com'
  },
];

const Portfolios = () => (
  <List
    itemLayout="vertical"
    dataSource={data}
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    renderItem={item => (
      <List.Item
        style={{padding: '5%'}}
        extra={
          <a href={item.link}>
            <img
              className="porto-image"
              alt="logo"
              src={require(`./assets/${item.name}-thumbnail.png`)}
            />
          </a>
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={require(`./assets/${item.name}-logo.png`)} />}
          title={<a href={item.link}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
)

export default Portfolios
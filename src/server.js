import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './app/modules';
import { enableMobile } from './app/modules/device';

import App from './app/app';
import template from './template';

//import database configuration
import db from './db/dbConfig';
//import database controllers
// import {addUser} from './controllers/event-controllers';

//database connection
db.connect()
  .then(obj => {
    console.log('connected to db')
    // db.query('SELECT * FROM "Users"')
    // .then((resp) => console.log(resp))
    // db.query('SELECT * FROM "Services"')
    // .then((resp) => console.log(resp))
  })
  .catch(error => console.log('error connecting'));

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const store = createStore(reducers);

  store.dispatch(enableMobile());
  const state = store.getState();

  const appString = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  res.send(template({
    body: appString,
    title: 'Hello World from the server',
    initialState: JSON.stringify(state)
  }));
});

//server routes

//Create New Routes
server.post('/createuser', (req, res) => {
  console.log('hello create user')
  res.send('hello add user');
})
//Join a Group
server.post('/joingroup', (req, res) => {
  console.log('hello join group')
  res.send('hello join group');
})
//Leave a Group
server.post('/leavegroup', (req, res) => {
  console.log('hello leave group')
  res.send('hello leave group');
})
//Home
server.get('/home', (req, res) => {
  console.log('hello home')
  res.send('hello home');
})

server.listen(8080, () => {
  console.log('listening on port 8080');
});

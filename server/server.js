const express = require('express');
const server = express();
const path = require('path')


server.use('/assets', express.static(path.join(__dirname, 'assets')))
server.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

server.get('/api/tasks', (req, res, next) => {
  console.log('get tasks');
  ToDo.findAll()
    .then(task => {
      res.send(task);
    })
    .catch(next);
});

module.exports = { server }
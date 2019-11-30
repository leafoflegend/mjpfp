const express = require('express');
const server = express();
const path = require('path');
const { connection } = require('./db/db.js');
const PORT = 5000

connection
  .sync()
  .then(() => {
    server.listen(PORT, () => {
      console.log('listening on port:', PORT);
      console.log('click me --->', `http://localhost:${PORT}`);
    });
  })
  .catch(e => {
    console.log('connection error', e);
  });


server.use(express.static(path.join(__dirname, 'dist')));

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

module.exports = { server };

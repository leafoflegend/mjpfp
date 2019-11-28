const { server } = require('./server');
const { connection } = require('./db/db.js');
const PORT = 5000;
//console.log(server)
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

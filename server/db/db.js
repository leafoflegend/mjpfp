const Sequelize = require('sequelize');
const PG_URI = 'postgres://localhost/tasks'
const connection = new Sequelize(PG_URI, {logging: false});

const ToDo = connection.define('toDo', {
  taskName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

module.exports = { connection }
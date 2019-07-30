const { connect } = require("mongoose");

const db = connect('mongodb://localhost/todos');

module.exports = db;


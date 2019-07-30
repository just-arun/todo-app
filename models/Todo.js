const { Schema, model } = require("mongoose");

const TodoSchema = Schema({
  title: {
      type: String,
      require: true
  },
  body: {
      type: String,
      require: true
  }
});

const Todo = model("Todo", TodoSchema);

module.exports = Todo;

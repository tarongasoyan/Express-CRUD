const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  subject: String,
  department: String
});

module.exports = mongoose.model('Teacher', teacherSchema);
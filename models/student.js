const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    telephone: String,
    age: Number,
    school: String,
    classroom: Number,
    grade: String
});

module.exports = mongoose.model('Student', studentSchema);
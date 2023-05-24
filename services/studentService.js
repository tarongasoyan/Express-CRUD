const Student = require('../models/student');

async function createStudent(studentData) {
    if (!studentData || Object.keys(studentData).length == 0) {
        res.status(404).json({error: 'Data should not be empty'});
    }
    const student = new Student(studentData);
    return student.save();
}

async function updateStudent(studentId, studentData) {
    if (!studentId) {
        res.status(404).json({error: 'Student ID is not found'});
    }

    if (!studentData || Object.keys(studentData).length === 0) {
        res.status(404).json({error: 'Data should not be empty'});
    }

    return Student.findByIdAndUpdate(studentId, studentData, {new: true});
}

async function deleteStudent(studentId) {
    if (!studentId) {
        res.status(404).json({error: 'Student ID is not found'});
    }

    return Student.findByIdAndDelete(studentId);
}

async function getStudent(studentId) {
    if (!studentId) {
        res.status(404).json({error: 'Student ID is not found'});
    }

    return Student.findById(studentId);
}

async function getStudents() {
    return Student.find();
}

module.exports = {
    createStudent,
    updateStudent,
    deleteStudent,
    getStudent,
    getStudents
};

const Teacher = require('../models/teacher');

async function createTeacher(teacherData) {
    if (!teacherData || Object.keys(teacherData).length == 0) {
        res.status(400).json({error: 'Data should not be empty'});
    }
    const teacher = new Teacher(teacherData);
    return teacher.save();
}
  
async function updateTeacher(teacherId, teacherData) {
    if (!teacherId) {
        res.status(404).json({error: 'Teacher ID is not found'});

    }

    if (!teacherData || Object.keys(teacherData).length === 0) {
        res.status(400).json({error: 'Data should not be empty'});

    }

    return Teacher.findByIdAndUpdate(teacherId, teacherData, { new: true });
}

async function deleteTeacher(teacherId) {
    if (!teacherId) {
        res.status(404).json({error: 'Teacher ID is not found'});
    }

    return Teacher.findByIdAndDelete(teacherId);
}

async function getTeacher(teacherId) {
    if (!teacherId) {
        res.status(404).json({error: 'Teacher ID is not found'});

    }

    return Teacher.findById(teacherId);
}

async function getTeachers() {
    return Teacher.find();
}

module.exports = {
    createTeacher,
    updateTeacher,
    deleteTeacher,
    getTeacher,
    getTeachers
};
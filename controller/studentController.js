const studentService = require('../services/studentService');

async function createStudent(req, res) {
    try {
        const student = await studentService.createStudent(req.body);
        res.json(student);
    } catch(error) {
        res.status(500).json({error: 'Internal server Error'});
    }
}

async function updateStudent(req, res) {
    try {
        const student = await studentService.updateStudent(req.params.id, req.body);
        res.json(student);
    } catch(error) {
        res.status(500).json({error: 'Internal server error'});
    }
}

async function deleteStudent(req, res) {
    try {
        const student = await studentService.deleteStudent(req.params.id);
        res.sendStatus(204);
    } catch(error) {
        res.status(500).json({error: 'Internal server error'})
    }
}

async function getStudent(req, res) {
    try {
        const student = await studentService.getStudent(req.params.id);
        res.send(student);
    } catch(error) {
        res.status(500).json({error: 'Internal server error'});
    }
}

async function getStudents(req, res) {
    try {
        const student = await studentService.getStudents();
        res.send(student);
    } catch(error) {
        res.status(500).json({error: 'Internal server error'});
    }   
}

module.exports = {
    createStudent,
    updateStudent,
    deleteStudent,
    getStudent,
    getStudents
};
const teacherService = require('../services/teacherService');

async function createTeacher(req, res) {
    try {
      const teacher = await teacherService.createTeacher(req.body);
      res.json(teacher);
    } catch (error) {
      res.status(500).json({error: 'Internal Server error'});
    }
}

async function updateTeacher(req, res) {
    try {
        const teacher = await teacherService.updateTeacher(req.params.id, req.body);
        res.json(teacher);
    } catch(error) {
        res.status(500).json({error: 'Internal server error'});
    }
} 

async function deleteTeacher(req, res) {
    try {
        const teacher = await teacherService.deleteTeacher(req.params.id);
        res.sendStatus(204);
    } catch(error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
}

async function getTeacher(req, res) {
    try {
        const teacher = await teacherService.getTeacher(req.params.id);
        res.send(teacher);
    } catch(error) {
        res.status(500).json({error: 'Internal server error'});
    }
}

async function getTeachers(req, res) {
    try {
        const teacher = await teacherService.getTeachers();
        res.send(teacher);
    } catch(error) {
        res.status(500).json({error: 'Internal server error'});
    }
}

module.exports = {
    createTeacher,
    updateTeacher,
    deleteTeacher,
    getTeacher,
    getTeachers
  };
const express = require('express');
const teacherController = require('../controller/teacherController');

const router = express.Router();

router.get('/', teacherController.getTeachers);
router.post('/', teacherController.createTeacher);
router.put('/:id', teacherController.updateTeacher);
router.delete('/:id', teacherController.deleteTeacher);
router.get('/:id', teacherController.getTeacher);

module.exports = router;
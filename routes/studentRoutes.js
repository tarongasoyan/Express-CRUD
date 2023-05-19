const express = require('express');
const studentController = require('../controller/studentController');

const router = express.Router();

router.get('/', studentController.getStudents);
router.post('/', studentController.createStudent)
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);
router.get('/:id', studentController.getStudent);

module.exports = router;
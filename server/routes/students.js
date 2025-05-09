const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// GET all students
router.get('/', async (req, res) => {
    try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
});

// GET student by ID
router.get('/:id', async (req, res) => {
    try {
    const student = await Student.findById(req.params.id);
    if (!student) {
        return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
});

// POST create a new student
router.post('/', async (req, res) => {
    const student = new Student(req.body);
    try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
    } catch (err) {
    res.status(400).json({ message: err.message });
    }
});

// PUT update student by ID
router.put('/:id', async (req, res) => {
    try {
    const updatedStudent = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    );
    if (!updatedStudent) {
        return res.status(404).json({ message: 'Student not found' });
    }
    res.json(updatedStudent);
    } catch (err) {
    res.status(400).json({ message: err.message });
    }
});

// DELETE student by ID
router.delete('/:id', async (req, res) => {
    try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
        return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ message: 'Student deleted successfully' });
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
});

module.exports = router;
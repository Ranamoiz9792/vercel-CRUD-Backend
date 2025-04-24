const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createUser);        // Create
router.get('/list', userController.getUsers);           // Read all
router.get('/getbyid/:id', userController.getUserById);     // Read one
router.put('/update/:id', userController.updateUser);      // Update
router.delete('/delete/:id', userController.deleteUser);   // Delete

module.exports = router;

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');


router.post('/', UserController.createUser);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUserById);
router.delete('/:id', UserController.deleteUserById);

module.exports = router;

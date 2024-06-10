const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/users/:userId', userController.getUser);
router.get('/users', userController.getAllUsers);
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;
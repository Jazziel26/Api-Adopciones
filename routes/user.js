const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController');
const userValidator = require('../validations/userValidator');
const jwtToken = require("../validations/jwtValidation");

router.get('/user', jwtToken.validateToken, userValidator.id, usersController.getUser);
router.get('/users', jwtToken.validateToken, usersController.getUsers);
router.post('/user', jwtToken.validateToken, userValidator.add, usersController.postUser);
router.post('/login', user.usersController.getLogin);
router.put('/user', jwtToken.validateToken, userValidator.update, usersController.putUser);
router.delete('/user', jwtToken.validateToken,userValidator.id, usersController.deleteUser);

module.exports = router;
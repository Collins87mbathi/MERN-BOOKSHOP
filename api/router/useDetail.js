const express = require('express');
const router = express.Router();
const {UpdateUser,DeleteUser,allUsers} = require('../controllers/userfucctionality');

const {verifyTokenAndAdmin,verifyTokenAndAuthorization} = require('./vertifyToken');

router.route('/', verifyTokenAndAdmin).get(allUsers);
router.route('/:id',verifyTokenAndAdmin).delete(DeleteUser);
router.route('/:id',verifyTokenAndAuthorization).put(UpdateUser);

module.exports = router;

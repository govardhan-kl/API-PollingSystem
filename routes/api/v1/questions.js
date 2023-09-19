const express = require('express');
const router = express.Router();
const question_controller = require('../../../controllers/api/v1/questions_controller');


router.post('/create',question_controller.create);

module.exports = router
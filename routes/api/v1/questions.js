const express = require('express');
const router = express.Router();
const question_controller = require('../../../controllers/api/v1/questions_controller');


router.post('/create',question_controller.create);
router.post('/:id/options/create',question_controller.create_options);
router.delete('/:id/delete',question_controller.delete);
router.get('/:id',question_controller.display);

module.exports = router
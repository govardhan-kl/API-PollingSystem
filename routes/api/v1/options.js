const express = require('express');
const router = express.Router();
const option_controller = require('../../../controllers/api/v1/options_controller')

router.delete('/:id/delete',option_controller.deleteOption)
router.get('/:id/add_vote',option_controller.add_vote);

module.exports = router
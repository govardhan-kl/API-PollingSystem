const express = require('express');
const router = express.Router();

router.use('/home',function(req,res){
    res.send('<h1>API Polling System</h1>')
})
router.use('/questions',require('./questions'));
router.use('/options',require('./options'));

module.exports = router
var express = require('express');
var router = express.Router();

/* GET dishes listing. */
router.get('/', function(req, res, next) {
  res.send('respond with all dishes here!');
});


router.get('/:dishId', function(req, res, next) {
    res.send('Will send dish' + req.params.dishId + 'to you!');
});


router.post('/', function(req, res, next) {
    res.send('Post method called here!');
});   


module.exports = router;

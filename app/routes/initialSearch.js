var express = require('express');
var router = express.Router();

router.get('/initialSearch', function(req, res) {

  res.render('initialSearch');

});

module.exports = router;

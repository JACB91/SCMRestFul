var express = require('express');
var buttonModel = require('../../DAL/Entity/EntityButtons');
var BALButtons = require('../../BAL/Business/BussinesButtons');
var router = express.Router();

router.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

module.exports = router;
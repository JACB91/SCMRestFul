var express = require('express');
var buttonModel = require('../../DAL/Entity/EntityButtons');
var BALButtons = require('../../BAL/Business/BusinessButtons');
var router = express.Router();

router.get('/api/GetAllForPlace/:ID_Pais/:Place', function(req, res){
    var parameters = new buttonModel({
      Place     : String(req.params.Place),
      ID_Pais 	: Number(req.params.ID_Pais)
    });
    new BALButtons(parameters).getAllForPlace(parameters).then(function(result){
      var reslp = JSON.parse(result);
      res.send(reslp);
    }).catch(function(error){
      console.log('Ups.... a ocurrido un error.');
      res.sendFile('Ups.... a ocurrido un error.');
    });
});


  module.exports = router;
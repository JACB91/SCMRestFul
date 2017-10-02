'use strict'
var repository = require('../../DAL/TableStorage/Repository/Class/Buttons');
var async = require('async');
class BussinesButtons{
    constructor(parameters){
        this.parameters = parameters;
     }
     insertButton(parameters){
        return new Promise(function(resolver,reject){
            var res = new repository().insertButton(parameters);
              resolver(res);
          }).catch(error => reject(error));
     }
     deleteButton(parameters){
        return new Promise(function(resolver,reject){
            var res = new repository().deleteButton(parameters);
              resolver(res);
          }).catch(error => reject(error));
     }
     updateOneByIdForPlace(parameters){
        return new Promise(function(resolver,reject){
            var res = new repository().updateOneByIdForPlace(parameters);
              resolver(res);
          }).catch(error => reject(error));
     }
     getOneByIdForPlace(parameters){
        return new Promise(function(resolver,reject){
            var res = new new repository().getOneByIdForPlace(parameters);
              resolver(res);
          }).catch(error => reject(error));
     }
     getAllForPlace(parameters){
        return new Promise(function(resolver,reject){
          var res = new repository(parameters).getAllForPlace(parameters);
            resolver(res);
        }).catch(error => reject(error));
     }
}
module.exports = BussinesButtons;    

                 







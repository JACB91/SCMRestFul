'use strict'
var repository = require('../../DAL/TableStorage/Repository/Class/RegActionsCoP');
var async = require('async');
class BusinessRegActionsCoP{
    constructor(parameters){
        this.parameters = parameters;
     }
     insert(parameters){
        return new Promise(function(resolver,reject){
            var res = new repository().insert(parameters);
              resolver(res);
          }).catch(error => reject(error));
     }
     delete(parameters){
        return new Promise(function(resolver,reject){
            var res = new repository().delete(parameters);
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
module.exports = BusinessRegActionsCoP;    

                 







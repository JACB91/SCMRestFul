'use strict'
var repository = require('../../DAL/TableStorage/Repository/Class/Buttons');
var async = require('async');
class BussinesButtons{
    constructor(parameters){
        this.parameters = parameters;
     }
     insert(parameters){
        return new Promise(function(resolver,reject){
            var res = new repository(parameters).insert(parameters);
              resolver(res);
          }).catch(error => reject(error));
     }
     delete(parameters){
        return new Promise(function(resolver,reject){
            var res = new repository(parameters).delete(parameters);
              resolver(res);
          }).catch(error => reject(error));
     }
     updateOneByIdForPlace(parameters){
        return new Promise(function(resolver,reject){
            var res = new repository(parameters).updateOneByIdForPlace(parameters);
              resolver(res);
          }).catch(error => reject(error));
     }
     getOneByIdForPlace(parameters){
        return new Promise(function(resolver,reject){
            var res = new new repository(parameters).getOneByIdForPlace(parameters);
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

                 







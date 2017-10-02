var azure = require('azure-storage');
var accountName = 'vscodetest';
var accountKey = 'TVHpH9j2ZQsWdnnoiXe50zfJjezEw4WWRZri9qzN9XE+SroY8XSaUQH31rcxV5w2vdYLyp42uB/BMCxduQcy1A==';
var tableService = azure.createTableService(accountName, accountKey);

class GlobalConfig{
    constructor(parameters){
        this.parameters = parameters
    }
    
    insert(parameters){
        return insertFun(parameters).then(function(response){
            return JSON.stringify(response);
        }).catch(function(error){
            console.log(error);
            return error;
        });
    }
    delete(parameters){
        return deleteFun(parameters).then(function(response){
            return JSON.stringify(response);
        }).catch(function(error){
            console.log(error);
            return error;
        });
    }

    getOneByIdForPlace(parameters){
        return getOneByIdForPlaceFun(parameters).then(function(response){
            return JSON.stringify(response);
        }).catch(function(error){
            console.log(error);
            return error;
        });
    }

    getAllForPlace(parameters){
        return getAllForPlacefun(parameters).then(function(response){
            return JSON.stringify(response);
        }).catch(function(error){
            console.log(error);
            return error;
        });
    }
    updateOneByIdForPlace(parameters){
        return updateOneByIdForPlacefun(parameters).then(function(response){
            return JSON.stringify(response);
        }).catch(function(error){
            console.log(error);
            return error;
        });
    }
}
module.exports = GlobalConfig;

/* ------------------------------------------------ Funciones operacionales -------------------------------------------------- */

function getAllForPlacefun(parameters){
    return new Promise(function(resolve, reject){
            var Query = new azure.TableQuery() .where('ID_Pais == ? && Place == ?',
            parameters.ID_Pais,
            parameters.Place
            );    
            tableService.queryEntities('GlobalConfig',Query, null, function(error, result, response){
                if(!error){
                   return resolve(result.entries);
                }else{
                   return reject(error);
                }
            });
    });
}

function getOneByIdForPlaceFun(parameters){
    return new Promise(function(resolve, reject){
            var Query = new azure.TableQuery()
            .where('ID_Pais == ? && Place == ? && ID_Reference == ?',
            parameters.ID_Pais,
            parameters.Place,
            parameters.ID_Reference
            );
            tableService.queryEntities('GlobalConfig',Query, null, function(error,result,response){
                if(error){
                    return resolve(result.entries);
                }else{
                    return reject(error);
                }
            });
    });
}

function insertFun(parameters){
    return new Promise(function(resolve, reject){
        tableService.createTableIfNotExists('GlobalConfig', function(error,result, response){
            if(!error){
                tableService.insertEntity('GlobalConfig', parameters, function(error, result, response){
                    if(error){
                        return resolve(result.entries);
                    }else{
                        return reject(error);
                     }
                });
            }
        });
    });
}

function deleteFun(parameters){
    return new Promise(function(resolve, reject){
            var Query = new azure.TableQuery() .where('ID_Pais == ? && Place == ? && ID_Reference == ?',
            parameters.ID_Pais,
            parameters.Place,
            parameters.ID_Reference
            );    
            tableService.deleteEntity('GlobalConfig',Query, null, function(error,result,response){
                if(!error){
                   return resolve(result.entries);
                }else{
                   return reject(error);
                }
            });
    });
}

function updateOneByIdForPlacefun(parameters){
    return new Promise(function(resolve, reject){
        tableService.replaceEntity('GlobalConfig',parameters, null, function(error,result,response){
                if(!error){
                   return resolve(result.entries);
                }else{
                   return reject(error);
                }
            });
    });
}



var azure = require('azure-storage');
var Buttons = require('../Entity/Buttons')
var accountName = 'vscodetest';
var accountKey = 'TVHpH9j2ZQsWdnnoiXe50zfJjezEw4WWRZri9qzN9XE+SroY8XSaUQH31rcxV5w2vdYLyp42uB/BMCxduQcy1A==';

var tableServiceConfigurateInnings = azure.createTableService(accountName, accountKey);
tableServiceConfigurateInnings.createTableIfNotExists('ConfigurateInnings', function(error,result, response){
    if(!error)
    {
        
    }
});

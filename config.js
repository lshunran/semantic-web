var environment = require('./environment');

var buildOptions = function(urlPartition, method) {
    var options = {
        url: environment.buildOptionsUrl + urlPartition,
        method: method,
        headers: {
            'User-Agent': 'request',
            'content-type': 'application/json'
        }
    };
    return options;
}

var config = {
    buildOptions: buildOptions
};
module.exports = config;
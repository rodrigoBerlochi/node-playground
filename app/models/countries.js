// MODELS
const Q = require('q');
const db = require('../../database');
const documentId = '043621dd50a993f8f9f248e0ce004413';

module.exports = {
    getAllCountries: function () {
          var defer = Q.defer();

          db.get(documentId, function (err, body, headers){
            if (err) {
                defer.reject ({
                    status: err.statusCode,
                    body: err.message
                });
            }
            defer.resolve({
                status: 200,
                body: body.results
            });
          });

          return  defer.promise;
    }
};
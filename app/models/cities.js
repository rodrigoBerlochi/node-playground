// MODELS
const Q = require('q');
const db = require('../../database');
const documentId = '043621dd50a993f8f9f248e0ce002d24';

module.exports = {
    getAllCities: function () {
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
    },
    findOne: function (id) {
        var defer = Q.defer();

        db.get(documentId, function (err, body, headers){
          if (err) {
              defer.reject ({
                  status: err.statusCode,
                  body: err.message
              });
          }

          let filtered = body.results.items.filter(function (i) {
              return i.id === id;
          });

          let processedResult = {
              name: body.results.name,
              items: filtered
          }

          defer.resolve({
              status: 200,
              body: processedResult
          });
        });

        return  defer.promise;
    }
};
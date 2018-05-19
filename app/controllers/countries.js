//CONTROLLERS

const model = require('../models/countries');

module.exports = {
    getAll: function (request, response) {
        model.getAllCountries().then(function (answer) {
            response.status(answer.status).send(answer.body);
        });
    }
};
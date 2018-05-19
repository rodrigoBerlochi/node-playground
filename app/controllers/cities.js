//CONTROLLERS

const model = require('../models/cities');

// controller exposes an api that
// maps to model methods. Controller is called by the router, and is
// who operates at Express layer / http layer, getting request and response
// objects. It is always async because communicates with the DB
// so should use a resource like Promises and return always a node response
// with the STATUS and data
// Summary responsibilities: link between router and model, hanlde req and  resp,
// set status and response data
module.exports = {
    getAll: function (request, response) {
        model.getAllCities().then(function (answer) {
            response.status(answer.status).send(answer.body);
        });
    },
    findOne: function (request, response) {
        model.findOne(request.params.id).then(function (answer) {
            response.status(answer.status).send(answer.body);
        });
    }
};
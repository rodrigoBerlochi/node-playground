const express = require('express');

const router = new express.Router();
const citiesController = require('./app/controllers/cities');
const countryController = require('./app/controllers/countries');

router.get('/api/', function (req, res){
    res.send('Home');
});

// regular routes
// cities
router.get('/api/cities', citiesController.getAll);

router.get('/api/cities/:id', citiesController.findOne);

router.post('api/cities/add/');

// countries
router.get('/api/countries/', countryController.getAll);

router.get('/api/countries/{id}');

router.get('/api/countries/{id}?querystring'); // req.query

router.post('/api/countries/add/');

// export everything
module.exports = router;
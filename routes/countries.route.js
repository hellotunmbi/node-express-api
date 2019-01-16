const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/countries.controller');
const authMiddleware = require('../middleware/auth.middleware');


router.get('/', authMiddleware.verifyToken, countriesController.getCountries);

router.put('/', authMiddleware.verifyToken, countriesController.addCountry);

router.delete('/', authMiddleware.verifyToken, countriesController.deleteCountry);


module.exports = router;
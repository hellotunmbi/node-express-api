const Helper = require('../helpers');

const countriesData = [];

// Get list of all countries
exports.getCountries = (req, res) => {
  res.json({
    status: 200,
    data: countriesData
  })
};


// Delete a country...
exports.addCountry = (req, res) => {
  const country = req.body.country;
  if(!country) {
    res.json({
      status: 400,
      message: 'Country value invalid'
    })
  } else {
    countriesData.push(country);
    res.status(200).json({
      status: 200,
      message: 'Country added successfully',
      data: countriesData
    })
  }
};


// Delete a country...
exports.deleteCountry = (req, res) => {
  const country = req.body.country;
  if (!country) {
    res.json({
      status: 400,
      message: 'Enter a country value'
    })
  } else {
    for (let i = 0; i <= countriesData.length; i++) {
      if (countriesData[i] === country) {
        countriesData.splice(i, 1);
      }
    }

    res.status(200).json({
      status: 200,
      message: 'Country deleted successfully',
      data: countriesData
    })
  }


};
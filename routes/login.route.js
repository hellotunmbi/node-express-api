const express = require('express');
const router = express.Router();
const Helper = require('../helpers');


router.get('/', (req, res) => {
  res.json({ message: "Login Route. Welcome"});
})

/**
 * /login
 * 'body' param: username, password
 */
router.post('/', function (req, res) {
  const { username, password } = req.body;

  if(username !== 'admin' || password !== 'admin') {
    res.status(400).json({
      status: 400,
      message: 'Invalid username and password' });
  } else {
    const token = Helper.generateToken(username);
    res.status(200).json({
      token,
      status: 200,
      message: 'Login Successful'
    });
  }
});


module.exports = router;
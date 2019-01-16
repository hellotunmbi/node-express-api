const jwt = require('jsonwebtoken');

require('dotenv').config({ path: 'variables.env' });

const Helper = {

  generateToken(username) {
    const token = jwt.sign({
      username
    },
      process.env.SECRET,
      { expiresIn: '2y' }
    );
    return token;
  }

};

module.exports = Helper;
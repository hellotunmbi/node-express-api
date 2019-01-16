# Node-Express-API

## Simple Node API with JWT Authentication
LIVE URL to Test: https://node-express-jwt-api.herokuapp.com/

## Routes:
### POST /login
- Accepts 'body' param. Default username and password is 'admin'
- Returns JSON Success message with JWT Token

### GET /countries (Get list of all countries)
- Accepts token as 'x-access-token' header param
- Returns array of countries. Empty array by default


### PUT /countries (Add a country to list)
- Accepts token as 'x-access-token' header param
- Accepts 'country' as body param
- Returns array of countries

### DELETE /countries (Delete a country from list)
- Accepts token as 'x-access-token' header param
- Accepts 'country' to delete as body param
- Returns array of countries left in array
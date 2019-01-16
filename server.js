const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to Home Route'});
});

// LOGIN ROUTE...
const login = require('./routes/login.route');
const countries = require('./routes/countries.route');

app.use('/login', login);
app.use('/countries', countries);


const port = 1234;

const server = app.listen(process.env.PORT || port, () => {
	console.log(`Server started on port: ${port}`);
});


module.exports = server;
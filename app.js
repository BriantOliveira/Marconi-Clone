/********************************
* Marconi-Clone main Server
********************************/
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')


// Initializing server
const app = express();

// Defining the PORT number
const PORT = process.env.PORT || 3000


// Allow Cors

/******************************
*   Middleware
******************************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(allowCrossDomain);

// Load Routes
require('./routes/index.js')(app);

// Initializing listener
app.listen(PORT, function() {
  console.log('Marconi Clone listening on port ', PORT);
});

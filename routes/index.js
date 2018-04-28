/*********************************
*   Index Page Main Controller
*********************************/
require('dotenv').load();

module.exports = function(app) {

  // Index page
    app.get('/', (req, res) => {
        res.send('This is the index page')
    })
};

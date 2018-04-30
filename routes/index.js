/*********************************
*   Index Page Main Controller
*********************************/
require('dotenv').load();

module.exports = function(app) {

  // Index page
    app.get('/', (req, res) => {
      //Returning JSON
        res.json('Index')
    })
};

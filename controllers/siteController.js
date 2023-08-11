const express = require('express');
const app = express();

module.exports = function(app){
   //render home page
   app.get('/', function(req, res){
    //get data from mongodb and pass it to the view
    res.render('index');
});

//also render home page
app.get('/home', function(req, res){
    //get data from mongodb and pass it to the view
    res.render('index');
});

// Handling non matching request from the client
app.use((req, res, next) => {
    res.status(404).send(
        "<h1>404 Page not found on the server</h1>")
})

}

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./api/route/index');
 
 
 
const app = express();
const port = process.env.PORT || 3000;
 
 
 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
 
  
routes(app);

 
mongoose
 .connect(
 'mongodb+srv://test:mds_ws@cluster0-jdmbr.gcp.mongodb.net/test?retryWrites=true&w=majority'
 )
 .then(result => {
 app.listen(port);
 console.log('Your first node api is running on port: ' + port);
 })
 .catch(err => console.log(err));
 
 
 
module.exports = app;
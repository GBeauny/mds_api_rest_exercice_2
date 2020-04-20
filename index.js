'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./api/route/index');

const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://test:mds_ws@cluster0-jdmbr.gcp.mongodb.net/test?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);
app.listen(port);

console.log('Your first node api is running on port: ' + port);

module.exports = app;

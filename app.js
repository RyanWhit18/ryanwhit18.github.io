/**** Import Libraries ****/
const express = require('express');
const routes = require('./routes/index');
const path = require('path');

/**** Set Up ****/
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static('public'));

/**** Routing ****/
app.use('/', routes);

module.exports = app;

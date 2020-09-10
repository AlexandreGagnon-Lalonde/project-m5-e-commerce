'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const allItems = require('./js/allItems');
const allCompanies = require('./js/allCompanies');
const itemsFromInput = require('./js/itemsFromInput');
const itemsFromBodyPart = require('./js/itemsFromBodyPart');
const itemsFromCompany = require('./js/itemsFromCompany');

const PORT = 4000;

express()
  .use(function(req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('./server/assets'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', express.static(__dirname + '/'))

  // REST endpoints?
  .get('/items', allItems)
  .get('/items/:stringMatch', itemsFromInput)
  .get('/items/body/:bodyPart', itemsFromBodyPart)
  .get('/items/company/:company', itemsFromCompany)
  .get('/companies', allCompanies)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));

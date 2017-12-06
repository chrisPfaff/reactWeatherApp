const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
//const User = require('.db/models/user')
const bodyParser = require('body-parser');
//import api from '../config.js'

const app = express();
app.use(express.static((__dirname + '/src/public')));
app.use(bodyParser.json());
//require db


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});


app.get('/bundle.js', function (req, res) {
  res.sendFile(__dirname + '/dist/bundle.js');
});




app.listen(3000);

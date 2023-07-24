const express = require('express')

const app = express()
// const router = require('express').Router();
const bookRoutes = require('./book')

app.use('/book', bookRoutes);

module.exports = app;
const knex = require('knex');
require('dotenv').config()
const ENV = process.env.NODE_ENV;
const config = require('../knexfile.js');
module.exports = knex(config[ENV]);
const server = require('./api/server.js');
require('dotenv').config();
const colors = require('colors');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || 'development';

if (ENV === 'development'){
    server.use(morgan('dev'));
}

server.listen(PORT, () => {
    console.log(`\n === Server listening in ${ENV} mode on http://localhost:${PORT} === \n`.cyan.underline.bold)
})
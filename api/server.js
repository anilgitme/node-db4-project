const express = require('express');
const helmet = require('helmet');
const router = require('./projectRouter');

const server = express();
server.use(express.json());
server.use(helmet());
server.use('/api', router);

module.exports = server;
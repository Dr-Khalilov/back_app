const express = require('express');
const router = require('./routers');
const cors = require('cors');
const errorHandler = require('./middlewares/error');
const { STATIC_PATH } = require('./config/config');

const app = express();
app.use(cors());
app.use(express.static(STATIC_PATH));

app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

module.exports = app;

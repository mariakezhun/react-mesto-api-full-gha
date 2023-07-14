/* eslint-disable prefer-arrow-callback */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const routes = require('./routes/index');
const ErrorMiddleware = require('./middlewares/ErrorMiddleware');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(routes);
app.use(errors());

app.use(ErrorMiddleware);

app.listen(PORT, () => {
  console.log(`Server run at ${PORT}`);
});

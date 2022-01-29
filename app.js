//Npm modules
// 'use strict';

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require('sequelize');
const fileRoutes = require('./routes/file.routes.js');

const { DATABASE_PASSWORD } = require('./config');

const app = express();

const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(fileRoutes);

const port = process.env.PORT || 3000;

const sequelize = new Sequelize('myresume', 'postgres', `${DATABASE_PASSWORD}`, {
  host: 'localhost',
  dialect: 'postgres'
});

app.listen(port, async () => {
  console.log(`app listening at http://localhost:${port}`);
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (err) {
  console.error('Unable to connect to the database:', error);
}





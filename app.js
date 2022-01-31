'use strict';

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require('./util/database');
const resumeProfileRoutes = require('./routes/resume-profile');

const app = express();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(resumeProfileRoutes);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`app listening at http://localhost:${port}`);
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (err) {
  console.error('Unable to connect to the database:', error);
}





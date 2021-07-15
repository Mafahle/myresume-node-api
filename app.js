//Npm modules
'use strict';

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const fileRoutes=require('./routes/file.routes.js');

const app = express();

const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(fileRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))
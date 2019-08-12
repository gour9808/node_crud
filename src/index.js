const express = require('express');
const mongoose = require('./db/mongoose');
const router = require('./routers/router');
var cors = require('cors');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
app.use(router);


app.listen(3000, () => {
    console.log("server is on port", port)
})
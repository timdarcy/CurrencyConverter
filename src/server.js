const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
//initialise express
const app = express();

//configure body parser as express middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res) => {
    console.log(req.body);

})
app.listen(3000);
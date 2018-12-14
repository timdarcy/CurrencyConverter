
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
//initialise express
const app = express();

//fixer.io api key
const apiKey = "12980df91b59f4a5256ec5001c31178f";

//configure body parser as express middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res) => {
    let request = req.body;
    let currencyFrom = request.currencyFrom;
    let currencyTo = request.currencyTo;
    let apiAddress = "http://data.fixer.io/api/latest";
    let requestAddress = apiAddress + "?access_key=" + apiKey;
    console.log(requestAddress)
    let amountFrom = request.amountFrom;
    let conversion = axios.get(requestAddress).then((response) => {
        console.log(response.data.rates);
        let fromRate = response.data.rates[currencyFrom];
        let toRate = response.data.rates[currencyTo];
        //returned values are conversion to euro due to api restrictions
        let euro = amountFrom / fromRate;
        let convertedAmount = euro * toRate;
        console.log(convertedAmount);
        res.send({ "result": convertedAmount });
    }).catch((error) => {
        console.log(error);
    });

})
console.log("server running");
app.listen(3000);
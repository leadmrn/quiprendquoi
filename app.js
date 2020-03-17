const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.get('/', function(req, res) {
    res.render('index', { title: 'Qui prend quoi ?' });
});
app.post('/party', function(req, res) {
    axios
        .post(`${process.env.API_URL}/party`, req.body)
        .then(({data}) => console.log(data))
        .catch((err) => console.error(err));
    console.log(req.body);
});

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));
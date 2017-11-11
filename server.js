const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/:q', (req, res) => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=eafa397532be49299f095815f8165bde&q=${req.params.q}`;
    axios.get(url).then((response) => {
        console.log(response);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}...`));

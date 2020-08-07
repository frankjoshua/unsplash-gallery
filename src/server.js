const express = require('express');
global.fetch = require('node-fetch');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const UNSPLASH_KEY = process.env.UNSPLASH_KEY;

const unsplash = new Unsplash({
  accessKey: UNSPLASH_KEY,
});

const app = express();

app.use('/photos', (req, res) => {
  unsplash.users
    .photos('viazavier', req.query.start, req.query.count)
    .then(toJson)
    .then((json) => {
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      res.header('Access-Control-Allow-Origin', '*');
      res.json(json);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

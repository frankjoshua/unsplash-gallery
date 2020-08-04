const request = require('request');
const express = require('express');

const PORT = process.env.PORT || 3000;
const UNSPLASH_KEY = process.env.UNSPLASH_KEY;

const app = express();

app.use('/', (req, res) => {
  let header = {
    Authorization: `Client-ID ${UNSPLASH_KEY}`,
  };
  request(
    { url: 'https://api.unsplash.com/users/viazavier/photos', qs: header },
    (error, response, body) => {
      res.json(body);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

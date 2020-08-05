const request = require('request');
const express = require('express');

const PORT = process.env.PORT || 3001;
const UNSPLASH_KEY = process.env.UNSPLASH_KEY;

const app = express();

app.use('/', (req, res) => {
  let headers = {
    Authorization: `Client-ID qn842tiB0j69tnuLLbe3viLx1GuMRNgo0jOAjKXkGaM`,
  };
  request(
    { url: 'https://api.unsplash.com/users/viazavier/photos', headers: headers },
    (error, response, body) => {
      let unplashImages = JSON.parse(body);
      res.json(unplashImages);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

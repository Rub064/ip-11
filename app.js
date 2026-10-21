// homework 11, git and deployment

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.send('hello from my local site');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});

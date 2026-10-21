// homework 11, git and deployment

const express = require('express');
const app = express();

// the host picks the port, 3000 is just for my laptop
const port = process.env.PORT || 3000;
const siteName = process.env.SITE_NAME || 'my local site';

app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.send('hello from ' + siteName);
});

app.listen(port, () => {
  console.log('listening on port ' + port);
});

// homework 11, git and deployment

const express = require('express');
const app = express();

// the host picks the port, 3000 is just for my laptop
const port = process.env.PORT || 3000;
const siteName = process.env.SITE_NAME || 'my local site';

// resets every time the dyno restarts, good enough for the assignment
let visits = 0;

app.use(express.static('public'));

app.get('/hello', (req, res) => {
  visits = visits + 1;
  res.send('hello from ' + siteName + ', visit number ' + visits);
});

app.listen(port, () => {
  console.log('listening on port ' + port);
});

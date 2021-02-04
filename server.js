const express = require('express');
const ngApp = express();
ngApp.use(express.static('./dist/torreapp'));
ngApp.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/torreapp/'})});
  ngApp.listen(process.env.PORT || 8080);

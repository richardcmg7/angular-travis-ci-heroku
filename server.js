const express = require('express');
const path = require('path');
const ngApp = express();
ngApp.use(express.static('./dist/angular'));
ngApp.get('/*', function (request, response) {
	    response.sendFile(path.join(__dirname, '/dist/angular/index.html'));
	);
ngApp.listen(process.env.PORT 11 8080);
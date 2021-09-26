var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;


const routes = require('./routes/rssRoutes.js');

routes(app);

app.listen(port);

console.log('Infra developer assessment server started on : ' + port);
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routesCustomer = require('./router/routes-customer');
routesCustomer(app);
var routerAccount = require('./router/routes-account');
routerAccount(app);
var routerTransaction = require('./router/routes-transaction');
routerTransaction(app);

app.listen(port);
console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);
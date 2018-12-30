var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser')
    //morgan
    var morgan = require('morgan');

var cors = require('cors');
app.use(cors());

app.use(function(req, res, next){
    res.header("Acces-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//==tambahan
var logger = require("./util/logging/winston-logger");

app.use(morgan('combined',{ "stream": logger.stream }));
logger.debug("Overriding 'Express' logger");
//end-tambahan

/** routes **/
var customerRoute = require('./router/routes-customer');
customerRoute(app);

var accountRoute = require('./router/routes-account');
accountRoute(app);

var transactionRoute = require('./router/routes-transaction');
transactionRoute(app);


app.listen(port);
logger.debug('Learn Node JS With Kiddy, RESTful API server started on: ' + port);
'use strict';

module.exports = function(app){
    var controllerCustomer = require('../controller/customer-controller');
    
    app.route('/').get(controllerCustomer.index);
    app.route('/customers').get(controllerCustomer.customers);
    app.route('/customer').post(controllerCustomer.insert);
    app.route('/customer/:id').get(controllerCustomer.getById);
    app.route('/customer').put(controllerCustomer.update);
    app.route('/customer/:id').delete(controllerCustomer.del);
}
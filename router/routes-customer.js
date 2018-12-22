'use strict';

module.exports = function(app){
    var controllerCustomer = require('../controller/customer-controller');
    
    app.route('/').get(controllerCustomer.index);
    app.route('/customers').get(controllerCustomer.customers);
    app.route('/customer').post(controllerCustomer.insertCustomer);
    app.route('/customer/:id').get(controllerCustomer.getCustomerById);
    app.route('/customer').put(controllerCustomer.updateCustomer);
    app.route('/customer/:id').delete(controllerCustomer.del);
}
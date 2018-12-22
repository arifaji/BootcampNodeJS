'use strict';

module.exports = function(app){
    var controllerTransaction = require('../controller/transaction-control');

    app.route('/transactions').get(controllerTransaction.transactionList);
    app.route('/transaction/:id').get(controllerTransaction.getTransactionById);
    app.route('/transaction').post(controllerTransaction.insertTransaction);
    app.route('/transaction').put(controllerTransaction.updateTransaction);
    app.route('/transaction/:id').delete(controllerTransaction.deleted);
}
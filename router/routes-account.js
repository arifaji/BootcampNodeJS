'use strict';

module.exports = function(app){
    var controllerAccount = require('../controller/account-controller');

    app.route('/accounts').get(controllerAccount.accountlist);
    app.route('/account/:id').get(controllerAccount.getAccountById);
    app.route('/account').post(controllerAccount.insertAccount);
    app.route('/account').put(controllerAccount.updateAccount);
    app.route('/account/:id').delete(controllerAccount.deleted);
}
const { Transaction, Account, Customer } = require('../db/sequelize');
var logger = require('../util/logging/winston-logger');

exports.getById = function getById(idx, callback) {
    Transaction.findById(idx)
    .then((transaction) => {
        return callback(null, transaction);
    })
    .catch((error) => {
        logger.error(error);
        return callback(error);
    })
};

exports.getAll = function getAll(whereClause, callback) {
    Transaction.findAll({
        where:whereClause,
        include:[{
            model:Account,
            include: [Customer]
        }]   
    })
    .then((transaction) => {
        return callback(null, transaction);
    })
    .catch((error) => {
        logger.error(error);
        return callback(error);
    })
};

exports.insert = function insert(data, callback) {
    var transaction = data;
    if(transaction.account==null && transaction.accountNumber==null){
        res.json('account kosong');
    }else{
        if(transaction.accountNumber==null){
            transaction.accountNumber = transaction.account.accountNumber;
        }
    }

    Transaction.create(transaction)
    .then(transaction => {
        return callback(null, transaction);
    })
    .catch((error) => {
        logger.error(error);
        return callback(error);
    })
};

exports.update = function update(idx, data, callback) {
    var transaction = data;
    if(transaction.account==null && transaction.accountNumber==null){
        res.json('account kosong');
    }else{
        if(transaction.accountNumber==null){
            transaction.accountNumber = transaction.account.accountNumber;
        }
    }
    
    Transaction.update(data, {
        where: { id: data.id },
        returning: true,
        plain: true
      })
    .then(result => {
        logger.info('result  update:');
        logger.info(result);
        return callback(null, data);
    })
    .catch((error) => {
        logger.error(error);
        return callback(error);
    })
};

exports.del = function del(idx, callback) {
    Transaction.destroy({
        where: { id: idx }
      })
    .then(result => {
        logger.info('result  update:');
        logger.info(result);
        return callback(null, idx);
    })
    .catch((error) => {
        logger.error(error);
        return callback(error);
    })
};

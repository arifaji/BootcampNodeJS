var response = require('../model/res');
var transactionDao = require('../dao/transaction-dao');

exports.transactionList = function(req, res){
    transactionDao.getAll(function (error, rows){
        if(error){
            console.log('error while select : '+error);
            response.err(error,res);
        } else {
            response.ok(rows,res);
        }
    });
};

exports.getTransactionById = function(req, res){
    transactionDao.getById(req.params['id'], function (err,data){
        if(err){
            console.log('error call getById : '+err);
            response.err(err, res);
        }
        response.ok(data,res);
    });
};

exports.insertTransaction = function(req, res){
    transactionDao.insert(req.body, function(err,data){
        if(err){
            console.log('error call insert : '+err);
            response.err(err,res);
        }
        response.ok('data inserted with transaction number '+data.insertId, res);
    });
};

exports.updateTransaction = function(req,res){
    transactionDao.getById(req.body.id_transaction, function(err,data){
        if(err){
            console.log('error call getById : '+err);
            response.err(err,res);
        } else if (data==null) {
            response.datanotfound('account not found ',res);
        } else {
            transactionDao.update(req.body.id_transaction, req.body,function(err, data){
                if(err,data){
                    console.log('error call update : '+err);
                }
                response.ok('upload data : '+data.message, res);
            });
        }
    });
};

exports.deleted = function(req,res){
    transactionDao.getById(req.params['id'], function(err,data){
        if(err){
            console.log('error call getById : '+err);
            response.err(err, res);
        } else if (data==null){
            response.datanotfound('customer not found',res);
        } else {
            transactionDao.deleted(req.params['id'], function(err,data){
                if(err){
                    console.log('error call delete : '+err);
                    response.err(error,res);
                }
                response.ok(data,res);
            });
        }
    });
};
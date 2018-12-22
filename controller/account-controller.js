var response = require('../model/res');
var accountDao = require('../dao/account-dao');

exports.accountlist = function(req, res){
    accountDao.getAll(function (error, rows){
        if(error){
            console.log('error while select : '+error);
            response.err(error,res);
        } else {
            response.ok(rows,res);
        }
    });
};

exports.getAccountById = function(req, res){
    accountDao.getById(req.params['id'], function (err,data){
        if(err){
            console.log('error call getById : '+err);
            response.err(err, res);
        }
        response.ok(data,res);
    });
};

exports.insertAccount = function(req, res){
    accountDao.insert(req.body, function(err,data){
        if(err){
            console.log('error call insert : '+err);
            response.err(err,res);
        }
        response.ok('data inserted with account number '+data.insertId, res);
    });
};

exports.updateAccount = function(req,res){
    accountDao.getById(req.body.account_number, function(err,data){
        if(err){
            console.log('error call getById : '+err);
            response.err(err,res);
        } else if (data==null) {
            response.datanotfound('account not found ',res);
        } else {
            accountDao.update(req.body.account_number, req.body,function(err, data){
                if(err,data){
                    console.log('error call update : '+err);
                }
                response.ok('upload data : '+data.message, res);
            });
        }
    });
};

exports.deleted = function(req,res){
    accountDao.getById(req.params['id'], function(err,data){
        if(err){
            console.log('error call getById : '+err);
            response.err(err, res);
        } else if (data==null){
            response.datanotfound('customer not found',res);
        } else {
            accountDao.deleted(req.params['id'], function(err,data){
                if(err){
                    console.log('error call delete : '+err);
                    response.err(error,res);
                }
                response.ok(data,res);
            });
        }
    });
};
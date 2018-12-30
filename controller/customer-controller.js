var response = require('../model/res');
// var customerDao = require('../dao/customer-dao');
var customerDao = require('../dao/customer-dao-sequelize');
var logger = require('../util/logging/winston-logger');
var util = require('util');


exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!with seq", res)
};


//
// exports.customers = function(req, res){
//     //getall terima 1 parameter doang buat callback
//     customerDao.getAll(function (error, rows){
//         if(error){
//             console.log('error while select: '+error);
//             response.err(error, res);
//         } else {
//             response.ok(rows,res)
//         }
//     });
// };

exports.customers = function(req, res){
        //getall terima 1 parameter doang buat callback
        customerDao.getAll(function (error, rows){
            if(error){
                console.log('error while select: '+error);
                response.err(error, res);
            } else {
                response.ok(rows,res)
                // return res.json(rows);
            }
        });
    };



exports.getById = function(req, res){
    //request 2 kan, error sama data, kirimnya ke customer dao.
         //kalau params pakai slash (/) kalo req.query.id pakai ?id=nomernya
    customerDao.getById(req.params['id'], function (err,data){
        //kalo error yaudah, cukup distu aja
        if(err){
            console.log('error call getById : '+err);
            response.err(err, res);
        }
        //kalo berhasil data disimpen
        response.ok(data,res);
        // return res.json(data);
    });
};

exports.update = function(req,res){
    // customerDao.getById(req.body.customer_number, function(err,data){
        customerDao.getById(req.body.customerNumber, function(err,data){
        if(err){
            console.log('error call getById: '+err);
            response.err(err,res);
        } else if (data==null) {
        response.datanotfound('customer not found', res);
        } else {
            // customerDao.update(req.body.customer_number, req.body, function(err, data){
            customerDao.update(req.body.customerNumber, req.body, function(err, data){
                if(err){
                    console.log('error call update : '+err);
                    response.err(error, res);
                }
                //  response.ok('upload data : '+data.message, res);
                  response.ok('upload data : '+data.customerNumber, res);
                //  return res.json('upload data : '+data.customerNumber, res);
            });
        }
    });
};

exports.insert = function(req, res){
    logger.info('request for insert :');
    logger.debug(req.body);
    customerDao.insert(req.body, function(err, data){
        if(err){
            console.log('error call insert : '+err);
            response.err(err,res);
        }
        response.ok('data inserted with id'+data.customerNumber, res);
        // return res.json('data inserted with id'+data.customerNumber, res);
    });
};

exports.del = function(req, res) {
    logger.info(util.format('deleting customer id %s', req.params['id']));
    customerDao.getById(req.params['id'], function(err, data){//check customer exists
        if(err){
            logger.error('error call getById : '+err);
            response.err(err, res);
        }  else if(data==null){
            response.datanotfound('customer not found', res);
        }else{
            //if exists, continue delete
            customerDao.del(req.params['id'], function(err, data){
                if(err){
                    logger.error('error call delete : '+err);
                    response.err(error, res);
                } 
                // response.ok(data, res);
                response.ok('customer deleted with id : '+data, res);
            });
        }
    });
};
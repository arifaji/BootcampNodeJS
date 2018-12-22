var connection = require('../db/conn');

const sqlGetAll = "SELECT * FROM account";
const sqlGetById = "SELECT * FROM account WHERE account_number = ?";
const sqlInsert = "INSERT INTO account SET ?";
const sqlUpdate = "UPDATE account SET ? WHERE account_number = ?";
const sqlDelete = "DELETE FROM account WHERE account_number = ?";

exports.getAll = function getAll(callback){
    connection.query(sqlGetAll, function (error,rows){
        if(error){
            console.log(error);
            return callback(error);
        }
        callback(null,rows);
    });
};

exports.getById = function getById(id, callback){
    connection.query(sqlGetById,id, function(error,rows){
        if(error){
            console.log(error);
            return callback(error);
        }
        callback(null,rows);
    });
};

exports.insert = function insert(data, callback){
    connection.query(sqlInsert, data, function (error, rows){
        if (error){
            console.log(error);
            return callback(error);
        }
        callback(null, rows);
    });
};

exports.update = function update(id, data, callback){
    connection.query(sqlUpdate,[data,id], function(error,rows){
        if(error){
            console.log(error);
            return callback(error);
        }
        callback(null,rows);
    });
};

exports.deleted = function deleted (id, callback){
    connection.query(sqlDelete, id, function(error,rows){
        if(error){
            console,log(error);
            return callback(error);
        }
        callback(null,rows);
    });
};
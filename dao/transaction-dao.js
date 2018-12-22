var connection = require('../db/conn');

const sqlGetAll = "SELECT * FROM transaction";
const sqlGetById = "SELECT * FROM transaction WHERE id_transaction = ?";
const sqlInsert = "INSERT INTO transaction SET ?";
const sqlUpdate = "UPDATE transaction SET ? WHERE id_transaction = ?";
const sqlDelete = "DELETE FROM transaction WHERE id_transaction = ?";

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
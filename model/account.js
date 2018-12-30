// ?const uuid = require('uuid/v4');

module.exports = (sequelize, type) => {
    return sequelize.define('account', {
        accountNumber: {
            field:'accountnumber',
            // type: type.UUID,
            type: type.INTEGER,
            primaryKey: true,
            // defaultValue: uuid()
        },
        openDate: {
            field:'opendate',
            type: type.DATE
        },
        balance: {
            field:'balance',
            type: type.INTEGER
        }
        ,
        customerNumber:{
            field:'customer_id',
          type:type.INTEGER,
          onDelete: 'CASCADE',
  
          references:{
            model:'customer',
            key: 'customerNumber'
          }
        }
    }, {
        tableName: 'account',
        timestamps: false
    })
}

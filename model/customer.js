module.exports = (sequelize, type) => {
    return sequelize.define('customer', {
        customerNumber: {
            field:'customernumber',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            field:'firstname',
            type: type.STRING
        },
        lastName: {
            field:'lastname',
            type: type.STRING
        },
        birthDate: {
            field:'birthdate',
            type: type.DATE
        },
        username: type.STRING,
        password: type.STRING,
        phoneType: {
            field:'phonetype',
            type: type.STRING
        },
        phoneNumber: {
            field:'phonenumber',
            type: type.STRING
        }
    }, {
        tableName: 'customer',
        timestamps: false
    })
}

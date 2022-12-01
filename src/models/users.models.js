const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Users = db.define('crudUsers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        allowNull: false,
        type: DataTypes.TEXT,
    },
    last_name: {
        type: DataTypes.TEXT,
    },
    email: {
        allowNull: false,
        type: DataTypes.TEXT,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        allowNull: false,
        type: DataTypes.TEXT,
    },
    birthday: {
        type: DataTypes.TEXT,
    } }, {
        timestamps: false 
    }
)


module.exports = Users;





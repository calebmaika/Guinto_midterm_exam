
    //bring in the datatypes from sequelize
    const { DataTypes } = require('sequelize');
    //import the sequelize instance
    const sequelize = require('./config/database');

    // define user model
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'active'
        }
    }, {
        tableName: 'users',
        timestamps: false // disable createdAt/updatedAt fields
    });

    module.exports = User;

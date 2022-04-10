const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Post model
class Sold extends Model {}

// Create fields and columns for Sold
Sold.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        sold_amount: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            references:  { model: 'post', key: 'id' }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: { model: 'user', key: 'id' }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'sold',
    }
);

module.exports = Sold;
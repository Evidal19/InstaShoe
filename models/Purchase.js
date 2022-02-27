const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Post model
class Purchase extends Model {}

// Create fields and columns for Purchase
Purchase.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        purchase_amount: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            references:  {model: 'post', key: 'id'}
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'purchase',
    }
);

module.exports = Purchase;
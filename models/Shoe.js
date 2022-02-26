const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Shoe model
class Shoe extends Model {}

// Create fields and columns for Shoe
Shoe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        brand: { // (e.g. Nike, Adidas)
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references:  {model: 'user', key: 'id'}
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'shoe',
    }
);

module.exports = Shoe;
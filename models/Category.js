const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Category model
class Category extends Model {}

// Create fields and columns for Shoe
Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        type: { // (e.g. tennis shoes, flip flops)
            type: DataTypes.STRING,
            allowNull: false,
        },
        shoe_id: {
            type: DataTypes.INTEGER,
            references:  {model: 'shoe', key: 'id'}
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
    }
);

module.exports = Category;
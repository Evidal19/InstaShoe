const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Comment model
class Comment extends Model {}

// Create fields and columns for Comment
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references:  {model: 'user', key: 'id'}
        },
        post_id: {
            type: DataTypes.INTEGER,
            references:  {model: 'post', key: 'id'}
        },
        date: {
            type: DataTypes.DATE(6),
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;
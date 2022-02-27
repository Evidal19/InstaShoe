const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Post model
class Post extends Model {}

// Create fields and columns for Post
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        post_description: {
            type: DataTypes.STRING,
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
        modelName: 'post',
    }
);

module.exports = Post;
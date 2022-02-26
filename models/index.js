const User = require('./User');
const Shoe = require('./Shoe');
const Post = require('./Post');
const Category = require('./Category');
const Comment = require('./Comment');

// create associations between tables

// link User and Shoe (one-to-many relationship)
User.hasMany(Shoe, {
    foreignKey: 'user_id',
    OnDelete: 'SET NULL'
});

Shoe.belongsTo(User, {
    foreignKey: 'user_id',
    OnDelete: 'SET NULL'
});

// link User and Post (one-to-many)
User.hasMany(Post, {
    foreignKey: 'user_id',
    OnDelete: 'SET NULL'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    OnDelete: 'SET NULL'
});

// link User and Comment (one-to-many)
User.hasMany(Comment, {
    foreignKey: 'user_id',
    OnDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    OnDelete: 'SET NULL'
});

// link Shoe and Category (one-to-many)
Shoe.hasMany(Category, {
    foreignKey: 'shoe_id',
    OnDelete: 'SET NULL'
});

Category.belongsTo(Shoe, {
    foreignKey: 'shoe_id',
    OnDelete: 'SET NULL'
});

// link Post and Comment (one-to-many)
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    OnDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    OnDelete: 'SET NULL'
});

module.exports = {
    User,
    Shoe,
    Post,
    Category,
    Comment
};
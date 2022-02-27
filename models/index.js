const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// create associations between tables

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
    Post,
    Comment
};
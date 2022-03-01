const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Purchase = require('./Purchase');
const Sell = require('./Sell');

// create associations between tables

// link User and Post (one-to-many relationship)
User.hasMany(Post, {
    foreignKey: 'user_id',
    OnDelete: 'SET NULL'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    OnDelete: 'SET NULL'
});

// link User and Post through Purchases
User.belongsToMany(Post, {
    through: Purchase,
    as: 'purchased_posts',

    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
    through: Purchase,
    as: 'purchased_posts',

    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

// See if this (above) works for Purchase.findAll in home-routes; if not, delete

// link Purchase to User and Vote

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

//adding purchase/sell relationships
Post.hasOne(Purchase, {
  foreignKey: 'post_id',
//   OnDelete: 'SET NULL'
});

Purchase.belongsTo(Post, {
    foreignKey: 'post_id',
    OnDelete: 'SET NULL'
});

// link User and Purchase (one-to-many)
User.hasMany(Purchase, {
    foreignKey: 'user_id',
    // onDelete: 'SET NULL'
});

Purchase.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = {
    User,
    Post,
    Purchase,
    Comment
};
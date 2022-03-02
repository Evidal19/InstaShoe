const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Purchase = require('./Purchase');
const Image = require('./Image');

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

Post.hasOne(Image, {
    foreignKey : 'img_src'
});

Image.belongsTo(Post, {
    foreignKey: 'img_src'
});

module.exports = {
    User,
    Post,
    Purchase,
    Comment,
    Image
};
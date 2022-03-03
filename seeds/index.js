const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedPurchases = require('./purchase-seeds');
const seedSolds = require('./sold-seeds');

const sequelize = require('../config/connection');

// create tables in mySQL via sequelize
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  await seedPurchases();
  console.log('\n----- PURCHASES SEEDED -----\n');

  
  await seedSolds();
  console.log('\n----- SOLDS SEEDED -----\n');
  
  process.exit(0);
};

seedAll();

const { Category } = require('../models');

// seed data for category here

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
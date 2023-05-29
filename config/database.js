const mongoose = require('mongoose');
const dotenv = require('dotenv');



mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB`);
});
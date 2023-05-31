// dotenv
require('dotenv').config();

// express
const express = require('express');
const app = express();

//load  controllers
const PostController = require('./controllers/posts');
app.use('/posts', PostController);

// path
const path = require('path');

// model
const Post = require('./models/Post');

// connect to database
require('./config/database');

// cors
const cors = require('cors');

// port 
const PORT = process.env.PORT || 3001

// other variables
const logger = require('morgan');
const cookieParser = require('cookie-parser');


// middleware
app.use((req, res, next) => {
console.log('I run for all routes');
next();
});

app.use(cors());
app.use(express.json());
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, 'build')));
app.use(logger('dev')); 

//import seed data
const seedData = require('./utilities/data');

//seed data
app.get('/seed', async (req,res) => {
  try {
    await Post.deleteMany({});
    await Post.insertMany(seedData);
    res.send('Posts seeded!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error in seeding');
  }
});

// listener
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
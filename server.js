// dotenv
require('dotenv').config();

// express
const express = require('express');
const app = express();

// cors
const cors = require('cors');

// path
const path = require('path');

// model
const Post = require('./models/Post');

// connect to database
require('./config/database');

//load  controllers
const PostController = require('./controllers/posts');


// other variables
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3001
const methodOverride = require('method-override');


//import seed data
const seedData = require('./utilities/data');


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
app.use(methodOverride('_method'));

//routes
app.use('/posts', PostController);

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
app.listen(PORT,  () => {
  console.log(`Server is running on port ${PORT}`);
});


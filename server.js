// dotenv
require('dotenv').config();

// path
const path = require('path');
const cookieParser = require('cookie-parser');

// express
const express = require('express');

// post model
const Post = require('./models/Post');

// connect to database
require('./config/database');

//instantiate express
const app = express();

// cors
const cors = require('cors');

// port 
const PORT = process.env.PORT || 3001

// other variables
const logger = require('morgan');
app.use(logger('dev')); 


// middleware
app.use((req, res, next) => {

    console.log('I run for all routes');
    next();
});

app.use(cors());
app.use(express.json());
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, 'build')));

//routes
const postRoutes = require('./routes/post');
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

//import seed data
const postData = require('./utilities/data');

//seed data
app.get('/seed', async (req,res) => {
  try {
    await Post.deleteMany({});
    await Post.insertMany(postData);
    res.send('Posts seeded!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error seeding');
  }
});



// listener
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
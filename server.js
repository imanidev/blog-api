// dotenv
require('dotenv').config();

// path
const path = require('path');
const cookieParser = require('cookie-parser');

// express
const express = require('express');

// connect to database
require('./config/database');

//instantiate express
const app = express();


// controllers
const postsController = require('./controllers/posts');
const userController = require('./controllers/user');

// cors
const cors = require('cors');

// port 
const port = 3000;

// other variables
const logger = require('morgan');
const Post = require('./models/Post');
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

//import routes
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

// routes
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

// listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
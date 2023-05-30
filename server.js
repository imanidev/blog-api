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
const logger = require('morgan')
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


// routes
// app.use('/posts', postsController);
// app.use('/user', userController);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
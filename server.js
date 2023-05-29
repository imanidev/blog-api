// dotenv
require('dotenv').config();

// path
const path = require('path');

// express
const express = require('express');

//instantiate express
const app = express();

// mongoose

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to mongodb'))
  .catch(err => console.log(err));


// controllers



// cors
const cors = require('cors');

// port 
const port = 3000;

// other variables
const logger = require('morgan')
app.use(logger('dev')); 


// middleware
app.use((req, res, next) => {
  next(); 
});
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));


// routes
const postsRouter = require('./controllers/posts');
const userRouter = require('./controllers/user');

// listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
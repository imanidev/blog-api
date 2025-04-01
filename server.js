// Import necessary modules
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const Post = require('./models/Post');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const { seedData } = require('./utilities/data'); // Destructure seedData for clarity
require('./config/database'); // Connect to the database

// Load controllers
const PostController = require('./controllers/posts');

// Define the port
const PORT = process.env.PORT || 3001;

// Middleware
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

// Routes
app.use('/posts', PostController);

// Seed data route
app.get('/seed', async (req, res) => {
  try {
    await Post.deleteMany({});
    const insertedPosts = await Post.insertMany(seedData);
    res.send(`Posts seeded! Inserted ${insertedPosts.length} posts.`);
  } catch (error) {
    console.error('Error in seeding data:', error);
    res.status(500).send('Error in seeding');
  }
});

// Listener
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//  Index - GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
console.log(error);
  }
});

// New - handled by React

//Delete - DELETE a post
router.delete('/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (error) {
    console.log(error);
  }
});

//Update 
router.put('/:id', async (req, res) => {
  const { title, content, image, author, timestamp } = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
      title,
      content,
      image,
      author,
      timestamp
    }, { new: true }); // new: true returns the updated post
    res.json(updatedPost);
  } catch (error) {
    console.log(error);
  }
});

//Create
router.post('/', async (req, res) => {
  try {
    const createdPost = await Post.create(req.body);
    res.json(createdPost);
  } catch (error) {
    console.log(error);
  }
});

// Edit - handled by React
  
// Show - GET a single post
  router.get('/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.json(post);
    } catch (error) {
      console.log(error);
    }
  });


// find by title - search query
router.get('/search', async (req, res) => {
  try {
    const posts = await Post.find({ title: req.query.title });
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
});





module.exports = router;
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single post by id
router.get('/:id', getPost, (req, res) => {
  res.json(res.post);
});

// CREATE a new post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE a post by id
router.put('/:id', getPost, async (req, res) => {
  if (req.body.title != null) {
    res.post.title = req.body.title;
  }

  if (req.body.content != null) {
    res.post.content = req.body.content;
  }

  try {
    const updatedPost = await res.post.save();
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a post by id
router.delete('/:id', getPost, async (req, res) => {
  try {
    await res.post.remove();
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// middleware function to get a post by id
async function getPost(req, res, next) {
  try {
    const post = await Post.findById(req.params.id);

    if (post == null) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.post = post;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = router;
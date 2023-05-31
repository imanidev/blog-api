const express = require('express')
const router = express.Router()
const Post = require('../models/Post');

//show all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
});

//create new post
router.post('/', async (req, res) => {
  try {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      createdAt: formattedDate,
      updatedAt: formattedDate
    });
    const createdPost = await post.save();
    res.json(createdPost);
  } catch (error) {
    console.log(error);
  }
});

// delete a post
router.delete('/:id', async (req, res) => {
  try {
    await Post.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Post deleted' });
  } catch (error) {
    console.log(error);
  }
});

//update post by id
router.put('/:id', async (req, res) => {
  const { title, content, image } = req.body;
  try {
    const updatedPost = await Post.findOneAndUpdate(
      { _id: req.params.id },
      { title, content, image },
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    console.log(error);
  }
});

//get post by id  
router.get('/:id', async (req, res) => {
  try {
    const foundPost = await Post.findById(req.params.id);
    res.json(foundPost);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;


const express = require('express')
const router = express.Router()
const Post = require('../models/Post');

//show all posts
router.get('/', (req, res) => {
  Post.find({})
    .then((posts) => {
      res.json(posts);
    })
    .catch((error) => {
      console.log(error);
    });
});

//create new post
router.post('/', (req, res) => {
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
      image: req.body.image,
      author: req.body.author,
      createdAt: formattedDate,
      updatedAt: formattedDate
    });
    const createdPost = post.save();
    res.json(createdPost);
  } catch (error) {
    console.log(error);
  }
});

// delete a post
router.delete('/:id', (req, res) => {
  Post.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      res.json({ message: 'Post deleted' });
    })
    .catch((error) => {
      console.log(error);
    });
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
router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then((foundPost) => {
      res.json(foundPost);
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;

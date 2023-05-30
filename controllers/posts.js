const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
};

exports.createPost = async (req, res) => {
  try {
    const createdPost = await Post.create(req.body);
    res.json(createdPost);
  } catch (error) {
    console.log(error);
  }
};

exports.getPostById = async (req, res) => {
  try {
    const foundPost = await Post.findById(req.params.id);
    res.json(foundPost);
  } catch (error) {
    console.log(error);
  }
};

exports.updatePostById = async (req, res) => {
  const { title, content, image, author, timestamp } = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
      title,
      content,
      image,
      author,
      timestamp
    }, { new: true });
    res.json(updatedPost);
  } catch (error) {
    console.log(error);
  }
};

exports.deletePostById = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (error) {
    console.log(error);
  }
};

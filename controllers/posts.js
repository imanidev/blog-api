const Post = require('../models/Post');


//get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
};

//create new post
exports.createPost = async (req, res) => {
  try {
    const createdPost = await Post.create(req.body);
    res.json(createdPost);
  } catch (error) {
    console.log(error);
  }
};

//get post by id
exports.getPostById = async (req, res) => {
  try {
    const foundPost = await Post.findById(req.params.id);
    res.json(foundPost);
  } catch (error) {
    console.log(error);
  }
};

//update post by id
exports.updatePostById = async (req, res) => {
  const { title, content, image } = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
      title,
      content,
      image
    }, { new: true }); //returns the updated post
    res.json(updatedPost); 
  } catch (error) {
    console.log(error);
  }
};

//delete post by id
exports.deletePostById = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (error) {
    console.log(error);
  }
};

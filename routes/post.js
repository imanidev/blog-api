const express = require('express');
const router = express.Router();
const PostController = require('../controllers/posts');

router.get('/', PostController.getAllPosts);
router.post('/', PostController.createPost);
router.get('/:id', PostController.getPostById);
router.put('/:id', PostController.updatePostById);
router.delete('/:id', PostController.deletePostById);

module.exports = router;

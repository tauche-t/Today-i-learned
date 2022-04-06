const express = require('express');
const { Post } = require('../models');
const { isLoggedIn } = require('./middlewares');
const router = express.Router();

router.post('/', isLoggedIn, async (req, res) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/', (req, res) => {
  
});

module.exports = router;

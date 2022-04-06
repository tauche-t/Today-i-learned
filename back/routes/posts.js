const express = require('express');
const { Op } = require('sequelize');
const { Post, User } = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const where = {};
    if(parseInt(req.query.lastId, 10)) {
      where.id = { [Op.li]: parseInt(req.query.lastId, 10) }
    }
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [['createdAt', 'DESC']],
      include: [{
        model: User,
      }],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;


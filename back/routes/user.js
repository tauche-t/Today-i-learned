const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User, Post } = require('../models');

const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) {
      console.error(err);
      next(err);
    }

    if(info) {
      return res.status(401).send(info.reason);
    }

    return req.login(user, async (loginErr) => {
      if(loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }

      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: ['id', 'nickname', 'email'],
        include: [{
          model: Post,
        }]
      });

      return res.json(fullUserWithoutPassword);
    });
  }) (req, res, next);
});

router.post('/', isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      }
    });
    if(exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.');
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 11);
    const users = await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/me', async (req, res, next) => {
  try {
    if(req.user) {
      const user  = await User.findOne({
        where: { id: req.user.id },
        attributes: ['id', 'nickname', 'email'],
        include: [{
          model: Post,
        }]
      });
      res.status(200).json(user);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const users  = await User.findAll({
      attributes: ['id', 'nickname', 'email'],
    });
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
  try {
    await User.update({
      nickname: req.body.nickname,
    }, {
      where: { id: req.user.id }
    });

    res.status(200).json({ nickname: req.body.nickname });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;
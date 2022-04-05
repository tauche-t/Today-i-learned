const express = require('express');
const db = require('./models');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
  console.log('서버 실행 중');
});

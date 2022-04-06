const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const db = require('./models');
const path = require('path');

const passportConfig = require('./passport');

const dotenv = require('dotenv');

dotenv.config();

const app = express();

db.sequelize.sync().then(() => {
  console.log('db 연결 성공');
}).catch(console.error);

passportConfig();

app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, 'uploads')));

app.use(cookieParser("todaysecret"));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: "todaysecret"
}));
app.use(passport.initialize());
app.use(passport.session());

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const postsRouter = require('./routes/posts');

app.use('/post', postRouter);
app.use('/user', userRouter);
app.use('/posts', postsRouter);

app.listen(3065, () => {
  console.log('서버 실행 중');
});

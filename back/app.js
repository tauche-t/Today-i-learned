const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const db = require('./models');
const path = require('path');
const hpp = require('hpp');
const morgan = require('morgan');
const helmet = require('helmet');

const passportConfig = require('./passport');

const dotenv = require('dotenv');

dotenv.config();

const app = express();

db.sequelize.sync().then(() => {
  console.log('db 연결 성공');
}).catch(console.error);

passportConfig();

if(process.env.NODE.ENV === 'production') {
  app.use(morgan('combined'));
  app.use(hpp());
  app.use(helmet());
}else{
  app.use(morgan('dev'));
}

app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, 'uploads')));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
    domain: process.env.NODE_ENV === 'production' && '.hummingbird.kr'
  }
}));
app.use(passport.initialize());
app.use(passport.session());

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const postsRouter = require('./routes/posts');

app.use('/post', postRouter);
app.use('/user', userRouter);
app.use('/posts', postsRouter);

app.use('/', (req, res) => {
  res.send('hello express');
});

app.listen(80, () => {
  console.log('서버 실행 중');
});

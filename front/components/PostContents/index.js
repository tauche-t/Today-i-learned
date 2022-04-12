import { useCallback, useEffect, useRef, useState } from 'react';
import { ADD_COMMENT_REQUEST, REMOVE_POST_REQUEST } from '../../reducer/post';
import { BtnWrap, Comment, Post, PostCon, ToDos, UserProfile, Wrapper } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaCommentDots, FaRegCommentDots } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import CommentContents from '../CommentContents';
import PostImages from '../PostImages';
import ToDoContents from '../ToDoContents';
import moment from 'moment';

moment.locale('ko');

const PostContents = ({ post }) => {
  const [comment, setComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [focus, setFocus] = useState(false);
  const dispatch = useDispatch();
  const id = useSelector(state => state.user.me?.id);
  const { addCommentDone } = useSelector(state => state.post);
  const [complete, setComplete] = useState(false);

  const onClickComment = useCallback(() => {
    setComment(prev => !prev);
  }, []);

  const onChangeComment = useCallback((e) => {
    setCommentText(e.target.value);
  }, []);

  const onSubmitComment = useCallback((e) => {
    e.preventDefault();

    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, postId: post.id, userId: id }
    });
  }, [commentText, id]);

  useEffect(() => {
    if(addCommentDone) {
      setCommentText("");
    }
  }, [addCommentDone]);

  const onClickRemove = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);

  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  // console.log(post.content.split(/\r\n|\r\n/).join("<br />"));

  return (
    <Wrapper>
      <Post>
        <UserProfile>{ post.User.nickname[0] }</UserProfile>
        <PostCon>
          <div className="userInfo">
            <span className='userNickname'>{ post.User.nickname }</span>
            <span className='userEmail'>{ `@${post.User.email.split('@')[0]}` }</span>
            <span className="date">{moment(post.createdAt).startOf('hour').fromNow()}</span>
          </div>
          { post.Images[0] &&
            <div className='postImg'>
              {/* <img src={`http://localhost:3065/${post.Images[0].src}`} alt={`http://localhost:3065/${post.Images[0].src}`} /> */}
              <PostImages images={post.Images} />
            </div>
          }

          {post.content ? (
            <p className='contents'>{post.content}</p>
          ) : (
            <ToDos>
              {JSON.parse(post.todos)?.map((todo, i) => (
                <ToDoContents key={todo + i} todo={todo} />
              ))}
            </ToDos>
          )}

          <BtnWrap>
            <span className="commentsLength">{post.Comments?.length}개의 댓글</span>
            <button className="commentIcon" onClick={onClickComment}>
              { comment ? <FaCommentDots /> : <FaRegCommentDots />}
            </button>
            <button className="deleteIcon" onClick={onClickRemove}>
              <AiOutlineDelete />            
            </button>
          </BtnWrap>
        </PostCon>
      </Post>
      { comment ? (
        <Comment>
          <form onSubmit={onSubmitComment}>
            <textarea value={commentText} onFocus={onFocus} onBlur={onBlur} onChange={onChangeComment} maxLength={110}></textarea>
            <button type="submit" className={ focus && "focus" }><FiSend /></button>
          </form>
          { post.Comments.map((comment, i) => (
            <CommentContents key={comment.content + i} comment={comment} />
          )) }
        </Comment>
      ) : null }
    </Wrapper>
  );
}

export default PostContents;
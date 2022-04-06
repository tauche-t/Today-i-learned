import { useCallback, useEffect, useState } from 'react';
import { ADD_COMMENT_REQUEST, REMOVE_POST_REQUEST } from '../../reducer/post';
import { Comment, Post, PostCon, UserProfile, Wrapper } from './style';
import { useDispatch, useSelector } from 'react-redux';

const PostContents = ({ post }) => {
  const [comment, setComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();
  const id = useSelector(state => state.user.me?.id);
  const { addCommentDone } = useSelector(state => state.post);

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

  return (
    <Wrapper>
      <Post>
        <UserProfile>{ post.User.nickname[0] }</UserProfile>
        <PostCon>
          <span className='userNickname'>{ post.User.nickname }</span>
          <span className='userEmail'>{ `@${post.User.email.split('@')[0]}` }</span>
          { post.Images[0] && <img src={`http://localhost:3065/${post.Images[0].src}`} alt={`http://localhost:3065/${post.Images[0].src}`} /> }
          <p className='contents'>{post.content}</p>
          <button onClick={onClickComment}>댓글</button>
          <button onClick={onClickRemove}>제거</button>
        </PostCon>
      </Post>
      { comment ? (
        <Comment>
          <form onSubmit={onSubmitComment}>
            <textarea value={commentText} onChange={onChangeComment}></textarea>
            <button type="submit">게시</button>
          </form>
          { post.Comments.map((comment) => (
            <p>{comment.content}</p>
          )) }
        </Comment>
      ) : null }
    </Wrapper>
  );
}

export default PostContents;
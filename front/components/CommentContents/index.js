import { UserProfile } from "../PostContents/style"
import { Comment, Wrapper, CommentCon } from "./style";

const CommentContents = ({ comment }) => {
  return (
    <Wrapper>
      <Comment>
        <UserProfile>{ comment.User.nickname[0] }</UserProfile>
        <CommentCon>
          <div className="userInfo">
            <span className='userNickname'>{ comment.User.nickname }</span>
            <span className='userEmail'>{ `@${comment.User.email.split('@')[0]}` }</span>
          </div>
          <p className='contents'>{comment.content}</p>
        </CommentCon>
      </Comment>
    </Wrapper>
  );
}

export default CommentContents;
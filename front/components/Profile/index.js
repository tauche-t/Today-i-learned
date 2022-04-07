import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT_REQUEST } from '../../reducer/user';
import { MyEmail, MyNickname, MyProfile, Wrapper, WriteBtn } from "./style";
import { BiLogOut } from 'react-icons/bi';

const Profile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);

  const onClickLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  return (
    <Wrapper>
      <MyProfile>P</MyProfile>
      <MyNickname>{ me.nickname }</MyNickname>
      <MyEmail>{ `@${me.email.split('@')[0]}` }</MyEmail>
      <button className="logOut" onClick={onClickLogOut}><BiLogOut /></button>
      <WriteBtn>
        <button>글쓰기</button>
        <button>공부 목록 작성</button>
      </WriteBtn>
    </Wrapper>
  );
}

export default Profile;
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_NICKNAME_REQUEST, LOG_OUT_REQUEST } from '../../reducer/user';
import { InfoWrap, MyEmail, MyNickname, MyProfile, Wrapper, WriteBtn } from "./style";
import { BiLogOut, BiPencil } from 'react-icons/bi';

const Profile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const [changeNickname, setChangeNickname] = useState(false);
  const [writeNickname, setWriteNickname] = useState("");
  const { changeNicknameDone } = useSelector(state => state.user);

  const onClickLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  const onChangeNickname = useCallback(() => {
    setChangeNickname(prev => !prev);
  }, [changeNickname]);

  const onChangeWrite = useCallback((e) => {
    setWriteNickname(e.target.value);
  }, [writeNickname]);

  const onSubmitChange = useCallback((e) => {
    e.preventDefault();

    dispatch({
      type: CHANGE_NICKNAME_REQUEST,
      data: writeNickname,
    });

    if(changeNicknameDone) {
      setChangeNickname(false);
      setWriteNickname("");
    }
  }, [writeNickname, changeNickname]);

  return (
    <Wrapper>
      <MyProfile>{ me.nickname[0] }</MyProfile>
      <InfoWrap>
        <div className="myInfo">
          { changeNickname ? (
            <form onSubmit={onSubmitChange}>
              <input className="modifyInput" value={writeNickname} onChange={onChangeWrite} placeholder={me.nickname} />
              <button type="submit" className="modifyConfirmBtn">수정</button>
            </form>
          ) : <MyNickname>{ me.nickname }</MyNickname> }
          <MyEmail>{ `@${me.email.split('@')[0]}` }</MyEmail>
        </div>
        <button className="modify" onClick={onChangeNickname}><BiPencil /></button>
      </InfoWrap>
      <button className="logOut" onClick={onClickLogOut}><BiLogOut /></button>
      <WriteBtn>
        <button>글쓰기</button>
        <button>공부 목록 작성</button>
      </WriteBtn>
    </Wrapper>
  );
}

export default Profile;
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_NICKNAME_REQUEST, LOG_OUT_REQUEST } from '../../reducer/user';
import { FormBox, InfoWrap, MyEmail, MyNickname, MyProfile, Overlay, Wrapper, WriteBtn } from "./style";
import { BiLogOut, BiPencil } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import PostForm from '../PostForm';
import ToDoForm from '../ToDoForm';

const Profile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const [changeNickname, setChangeNickname] = useState(false);
  const [writeNickname, setWriteNickname] = useState("");
  const { changeNicknameDone } = useSelector(state => state.user);
  const [writeOpen, setWriteOpen] = useState(false);
  const [toDoOpen, setToDoOpen] = useState(false);

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

  const onClickWrite = useCallback(() => {
    setWriteOpen(true);
  }, []);

  const onClickCancel = useCallback(() => {
    setWriteOpen(false);
  }, []);

  const onClickToDo = useCallback(() => {
    setToDoOpen(true);
  }, []);

  const onClickCancelToDo = useCallback(() => {
    setToDoOpen(false);
  }, []);

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
          {/* <MyEmail>{ `@${me.email.split('@')[0]}` }</MyEmail> */}
        </div>
        <button className="modify" onClick={onChangeNickname}><BiPencil /></button>
      </InfoWrap>
      <button className="logOut" onClick={onClickLogOut}><BiLogOut /></button>
      <WriteBtn>
        <button onClick={onClickWrite}>글쓰기</button>
        <button onClick={onClickToDo}>공부 목록 작성</button>
      </WriteBtn>

      { writeOpen ? (
        <Overlay>
          <FormBox>
            <PostForm open={setWriteOpen} />
            <div className="cancel" onClick={onClickCancel}>취소</div>
          </FormBox>
        </Overlay>
      ) : null }

    { toDoOpen ? (
        <Overlay>
          <FormBox>
            <ToDoForm open={setToDoOpen} />
            <div className="cancel" onClick={onClickCancelToDo}>취소</div>
          </FormBox>
        </Overlay>
      ) : null }
    </Wrapper>
  );
}

export default Profile;
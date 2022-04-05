import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { LOG_OUT_REQUEST } from '../../reducer/user';
import { MyProfile, Wrapper } from "./style";

const Profile = () => {
  const dispatch = useDispatch();
  const onClickLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  return (
    <Wrapper>
      <MyProfile>P</MyProfile>
      <button onClick={onClickLogOut}>로그아웃</button>
      <button>글쓰기</button>
      <button>공부 목록 작성</button>
    </Wrapper>
  );
}

export default Profile;
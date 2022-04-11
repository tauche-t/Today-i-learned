import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from '../../hooks/useInput';
import { SIGN_UP_REQUEST } from "../../reducer/user";
// import { BtnInfo, Form, SignBox, Wrapper } from "./style";
import { BiRightArrowAlt } from 'react-icons/bi';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #edf2ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignBox = styled.div`
  padding: 50px 100px 70px;
  width: 550px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 15px #dee2e6;

  h1 {
    text-align: center;
    margin-bottom: 55px;
  }
`;

export const Form = styled.form`
  width: 100%;

  div {
    /* margin-bottom: 30px; */
    height: 83px;

    label {
      color: #868e96;
    }

    input {
      width: 100%;
      border: 0;
      outline: 0;
      border-bottom: 1px solid #dee2e6;
      padding: 10px 5px 5px;
      box-sizing: border-box;
      
      &:focus {
        border-bottom: 2px solid #74c0fc;
      }
    }
  }
`;

export const BtnInfo = styled.div`
  margin-top: 20px;

  button {
    display: block;
    border: 0;
    outline: 0;
    background: none;
    cursor: pointer;
    margin: 0 auto;
    border: 1px solid #a5d8ff;
    color: #74c0fc;
    padding: 7px 14px;
    font-size: 14px;
    border-radius: 5px;

    svg {
      font-size: 16px;
      vertical-align: bottom;
      transition: all 0.5s;
    }

    &:hover {
      svg {
        transform: translateX(5px);
      }
    }
  }

  a {
    display: block;
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
    color: #adb5bd;
  }
`;



const SignUp = () => {
  const [nickname, onChangeName] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [confirm, setConfirm] = useState(true);
  const router = useRouter();
  const { signUpDone } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if(signUpDone) {
      router.replace('/logIn');
      alert('가입을 축하드립니다!');
    }
  }, [signUpDone]);

  const onChangeConfirm = useCallback((e) => {
    setPasswordConfirm(e.target.value);
    setConfirm(e.target.value === password);
  }, [password, confirm]);

  const onSubmitSignUp = useCallback((e) => {
    e.preventDefault();

    dispatch({
      type: SIGN_UP_REQUEST,
      data: { nickname, email, password },
    });
  }, [nickname, email, password]);

  return (
    <Wrapper>
      <SignBox>
        <h1>Sign Up</h1>

        <Form onSubmit={onSubmitSignUp}>
          <div>
            <label htmlFor="nickname">Nickname</label>
            <br />
            <input name="nickname" value={nickname} onChange={onChangeName} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name="password" value={password} onChange={onChangePassword} />
          </div>
          <div>
            <label htmlFor="passwordConfirm">Password Confirm</label>
            <br />
            <input type="password" name="passwordConfirm" value={passwordConfirm} onChange={onChangeConfirm} />
            { confirm ? null : <span>비밀번호가 일치하지 않습니다.</span> }
          </div>

          <BtnInfo>
            <button type="submit">회원가입 <BiRightArrowAlt /></button>
            <Link href="/"><a>취소</a></Link>
          </BtnInfo>
        </Form>
      </SignBox>
    </Wrapper>
  );
}

export default SignUp;
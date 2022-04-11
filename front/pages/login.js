import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { LOG_IN_REQUEST } from '../reducer/user';
// import { Form, LeftBox, RightBox, SignBox, SignBtn, Wrapper } from './style';
import { BiRightArrowAlt } from 'react-icons/bi';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #dbe4ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignBox = styled.div`
  display: flex;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.1);
`;

export const LeftBox = styled.div`
  width: 500px;
  /* height: 500px; */
  background: #4dabf7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  p {
    color: #fff;
    font-size: 24px;
  }
`;

export const RightBox = styled.div`
  width: 500px;
  /* height: 500px; */
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 100px 100px;
  box-sizing: border-box;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Form = styled.form`
  width: 100%;

  h1 {
    text-align: center;
    margin-bottom: 50px;
  }

  .formBlock {
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

  & > a {
    display: block;
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    color: #adb5bd;
  }
`;

export const SignBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    border: 1px solid #4dabf7;
    color: #74c0fc;
    padding: 5px 18px;
    font-size: 14px;
    border-radius: 5px;
    margin: 0 25px;
  }

  button {
    border: 1px solid #4dabf7;
    outline: 0;
    color: #fff;
    padding: 7px 18px;
    font-size: 14px;
    border-radius: 5px;
    margin-right: 20px;
    background: #4dabf7;
    cursor: pointer;

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
`;


const LogIn = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const dispatch = useDispatch();
  const { logInDone } = useSelector(state => state.user);
  const router = useRouter();

  useEffect(() => {
    if(logInDone) {
      router.replace('/');
    }
  }, [logInDone]);

  const onSubmitLogIn = useCallback((e) => {
    e.preventDefault();

    dispatch({
      type: LOG_IN_REQUEST,
      data: { email, password },
    });
  }, [email, password]);

  return (
    <Wrapper>
      <SignBox>
        <LeftBox>
          <p>Today i learned</p>
        </LeftBox>
        <RightBox>
          <Form onSubmit={onSubmitLogIn}>
            <h1>Log In</h1>
            <div className="formBlock">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={email} onChange={onChangeEmail} />
            </div>
            <div className="formBlock">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={password} onChange={onChangePassword} />
            </div>
            
            <SignBtn>
              <Link href="/signup"><a>Sign Up</a></Link>
              <button type="submit">Log In <BiRightArrowAlt /></button>
            </SignBtn>
            <Link href="/"><a>돌아가기</a></Link>
          </Form>
        </RightBox>
      </SignBox>
    </Wrapper>
  );
}

export default LogIn;
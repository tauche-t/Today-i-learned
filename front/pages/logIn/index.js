import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { LOG_IN_REQUEST } from '../../reducer/user';
import { Form, LeftBox, RightBox, SignBox, SignBtn, Wrapper } from './style';
import { BiRightArrowAlt } from 'react-icons/bi';

const LogIn = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const dispatch = useDispatch();
  const { logInDone } = useSelector(state => state.user);
  const router = useRouter();

  useEffect(() => {
    if(logInDone) {
      router.push('/');
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
              <Link href="/signUp"><a>Sign Up</a></Link>
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
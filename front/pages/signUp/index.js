import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from '../../hooks/useInput';
import { SIGN_UP_REQUEST } from "../../reducer/user";
import { BtnInfo, Form, SignBox, Wrapper } from "./style";
import { BiRightArrowAlt } from 'react-icons/bi';

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
      router.push('/logIn');
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
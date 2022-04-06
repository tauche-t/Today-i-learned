import Link from 'next/link';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PostForm from '../components/PostForm';
import PostContents from '../components/PostContents';
import Profile from '../components/Profile';
import { LOAD_ME_REQUEST, LOG_OUT_REQUEST } from '../reducer/user';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 50px 100px;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Col = styled.div`
  width: ${props => props.wide ? '970px' : '325px'};
  height: 100%;
  margin: 0 25px;
`;

const Logo = styled.div`
  font-size: 24px;
  text-align: center;
`

const SignBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  a {
    color: #74c0fc;
    padding: 7px 15px;
    border: 1px solid #74c0fc;
    border-radius: 7px;
    margin: 0 14px;
  }
`;

const Home = () => {
  const { me } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_ME_REQUEST,
    });
  }, []);

  return (
    <Wrapper>
      <Row>
        <Col>
          <Logo>Today i learned</Logo>
          { me ? <Profile /> : (
            <SignBtn>
              <Link href="/signUp"><a>Sign Up</a></Link>
              <Link href="/logIn"><a>Sign In</a></Link>
            </SignBtn>
          )}
        </Col>
        <Col wide>
          <PostForm />
          { mainPosts?.map((post) => (
            <PostContents key={post.id} post={post} />
          ))}
        </Col>
        <Col></Col>
      </Row>
    </Wrapper>
  );
}

export default Home;
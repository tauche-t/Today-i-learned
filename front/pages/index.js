import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PostForm from '../components/PostForm';
import PostContents from '../components/PostContents';
import Profile from '../components/Profile';
import { LOAD_ME_REQUEST, LOAD_USER_REQUEST, LOG_OUT_REQUEST } from '../reducer/user';
import { LOAD_POSTS_REQUEST } from '../reducer/post';
import UserMembers from '../components/UserMembers';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 50px 100px;
  position: relative;

  &:before {
    content: '';
    display: block;
    width: 70%;
    height: 1px;
    background: #e9ecef;
    position: absolute;
    left: 397px;
    top: 70px;
  }
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
  margin-top: ${props => props.wide && '56px'};

  .memberTitle {
    margin-top: 54px;
    font-size: 22px;
    color: #343a40;
  }
`;

const Logo = styled.h1`
  font-size: 26px;
  text-align: center;
  font-weight: 700;
  color: #495057;
  margin: 0;
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
  const { me, users } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { mainPosts, hasMorePost, toDos, loadPostsLoading } = useSelector(state => state.post);

  useEffect(() => {
    if(hasMorePost) {
      dispatch({
        type: LOAD_POSTS_REQUEST,
      });
    }

    dispatch({
      type: LOAD_USER_REQUEST,
    });

    dispatch({
      type: LOAD_ME_REQUEST,
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if(hasMorePost && !loadPostsLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_POSTS_REQUEST,
            lastId,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [hasMorePost, loadPostsLoading, mainPosts]);

  console.log(users);

  return (
    <Wrapper>
      <Row>
        <Col>
          <Logo>Today I learned</Logo>
          { me ? <Profile /> : (
            <SignBtn>
              <Link href="/signUp"><a>Sign Up</a></Link>
              <Link href="/logIn"><a>Sign In</a></Link>
            </SignBtn>
          )}
        </Col>
        <Col wide>
          {/* <PostForm /> */}
          { mainPosts?.map((post) => (
            <PostContents key={post.id} post={post} />
          ))}
        </Col>
        <Col>
          <h2 className="memberTitle">스터디에 참여해주신 분들</h2>
          { users?.map((members, i) => (
            <UserMembers key={members.id} members={members} />
          ))}
        </Col>
      </Row>
    </Wrapper>
  );
}



export default Home;
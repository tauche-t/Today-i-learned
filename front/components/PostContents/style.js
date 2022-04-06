import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #e9ecef;
`;

export const Post = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 10px;
`;

export const UserProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ced4da;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  margin-right: 10px;
`;

export const PostCon = styled.div`

  .userNickname {
    font-weight: bold;
    font-size: 18px;
    margin-right: 10px;
  }

  .userEmail {
    font-size: 14px;
    color: #a2a7ad;
  }
`;

export const Comment = styled.div`
  width: 100%;
  height: 150px;
  border-top: 1px solid #e9ecef;
`;

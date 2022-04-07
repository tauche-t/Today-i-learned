import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0 10px;
  border-bottom: 1px solid #e9ecef;
`;

export const Post = styled.div`
    width: 100%;
    display: flex;
    /* margin-bottom: 10px; */
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
  width: 100%;

  .userInfo {
    margin-top: 6px;
    margin-bottom: 15px;

    .userNickname {
      font-weight: bold;
      font-size: 18px;
      margin-right: 10px;
    }

    .userEmail {
      font-size: 14px;
      color: #a2a7ad;
    }
  }

  .postImg {
    width: 100%;
    border: 1px solid #e9ecef;
    text-align: center;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 7px;

      img {
        max-width: 500px;
        width: 100%;
        height: auto;
      }
  }

  p {
    margin: 20px 0;
    white-space: pre-line;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    border: 0;
    outline: 0;
    background: none;
    cursor: pointer;
  }

  .commentIcon {
    svg {
      font-size: 20px;
      color: #495057;
    }
  }

  .deleteIcon {
    svg {
      font-size: 22px;
      color: #ff6b6b;
    }
  }
`;

export const Comment = styled.div`
  width: 100%;
  /* height: 150px; */
  border-top: 1px solid #e9ecef;
  padding: 15px 43px;
  margin-top: 10px;

  form {
    width: 100%;
    position: relative;
    margin-bottom: 20px;

    textarea {
      width: 100%;
      height: 95px;
      border: 0;
      outline: 0;
      background: #f1f3f5;
      resize: none;
      padding: 10px 15px;
      overflow-y: hidden;
      border-radius: 4px;
    }

    button {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 15px;
      bottom: 15px;
      border: 0;
      outline: 0;
      background: #d0ebff;
      border-radius: 50%;
      color: #fff;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;

      &.focus {
        background: #4dabf7;
      }
    }
  }
`;

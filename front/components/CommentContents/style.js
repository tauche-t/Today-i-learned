import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0 10px;
  border-top: 1px solid #e9ecef;
`;

export const Comment = styled.div`
    width: 100%;
    display: flex;
    /* margin-bottom: 10px; */
`;

export const CommentCon = styled.div`
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

  p {
    margin: 20px 0;
    white-space: pre-line;
  }
`;

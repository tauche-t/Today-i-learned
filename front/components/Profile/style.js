import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logOut {
    margin: 0;
    border: 0;
    color: #ffa8a8;
    font-size: 27px;
    margin-top: 10px;
    cursor: pointer;
    background: none;
  }
`;

export const MyProfile = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  /* border: 1px solid #4dabf7; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ced4da;
  color: #fff;
  font-size: 20px;
  margin: 30px 0 20px;
`;

export const InfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .modifyInput {
    outline: 0;
    border: 0;
    border-bottom: 1px solid #a5d8ff;
    /* width: 50%; */
  }

  .modifyConfirmBtn {
    border: 0;
    margin: 0;
    padding: 0;
    margin-left: 5px;
    cursor: pointer;
    background: none;
    color: #339af0;
  }

  .modify {
    border: 0;
    margin: 0;
    padding: 0;
    margin-right: -40px;
    margin-left: 20px;
    margin-top: -15px;
    font-size: 20px;
    color: #adb5bd;
    background: none;
    cursor: pointer;
  }
`;

export const MyNickname = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

export const MyEmail = styled.span`
  color: #a2a7ad;
  font-size: 15px;
`;

export const WriteBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  button {
    margin: 30px 0;
    margin-left: 25px;
    border: 0;
    outline: 0;
    background: none;
    font-size: 14px;
    padding: 5px 20px;
    border: 1px solid #339af0;
    border-radius: 35px;
    color: #339af0;
    cursor: pointer;
  }

  &:before {
    content: '';
    display: block;
    width: 85%;
    height: 1px;
    background: #e9ecef;
    position: absolute;
    left: 53%;
    transform: translateX(-50%);
    top: 7px;
  }
`;

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;

  .close {
    color: #fff;
    position: absolute;
    right: 30px;
    top: 10px;
    font-size: 30px;
  }
`;

export const FormBox = styled.div`
  width: 800px;
  height: 430px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  box-sizing: border-box;
  padding: 0 55px;
  border-radius: 10px;
  animation: ${animation} 0.5s 1;

  .cancel {
    border: 2px solid #ffa8a8;
    border-radius: 25px;
    padding: 4px 20px;
    font-size: 14px;
    color: #ffa8a8;
    font-weight: 700;
    cursor: pointer;
    margin-top: 35px;
  }
`;

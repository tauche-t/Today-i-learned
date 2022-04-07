import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
  }

  .logOut {
    margin: 0;
    border: 0;
    color: #ffa8a8;
    font-size: 27px;
    margin-top: 10px;
    cursor: pointer;
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

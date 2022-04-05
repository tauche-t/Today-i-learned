import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #edf2ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignBox = styled.div`
  padding: 50px 100px 70px;
  width: 550px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 15px #dee2e6;

  h1 {
    text-align: center;
    margin-bottom: 55px;
  }
`;

export const Form = styled.form`
  width: 100%;

  div {
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
`;

export const BtnInfo = styled.div`
  margin-top: 20px;

  button {
    display: block;
    border: 0;
    outline: 0;
    background: none;
    cursor: pointer;
    margin: 0 auto;
    border: 1px solid #a5d8ff;
    color: #74c0fc;
    padding: 7px 14px;
    font-size: 14px;
    border-radius: 5px;

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

  a {
    display: block;
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
    color: #adb5bd;
  }
`;


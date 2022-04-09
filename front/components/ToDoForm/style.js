import styled from 'styled-components';

export const ToDoWrap = styled.div`
  width: 100%;
  position: relative;

  input {
    width: 30%;
    border: 0;
    outline: 0;
    border-bottom: 1px solid #adb5bd;
    padding: 3px 5px;
    margin-right: 20px;

    &:focus {
      border-bottom: 2px solid #74c0fc;
    }
  }

  button {
    border: 0;
    outline: 0;
    background: none;
    border: 1px solid #74c0fc;
    border-radius: 25px;
    padding: 3px 10px;
    color: #74c0fc;
    cursor: pointer;
  }

  button.doneBtn {
    position: absolute;
    right: 0;
    bottom: -67px;
    border: 2px solid #74c0fc;
    padding: 4px 20px;
    font-size: 14px;
    font-weight: 700;
  }
`;

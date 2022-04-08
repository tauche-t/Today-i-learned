import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  position: relative;

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
    cursor: pointer;

    &.imageUploadBtn {
      position: absolute;
      left: 14px;
      bottom: 10px;
      background: none;
      color: #343a40;
      font-size: 24px;
    }

    &.focus {
      background: #4dabf7;
    }
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  border: 0;
  outline: 0;
  background: #f1f3f5;
  resize: none;
  padding: 10px 15px;
  overflow-y: hidden;
  border-radius: 4px;
`;

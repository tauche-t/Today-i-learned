import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: 230px;
  position: relative;

  button.sendBtn {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 15px;
    bottom: 91px;
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

    &.focus {
      background: #4dabf7;
    }
  }

  
  button.imageUploadBtn {
      width: 30px;
      height: 30px;
      position: absolute;
      left: 14px;
      bottom: 84px;
      border: 0;
      outline: 0;
      background: none;
      color: #343a40;
      font-size: 20px;
      cursor: pointer;
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

export const PreviewImgWrap = styled.div`
  display: flex;
`;

export const Preview = styled.div`
  width: 80px;
  display: flex;
  align-items: end;
  margin-right: 30px;

  img {
    max-width: 100%;
  }

  button.removeBtn {
    border: 0;
    outline: 0;
    color: #dee2e6;
    background: none;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      color: #adb5bd;
    }
  }
`;

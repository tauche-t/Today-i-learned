import { useCallback, useState } from "react";
import styled from "styled-components";
import { MdDone } from 'react-icons/md';

const Li = styled.li`
    position: relative;
    margin-bottom: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;

    .checkCircle {
      width: 20px;
      height: 20px;
      border: 1px solid #adb5bd;
      color: #000;
      border-radius: 50%;
      margin-right: 10px;
    }

    span {
      color: #000;
    }

    &.done {

      .checkCircle {
        border: 1px solid #74c0fc;
        color: #74c0fc;
      }

      span {
        color: #ced4da;
      }
    }

    /* &:before {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      border: 1px solid #adb5bd;
      position: absolute;
      left: -30px;
      top: 1px;
      border-radius: 50%;
    }
    
    &.complete {
      color: #ced4da;

      &:before {
        background: #74c0fc;
      }
    } */
`;

const ToDoContents = ({ todo }) => {
  const [done, setDone] = useState(false);

  const onClickToDo = useCallback((e) => {
    setDone(prev => !prev);
  }, [done]);

  return (
    <Li onClick={onClickToDo} className={done ? "done" : ""}>
      <div className="checkCircle">{done && <MdDone />}</div>
      <span>{todo}</span>
    </Li>
  );
}

export default ToDoContents;
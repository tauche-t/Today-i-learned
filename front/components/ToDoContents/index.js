import { useCallback, useState } from "react";
import styled from "styled-components";

const Li = styled.li`
    position: relative;
    margin-bottom: 20px;
    cursor: pointer;

    &:before {
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
    }
`;

const ToDoContents = ({ todo }) => {
  const [complete, setComplete] = useState(false);

  const onClickToDo = useCallback((e) => {
    setComplete(prev => !prev);
  }, [complete]);

  return (
    <Li onClick={onClickToDo} className={complete ? "complete" : ""}>{ todo }</Li>
  );
}

export default ToDoContents;
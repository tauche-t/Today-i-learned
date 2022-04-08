import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST, ADD_TODO_REQUEST } from '../../reducer/post';


const ToDoForm = ({ open }) => {
  const [toDoText, setToDoText] = useState();
  const [toDo, setToDo] = useState([]);
  const dispatch = useDispatch();
  const { imagePaths } = useSelector(state => state.post);

  const onChangeToDo = useCallback((e) => {
    setToDoText(e.target.value);
  }, [toDoText]);

  const onSubmitToDo = useCallback((e) => {
    e.preventDefault();
    
    setToDo([toDoText, ...toDo]);
    setToDoText("");
  }, [toDo, toDoText]);

  const onClickConfirm = useCallback(() => {
    open(false);

    const formData = new FormData();
    imagePaths.forEach((p) => {
      formData.append('image', p);
    });
    formData.append('todos', JSON.stringify(toDo));

    dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });

    // dispatch({
    //   type: ADD_POST_REQUEST,
    //   data: JSON.stringify(toDo),
    // });
  }, [toDo, imagePaths]);

  return (
    <div>
      <form onSubmit={onSubmitToDo}>
        <input value={toDoText} onChange={onChangeToDo} />
        <button type="submit">추가</button>
      </form>

      <ul>
        {toDo.map((v, i) => (
          <li key={v + i}>{v}</li>
        ))}
      </ul>

      <button onClick={onClickConfirm}>완료</button>
    </div>
  );
}

export default ToDoForm;
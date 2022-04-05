import { useCallback, useRef } from "react";
import { Textarea } from "./style";
import useInput from '../../hooks/useInput';
import { useDispatch } from "react-redux";
import { ADD_POST_REQUEST } from '../../reducer/post';

const PostForm = () => {
  const [text, onChangeText] = useInput("");
  const imageInput = useRef(null);
  const dispatch = useDispatch();

  const onSubmitPost = useCallback((e) => {
    e.preventDefault();

    dispatch({
      type: ADD_POST_REQUEST,
      data: text,
    });
  }, [text]);

  const onClickImageUpload = useCallback((e) => {
    e.preventDefault();

    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <form onSubmit={onSubmitPost}>
      <Textarea value={text} onChange={onChangeText} maxLength={140} placeholder="오늘 어떤 공부를 하셨나요?"></Textarea>
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <button onClick={onClickImageUpload}>이미지 업로드</button>
        <button type="submit">게시</button>
      </div>
      {/* <div>
        {imagePaths.map(() => (
          <div key={v}>
            <img src={v} alt={v} />
            <div>
              <button>제거</button>
            </div>
          </div>
        ))}
      </div> */}
    </form>
  );
}

export default PostForm;
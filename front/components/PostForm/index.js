import { useCallback, useEffect, useRef, useState } from "react";
import { Textarea } from "./style";
import useInput from '../../hooks/useInput';
import { useDispatch, useSelector } from "react-redux";
import { ADD_POST_REQUEST, REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST } from '../../reducer/post';

const PostForm = () => {
  const [text, setText] = useState("");
  const imageInput = useRef(null);
  const dispatch = useDispatch();
  const { addPostDone, imagePaths } = useSelector(state => state.post);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  useEffect(() => {
    if(addPostDone) {
      setText("");
    }
  }, [addPostDone]);

  const onSubmitPost = useCallback((e) => {
    e.preventDefault();

    const formData = new FormData();
    imagePaths.forEach((p) => {
      formData.append('image', p);
    });
    formData.append('content', text);

    dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  }, [text, imagePaths]);

  const onChangeImages = useCallback((e) => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });

    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData
    });
  }, []);

  const onClickImageUpload = useCallback((e) => {
    e.preventDefault();

    imageInput.current.click();
  }, [imageInput.current]);

  const onRemoveImage = useCallback((index) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      data: index
    });
  }, []);

  return (
    <form onSubmit={onSubmitPost} encType="multipart/form-data">
      <Textarea value={text} onChange={onChangeText} maxLength={140} placeholder="오늘 어떤 공부를 하셨나요?"></Textarea>
      <div>
        <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages} />
        <button onClick={onClickImageUpload}>이미지 업로드</button>
        <button type="submit">게시</button>
      </div>
      <div>
        {imagePaths.map((v, i) => (
          <div key={v}>
            <img src={`http://localhost:3065/${v}`} alt={v} />
            <div>
              <button onClick={onRemoveImage(i)}>제거</button>
            </div>
          </div>
        ))}
      </div>
    </form>
  );
}

export default PostForm;
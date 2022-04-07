import { useCallback, useState } from "react";
import ImagesZoom from "../ImagesZoom";
import { MoreImg, SecondImg } from "./style";
import { AiOutlinePlus } from 'react-icons/ai';

const PostImages = ({ images }) => {
  const [showImageZoom, setShowImageZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImageZoom(true);
  }, [showImageZoom]);

  const onClose = useCallback(() => {
    setShowImageZoom(false);
  }, [showImageZoom]);

  if(images.length === 1) {
    return (
      <>
        <img src={`http://localhost:3065/${images[0].src}`} alt={`http://localhost:3065/${images[0].src}`} onClick={onZoom} />
        {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}  
      </>
    );
  }

  if(images.length === 2) {
    return (
      <SecondImg>
        <img src={`http://localhost:3065/${images[0].src}`} alt={`http://localhost:3065/${images[0].src}`} onClick={onZoom} />
        <img src={`http://localhost:3065/${images[1].src}`} alt={`http://localhost:3065/${images[1].src}`} onClick={onZoom} />
        {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}  
      </SecondImg>
    );
  }

  return (
    <MoreImg>
      <img src={`http://localhost:3065/${images[0].src}`} alt={`http://localhost:3065/${images[0].src}`} onClick={onZoom} />
      <div onClick={onZoom} className="moreBtn">
        <AiOutlinePlus />
        <span>{images.length - 1}개의 이미지 더 보기</span>
      </div>
      {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}  
    </MoreImg>
  );
}

export default PostImages;
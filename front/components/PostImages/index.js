import { useCallback, useState } from "react";
import ImagesZoom from "../ImagesZoom";
import { MoreImg, SecondImg } from "./style";
import { AiOutlinePlus } from 'react-icons/ai';
import { backUrl } from "../../config/config";

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
        <img src={`${backUrl}/${images[0].src}`} alt={`${backUrl}/${images[0].src}`} onClick={onZoom} />
        {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}  
      </>
    );
  }

  if(images.length === 2) {
    return (
      <SecondImg>
        <img src={`${backUrl}/${images[0].src}`} alt={`${backUrl}/${images[0].src}`} onClick={onZoom} />
        <img src={`${backUrl}/${images[1].src}`} alt={`${backUrl}/${images[1].src}`} onClick={onZoom} />
        {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}  
      </SecondImg>
    );
  }

  return (
    <MoreImg>
      <img src={`${backUrl}/${images[0].src}`} alt={`${backUrl}/${images[0].src}`} onClick={onZoom} />
      <div onClick={onZoom} className="moreBtn">
        <AiOutlinePlus />
        <span>{images.length - 1}개의 이미지 더 보기</span>
      </div>
      {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}  
    </MoreImg>
  );
}

export default PostImages;
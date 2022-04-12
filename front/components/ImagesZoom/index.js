import { useCallback, useEffect } from "react";
import { SlideWrap } from "./style";
import Slider from "react-slick";
import { AiOutlineClose } from 'react-icons/ai';
import { backUrl } from "../../config/config";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const ImagesZoom = ({ images, onClose }) => {

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
    `;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <SlideWrap>
      <button onClick={onClose} className="closeBtn"><AiOutlineClose /></button>
      <Slider {...settings}>
        {images.map((v) => (
          <div key={v.src}>
            <img src={v} alt={v.src} />
          </div>
        ))}
      </Slider>
    </SlideWrap>
  );
}

export default ImagesZoom;
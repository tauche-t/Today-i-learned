import styled from 'styled-components';

export const SlideWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  overflow: hidden;

  .closeBtn {
    position: absolute;
    right: 50px;
    top: 20px;
    border: 0;
    outline: 0;
    background: none;
    color: #fff;
    font-size: 28px;
    cursor: pointer;
    z-index: 100;
  }

  .slick-slider {
    .slick-prev {
      font-size: 0;
      border: 0;
      outline: 0;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      color: #fff;
      width: 50px;
      height: 50px;
      position: absolute;
      left: 80px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 100;
    }
    .slick-prev:before {
      content: "<";
      font-size: 24px;
    }

    .slick-next {
      font-size: 0;
      border: 0;
      outline: 0;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      color: #fff;
      width: 50px;
      height: 50px;
      position: absolute;
      right: 80px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 100;
    }
    .slick-next:before {
      content: ">";
      font-size: 24px;
    }

    .slick-dots {
      list-style: none;   
      margin-top: 50px;    

      li {
        display: inline-block;
        margin-right: 20px;

        button {
          font-size: 0;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          border: 0;
          outline: 0;
          background: rgba(255, 255, 255, 0.7);
          cursor: pointer;
        }

        &.slick-active {
        button {
          background: rgba(0, 0, 0, 0.8);
        }
      }
      }
    }

    .slick-track {
    
      .slick-slide {
        /* position: absolute;
        left: 0;
        top: 0; */
        display: inline-block;
        margin-top: 100px;

        img {
          max-width: 1000px;
          width: 100% !important;
        }
      }
    }
  }
`;

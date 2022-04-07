import styled from 'styled-components';

export const SecondImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50% !important;
    margin: 0 10px;
  }
`;

export const MoreImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50% !important;
    margin: 0 30px;
  }

  .moreBtn {
    /* margin-right: 70px; */
    width: 50%;
    text-align: center;
    cursor: pointer;

    svg {
      font-size: 22px;
    }

    span {
      display: block;
      margin-top: 10px;
    }
  }
`;

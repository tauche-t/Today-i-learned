import styled from 'styled-components';

export const Member = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  align-items: center;

  @media screen and (max-width: 1340px) {
    display: none;
  }
`;

export const MemberProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 7px;
  background: #ced4da;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-right: 18px;
`;

export const MemberName = styled.div`
  font-size: 17px;
  font-weight: 700;

  @media screen and (max-width: 1540px) {
    font-size: 15px;
  }
`;

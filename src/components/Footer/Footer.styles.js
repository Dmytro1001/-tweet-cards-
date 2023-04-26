import styled from '@emotion/styled';
import { BsGithub } from 'react-icons/bs';

export const FooterWrapper = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 57px;
  min-width: 420px;
  display: flex;
  align-items: center;
  padding: 10px 0;
  color: #537fe7;
  background: #d8ebff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  z-index: 9;
`;

export const DeveloperData = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  font-weight: 500;
`;

export const Svg = styled(BsGithub)`
  margin-left: 5px;
  color: #e7bb53;
  width: 25px;
  height: 25px;
  transform: scale(1);
  transition: all 250ms;
  animation: mymove 8s linear 1s infinite;
  :hover {
    opacity: 0.8;
    transform: scale(1.1);
    animation: normal;
  }
  @keyframes mymove {
    50% {
      transform: rotateY(180deg);
    }
  }
`;

import styled from '@emotion/styled';
import rectangle from 'images/Rectangle.png';

export const WrapperContainer = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  padding: 28px 0;
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(94, 86, 111, 0.23);
`;

export const LogoCard = styled.img`
  position: absolute;
  width: 76px;
  left: 20px;
  top: 20px;
`;

export const ImageCard = styled.img`
  width: 308px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  position: relative;
  top: -18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url(${rectangle});
  background-origin: border-box;
  background-position-y: 55%;
  background-repeat: no-repeat;
  margin-bottom: 8px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: #5736a3;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 86px;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 86px;
  background: #5736a3;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-bottom: 16px;
  &:last-of-type {
    margin-bottom: 26px;
  }
`;

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  width: 196px;

  background: ${({ isFollowing }) => (isFollowing ? '#5cd3a8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  transform: scale(1);
  transition: background-color 350ms linear, transform 350ms linear;

  &:focus {
    transform: scale(1.05);
  }

  &:hover {
    transform: scale(1.05);
  }
`;

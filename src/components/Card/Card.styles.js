import styled from '@emotion/styled';

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
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
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

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 86px;
  margin: 0 auto;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 86px;
  /* background-color: rgba(255, 255, 255, 0.5); */
`;

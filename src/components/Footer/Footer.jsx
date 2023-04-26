import { DeveloperData, FooterWrapper, Svg } from './Footer.styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <DeveloperData>
        © 2023 | All Rights Reserved | Developed by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Dmytro1001"
        >
          <Svg />
        </a>
      </DeveloperData>
    </FooterWrapper>
  );
};

export default Footer;

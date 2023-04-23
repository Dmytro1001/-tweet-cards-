import {
  WrapperContainer,
  LogoCard,
  ImageCard,
  AvatarWrapper,
  Avatar,
} from './Card.styles';
import LogoGoIt from 'images/Logo-goit.png';
import Picture from 'images/picture.png';
import DefaultAvatar from 'images/Hansel.png';

const Card = () => {
  return (
    <WrapperContainer>
      <LogoCard src={LogoGoIt} alt="GoIt logo" />
      <ImageCard src={Picture} alt="picture" />
      <AvatarWrapper>
        <Avatar src={DefaultAvatar} alt="#" />
      </AvatarWrapper>
    </WrapperContainer>
  );
};

export default Card;

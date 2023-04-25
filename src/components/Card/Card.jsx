import {
  WrapperContainer,
  LogoCard,
  ImageCard,
  AvatarWrapper,
  Avatar,
  Wrapper,
  CardInfo,
  Text,
  Btn,
} from './Card.styles';
import LogoGoIt from 'images/Logo-goit.png';
import Picture from 'images/picture.png';
import DefaultAvatar from 'images/Hansel.png';
import { useState } from 'react';

const Card = ({ tweet, handleToggleFollow }) => {
  let { id, avatar, user, follow, followers, tweets } = tweet;
  const [isFollow, setIsFollow] = useState(follow);
  const following = !isFollow;

  const toggleUserFollow = async () => {
    if (!isFollow) {
      followers += 1;
    } else {
      followers -= 1;
    }
    setIsFollow(following);

    await handleToggleFollow(id, following, followers);
  };

  const Followers = followers.toLocaleString('en-US');

  return (
    <WrapperContainer>
      <LogoCard src={LogoGoIt} alt="GoIt logo" />
      <ImageCard src={Picture} alt="picture" />
      <Wrapper>
        <AvatarWrapper>
          <Avatar src={avatar || DefaultAvatar} alt={user || 'avatar'} />
        </AvatarWrapper>
      </Wrapper>
      <CardInfo>
        <Text>{tweets} tweets</Text>
        <Text>{Followers} followers</Text>
        <Btn isFollowing={isFollow} onClick={toggleUserFollow}>
          {isFollow ? 'following' : 'follow'}
        </Btn>
      </CardInfo>
    </WrapperContainer>
  );
};

export default Card;

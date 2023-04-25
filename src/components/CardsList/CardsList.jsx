import Card from 'components/Card/Card';
import { List } from './CardsList.styles';

const CardsList = ({ tweets, handleToggleFollow }) => {
  return (
    <>
      <List>
        {tweets.map(tweet => {
          return (
            <li key={tweet.id}>
              <Card tweet={tweet} handleToggleFollow={handleToggleFollow} />
            </li>
          );
        })}
      </List>
    </>
  );
};

export default CardsList;

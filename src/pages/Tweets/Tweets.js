import { useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { userFetch, toggleUser } from 'services/apiTweets';
import { Loader } from 'components/Loader/Loader';
import CardsList from 'components/CardsList/CardsList';
import { TweetsContainer, BtnBack, LoadMoreBtn } from './Tweets.styles';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    (async () => {
      try {
        const userData = await userFetch(page);

        if (userData.length < 3) {
          setHasMore(false);
          setLoading(false);
        }
        if (page === 1) {
          setTweets(userData);
        } else {
          setTweets(prevstate => [...prevstate, ...userData]);
          setLoading(false);
        }
      } catch (error) {}
    })();
  }, [page]);

  const handleToggleFollow = async (id, following, followers) => {
    await toggleUser(id, following, followers);
    const updatedTweets = tweets.map(tweet => {
      if (tweet.id === id) {
        return { ...tweet, follow: !following, followers };
      }
      return tweet;
    });
    setTweets(updatedTweets);
  };

  const handleLoadMore = () => {
    setLoading(true);
    setPage(prevPage => prevPage + 1);
  };

  return (
    <TweetsContainer>
      <BtnBack to={backLinkLocation.current}>Go Back</BtnBack>
      {tweets && (
        <>
          <CardsList tweets={tweets} handleToggleFollow={handleToggleFollow} />
          {hasMore && !loading && (
            <LoadMoreBtn onClick={handleLoadMore}>Load More</LoadMoreBtn>
          )}
          {loading && <Loader />}
        </>
      )}
    </TweetsContainer>
  );
};

export default Tweets;

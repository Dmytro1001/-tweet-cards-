import CardsList from 'components/CardsList/CardsList';
import { useEffect, useState } from 'react';
import { userFetch, toggleUser } from 'services/apiTweets';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);

  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const userData = await userFetch(page);

        if (userData.length === 0) {
          return alert('No results');
        }
        if (page === 1) {
          setTweets(userData);
        } else {
          setTweets(prevstate => [...prevstate, ...userData]);
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
    setPage(prevPage => prevPage + 1);
  };

  // const handleLoadMore = async () => {
  //   const additionalData = await userFetch(page + 1);
  //   if (additionalData.length > 0) {
  //     setTweets(prevTweets => [...prevTweets, ...additionalData]);
  //     setPage(prevPage => prevPage + 1);
  //     setLoadedCount(prevCount => prevCount + 3);
  //   } else {
  //     setHasMore(false);
  //   }
  // };

  return (
    <>
      {tweets && (
        <>
          <CardsList tweets={tweets} handleToggleFollow={handleToggleFollow} />
          {hasMore && <button onClick={handleLoadMore}>Load More</button>}
        </>
      )}
    </>
  );
};

export default Tweets;

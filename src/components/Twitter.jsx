import TweetList from "./TweetList";
import AddTweet from "./AddTweet";
import { useState, useCallback, memo } from "react";

const initialDummyTweets = [
  {
    id: 0,
    content: "we have a new twitter called as threads",
    likeCount: 10,
    createdAt: new Date(),
  },
  {
    id: 1,
    content: "What should we post ??",
    likeCount: 20,
    createdAt: new Date(),
  },
  {
    id: 2,
    content: "what is up with tech community?",
    likeCount: 30,
    createdAt: new Date(),
  },
];

const MemoisedAddTweet = memo(AddTweet);

function Twitter() {
  const [tweets, setTweets] = useState(initialDummyTweets);
  const handleAddTweet = useCallback(
    (text) => {
      let nextId = tweets.length > 0 ? tweets[tweets.length - 1].id + 1 : 0;
      setTweets([
        ...tweets,
        {
          content: text,
          likeCount: Math.floor(Math.random() * 10), // this is a random like count,
          id: nextId,
          createdAt: new Date(),
        },
      ]);
    },
    [tweets]
  );

  const handleEditTweet = useCallback(
    (tweet) => {
      //this incoming tweet is the updated tweet

      console.log("called edit tweet", tweet);

      setTweets(
        tweets.map((currentTweet) => {
          if (currentTweet.id === tweet.id) {
            return tweet;
          } else {
            return currentTweet;
          }
        })
      );
    },
    [tweets]
  );

  const sortTweets = useCallback(() => {
    tweets.sort((t1, t2) => t2.createdAt.getTime() - t1.createdAt.getTime());
    setTweets([...tweets]);
  }, [tweets]);

  return (
    <div>
      <MemoisedAddTweet onAddTweet={handleAddTweet} />
      <button onClick={sortTweets}>Sort Tweet By Created At</button>
      <TweetList tweets={tweets} onEditTweet={handleEditTweet} />
    </div>
  );
}

export default Twitter;

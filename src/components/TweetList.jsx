import Tweet from "./Tweet";
import "../CSS/TweetList.css";
import { memo } from "react";

const MemoisedTweet = memo(Tweet);

function TweetList({ tweets, onEditTweet }) {
  return (
    <ul className="tweet">
      {tweets.map((tweet) => (
        <li key={tweet.id} className="tweet-like-wrapper">
          <MemoisedTweet
            tweetId={tweet.id}
            content={tweet.content}
            likeCount={tweet.likeCount}
            createdAt={tweet.createdAt.toString()}
            onEdit={onEditTweet}
          />
        </li>
      ))}
    </ul>
  );
}

export default TweetList;

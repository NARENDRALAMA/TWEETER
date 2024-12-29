import Tweet from "./Tweet";
import "../CSS/TweetList.css";

function TweetList({ tweets }) {
  return (
    <ul className="tweet">
      {tweets.map((tweet) => (
        <li key={tweet.id} className="tweet-like-wrapper">
          <Tweet content={tweet.content} likeCount={tweet.likeCount} />
        </li>
      ))}
    </ul>
  );
}

export default TweetList;

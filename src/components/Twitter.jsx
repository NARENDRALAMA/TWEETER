import TweetList from "./TweetList";
import AddTweet from "./AddTweet";

const initialDummyTweets = [
  { id: 0, content: "we have a new twitter called as threads", likeCount: 10 },
  { id: 1, content: "What should we post ??", likeCount: 20 },
  { id: 2, content: "what is up with tech community?", likeCount: 30 },
];

function Twitter() {
  const [tweets, setTweets] = useState(initialDummyTweets);
  const handleAddTweet = (text) => {
    setTweets([
      ...tweets,
      {
        content: text,
      },
    ]);
  };

  return (
    <div>
      <AddTweet />
      <TweetList tweets={tweets} />
      Hello
    </div>
  );
}

export default Twitter;

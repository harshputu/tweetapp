import React, { useEffect } from "react";
import { TweetComp } from "../components/TweetComp";
import { useData } from "../context/data-context";

export default function TweetListing() {
  const { tweetData, getTweets } = useData();
  useEffect(() => {
    getTweets();
  }, []);
  return (
    <>
      <div className="text-2xl m-1">TweetListing</div>
      {tweetData?.map((tweet) => {
        return <TweetComp tweet={tweet} key={tweet.id} />;
      })}
    </>
  );
}

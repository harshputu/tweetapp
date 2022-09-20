import React, { useEffect } from "react";
import { TweetComp } from "../components/TweetComp";
import { useAuth } from "../context/auth-context";
import { useData } from "../context/data-context";

export default function Home() {
  const { loginInput, createTweet, loginId } = useAuth();
  const { userTweets, getUserTweets } = useData();

  useEffect(() => {
    getUserTweets();
  }, [loginInput]);

  return (
    <div className="section-header-form">
      <p className="text-bold text-2xl text-center m-1"> welcome {loginId}</p>
      <form className="home-wrapper" onSubmit={(e)=>
        e.preventDefault()}>
        <textarea
          placeholder="Write your Tweet"
          rows={10}
          cols={20}
          maxLength={200}
          name="tweetDescriptiion"
          id="tweetDes"
          className="m-1"
        />
        <textarea
          placeholder="Write your Hashtags"
          rows={5}
          cols={20}
          maxLength={200}
          name="tweetDescriptiion"
          id="tweetDes"
          className="m-1"
        />
        <button
          className="btn btn-sm primary"
          style={{ width: 300, margin: "auto" }}
        >
          Post Tweet
        </button>
      </form>
      {userTweets.map(tweet => {
        return  <TweetComp tweet={tweet} />
      }
        )}
     
    </div>
  );
}

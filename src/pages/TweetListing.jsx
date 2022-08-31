import React, { useEffect } from "react";
import { MdDeleteForever, MdEdit, MdThumbUp, MdMessage } from "react-icons/md";
import { useData } from "../context/data-context";
import { useLocation } from "react-router-dom";
import { getCompleteDateAndTime } from "../utils/timeFormat";

function TweetComp({ tweet }) {
  let location = useLocation();
  const { loginId, tweets, date } = tweet;
  return (
    <>
      <div className="section-tweet m-1">
        <p className="text-xl">{loginId}</p>
        <p className="text-lg">{tweets}</p>
        <div>
          {location.pathname === "/tweetslist" ? (
            <>
              <MdThumbUp
                size={25}
                color="darkblue"
                style={{
                  paddingRight: 10,
                }}
              />
              <MdMessage size={25} color="darkblue" />
            </>
          ) : (
            <>
              <MdDeleteForever
                size={25}
                color="darkblue"
                style={{
                  paddingRight: 10,
                }}
              />
              <MdEdit
                size={25}
                color="darkblue"
                style={{
                  paddingRight: 10,
                }}
              />
              <MdThumbUp
                size={25}
                color="darkblue"
                style={{
                  paddingRight: 10,
                }}
              />
              <MdMessage size={25} color="darkblue" />
            </>
          )}
        </div>
        <p className="text-xs color-text-grey p-05">{getCompleteDateAndTime(date)}</p>
      </div>
    </>
  );
}

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

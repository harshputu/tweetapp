import React, { useEffect } from "react";
import { MdDeleteForever, MdEdit, MdThumbUp, MdMessage } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { getCompleteDateAndTime } from "../utils/timeFormat";


export function TweetComp({ tweet }) {
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
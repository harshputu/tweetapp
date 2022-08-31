import React from "react";
import { MdDeleteForever, MdEdit, MdThumbUp, MdMessage } from "react-icons/md";

function TweetComp() {
  return (
    <>
      <div className="section-tweet">
        <p>tweet heading</p>
        <p>tweet hashtag</p>
        <div
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <MdDeleteForever size={25} />
          <MdEdit size={25} />
          <MdThumbUp size={25} />
          <MdMessage size={25} />
        </div>
        <p>date and time</p>
      </div>
    </>
  );
}

export default function TweetListing() {
  return (
    <>
      <div className="text-2xl">TweetListing</div>
      <TweetComp />
    </>
  );
}

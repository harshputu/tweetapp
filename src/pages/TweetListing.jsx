import React from 'react';
import { MdDeleteForever, MdEdit, MdThumbUp, MdMessage } from 'react-icons/md';

function TweetComp() {
  return (
    <>
      <div className="section-tweet m-1">
        <p className="text-xl">tweet heading</p>
        <p className="text-lg">tweet hashtag</p>
        <div
          style={{
            width: '20%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <MdDeleteForever size={25} color="darkblue" />
          <MdEdit size={25} color="darkblue" />
          <MdThumbUp size={25} color="darkblue" />
          <MdMessage size={25} color="darkblue" />
        </div>
        <p className="text-xs color-text-grey p-05">date and time</p>
      </div>
    </>
  );
}

export default function TweetListing() {
  return (
    <>
      <div className="text-2xl m-1">TweetListing</div>
      <TweetComp />
    </>
  );
}

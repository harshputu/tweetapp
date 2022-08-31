import React from 'react';

export default function Home() {
  return (
    <div className="section-header-form">
      <p className="text-bold text-2xl text-center m-1"> welcome `username`</p>
      <form className="home-wrapper">
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
          style={{ width: 300, margin: 'auto' }}
        >
          Post Tweet
        </button>
      </form>
    </div>
  );
}

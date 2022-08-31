import React from "react";

export default function Home() {
  return (
    <div>
      <p className="text-bold text-2xl"> welcome `username`</p>
      <form className="section-header-form">
        <textarea placeholder="Write your Tweet" rows={10} cols={20} maxLength={200} name="tweetDescriptiion" id="tweetDes" className="m-1"/>
        <textarea placeholder="Write your Hashtags" rows={5} cols={20} maxLength={200} name="tweetDescriptiion" id="tweetDes" className="m-1"/>
        <button className="btn btn-sm primary" style={{width:150, marginLeft: 15 }}>Post Tweet</button>
      </form>
    </div>
  );
}

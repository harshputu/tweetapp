import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TweetListing from "../pages/TweetListing";
import User from "../pages/User";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Comment from "../pages/Comment";
import UpdateTweet from "../pages/UpdateTweet";
import Forget from "../pages/Forget";
import { NotFound } from "../pages/NotFound";
import { PrivateRoute } from "./PrivateRoute";

export function PageRoutes() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/tweetslist" element={<TweetListing />} />
          <Route path="/users" element={<User />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/updateTweet" element={<UpdateTweet />} />
        </Route>
        <Route path="/forgetPassword" element={<Forget />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

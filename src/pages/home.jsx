import React from "react";
import Mediaprofile from "../components/Profile/profile";

import "./home.css";
import Follows from "../components/followlist/followers";

import Newslist from "../components/newscards/news";

import Feedcount from "../components/useReducer/feedcount";

function Home() {
  return (
    <>
      <div className="home_page">
        <div className="profile_news">
          <Mediaprofile />
          <Newslist />
        </div>
        <Feedcount />
        <Follows />
      </div>
    </>
  );
}

export default Home;

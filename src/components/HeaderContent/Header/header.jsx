import React, { useState } from "react";
import search from "../../../assets/headerimgs/search.svg";
import message from "../../../assets/headerimgs/message-square.svg";
import postcircle from "../../../assets/headerimgs/plus-circle.svg";
import ham from "../../../assets/headerimgs/media-ham.svg";
import cancel from "../../../assets/headerimgs/media-cancel.svg";
import "./header.css";
import Addpost from "../Addpost/addpost";
import { Link } from "react-router-dom";
const Mediahead = () => {
  const [postOpen, setPostOpen] = useState(false);
  const [currentsidebar, setSidebar] = useState(false);
  const hamburger = (
    <>
      {!currentsidebar ? (
        <img
          src={ham}
          alt="hamburger"
          className="ham"
          onClick={(e) => {
            e.preventDefault();
            setSidebar(true);
          }}
        />
      ) : (
        <img
          src={cancel}
          alt="hamburger"
          className="ham"
          onClick={(e) => {
            e.preventDefault();
            setSidebar(false);
          }}
        />
      )}
    </>
  );

  const sidebar = (
    <div className="sidebar">
      <div className="sidebar_content">
        <Link to="/">Wall</Link>
        <Link to="/friends">Friends</Link>
        <a href="#">Chats</a>
      </div>
    </div>
  );
  return (
    <>
      <div className="header">
        <h1>Social Network</h1>
        <div className="searchbar">
          <input type="search" placeholder="Search..." />
          <button>
            <img src={search} alt="" width="20px" height="20px" />
          </button>
        </div>
        <div className="links">
          <Link to="/">Wall</Link>
          <Link to="/friends">Friends</Link>
        </div>
        <div className="communicate">
          <a href="#">
            <img src={message} alt="" width="22px" height="22px" />
          </a>
          <div className="post">
            <button onClick={() => setPostOpen(true)}>
              <img src={postcircle} alt="" width="20px" height="20px" />
              Create Post
            </button>
          </div>
          <Addpost trigger={postOpen} setTrigger={setPostOpen} />
        </div>
        {hamburger}
        {currentsidebar && sidebar}
        <button>Logout</button>
      </div>
    </>
  );
};
export default Mediahead;

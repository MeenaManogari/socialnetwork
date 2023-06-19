import React, { useState } from "react";
import "./followers.css";
import rectblue from "../../assets/followimgs/blue-rect.svg";
import tick from "../../assets/followimgs/circle-tick.svg";
import chevron from "../../assets/followimgs/chevron-down.svg";
import profileimg from "../../assets/followimgs/profileimg.jpg";
const Follows = () => {
  const following = [
    {
      id: 1,
      followimg: profileimg,
      tickimg: tick,
      followname: "William Cole",
      countfollow: "2M Followers",
      profession: "Artist,Motion Graphics",
      chatbtn: "Message",
      followed: false,
    },
    {
      id: 2,
      followimg: profileimg,
      tickimg: tick,
      followname: "William Cole",
      countfollow: "2M Followers",
      profession: "Artist,Motion Graphics",
      chatbtn: "Message",
      followed: false,
    },
    {
      id: 3,
      followimg: profileimg,
      tickimg: tick,
      followname: "William Cole",
      countfollow: "2M Followers",
      profession: "Artist,Motion Graphics",
      chatbtn: "Message",
      followed: false,
    },
    {
      id: 4,
      followimg: profileimg,
      tickimg: tick,
      followname: "William Cole",
      countfollow: "2M Followers",
      profession: "Artist,Motion Graphics",
      chatbtn: "Message",
      followed: false,
    },
    {
      id: 5,
      followimg: profileimg,
      tickimg: tick,
      followname: "William Cole",
      countfollow: "2M Followers",
      profession: "Artist,Motion Graphics",
      chatbtn: "Message",
      followed: false,
    },
  ];
  // const [visible, setVisible] = useState(3);
  const [users, setUsers] = useState(following);

  // const showMoreItems = () => {
  //   setVisible((preValue) => preValue + 3);
  // };
  const handleFollowToggle = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, followed: !user.followed } : user
      )
    );
  };
  const renderfollow = users.map((user) => {
    return (
      <>
        <div className="follow_profile">
          <img src={user.followimg} alt="" />
          <div className="follow_info">
            <div className="follower">
              <div className="follow_name">
                <img src={user.tickimg} alt="" />
                <h3>{user.followname}</h3>
              </div>
              <p>{user.countfollow}</p>
            </div>
            <p>{user.profession}</p>
            <div className="follow_btn">
              <button id="chat">{user.chatbtn}</button>
              <button id="connect" onClick={() => handleFollowToggle(user.id)}>
                {" "}
                {user.followed ? "Unfollow" : "Follow"}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <React.Fragment>
      <div className="follow_main">
        <div className="follow_head">
          <img src={rectblue} alt="" />
          <h2>FOLLOW</h2>
        </div>
        {renderfollow}
        <div className="view_more">
          <a href="#">
            <img src={chevron} alt="" />
            Show more
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Follows;

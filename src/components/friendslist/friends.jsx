import React, { useState } from "react";
import "./friends.css";
import tick from "../../assets/friendsimgs/circle-tick.svg";
import rectblue from "../../assets/followimgs/blue-rect.svg";
const Friends = () => {
  const friendslist = [
    {
      id: 1,
      icon: tick,
      profilename: "William cole",
      profession: "Artist, Motion graphics",
      description:
        " Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Beta! Get Me Here",
      followers: "2M Followers",
      counting: "43+",
      post: "Posts",
      chatbtn: "Message",
      followed: false,
    },
    {
      id: 2,
      icon: tick,
      profilename: "William cole",
      profession: "Artist, Motion graphics",
      description:
        " Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Beta! Get Me Here",
      followers: "2M Followers",
      counting: "43+",
      post: "Posts",
      chatbtn: "Message",
      followed: false,
    },
    {
      id: 3,
      icon: tick,
      profilename: "William cole",
      profession: "Artist, Motion graphics",
      description:
        " Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Beta! Get Me Here",
      followers: "2M Followers",
      counting: "43+",
      post: "Posts",
      chatbtn: "Message",
      followed: false,
    },
    {
      id: 4,
      icon: tick,
      profilename: "William cole",
      profession: "Artist, Motion graphics",
      description:
        " Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Beta! Get Me Here",
      followers: "2M Followers",
      counting: "43+",
      post: "Posts",
      chatbtn: "Message",
      followed: false,
    },
    {
      id: 5,
      icon: tick,
      profilename: "William cole",
      profession: "Artist, Motion graphics",
      description:
        " Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Beta! Get Me Here",
      followers: "2M Followers",
      counting: "43+",
      post: "Posts",
      chatbtn: "Message",
      followed: false,
    },
    {
      id: 6,
      icon: tick,
      profilename: "William cole",
      profession: "Artist, Motion graphics",
      description:
        " Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Beta! Get Me Here",
      followers: "2M Followers",
      counting: "43+",
      post: "Posts",
      chatbtn: "Message",
      followed: false,
    },
    {
      id: 7,
      icon: tick,
      profilename: "William cole",
      profession: "Artist, Motion graphics",
      description:
        " Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Beta! Get Me Here",
      followers: "2M Followers",
      counting: "43+",
      post: "Posts",
      chatbtn: "Message",
      followed: false,
    },
    {
      id: 8,
      icon: tick,
      profilename: "William cole",
      profession: "Artist, Motion graphics",
      description:
        " Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Beta! Get Me Here",
      followers: "2M Followers",
      counting: "43+",
      post: "Posts",
      chatbtn: "Message",
      followed: false,
    },
    {
      id: 9,
      icon: tick,
      profilename: "William cole",
      profession: "Artist, Motion graphics",
      description:
        " Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Beta! Get Me Here",
      followers: "2M Followers",
      counting: "43+",
      post: "Posts",
      chatbtn: "Message",
      followed: false,
    },
  ];
  const [visible, setVisible] = useState(3);
  const [users, setUsers] = useState(friendslist);

  const showMoreItems = () => {
    setVisible((preValue) => preValue + 3);
  };
  const handleFollowToggle = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, followed: !user.followed } : user
      )
    );
  };

  const renderfriends = users.slice(0, visible).map((user) => {
    return (
      <>
        <div className="friends_main">
          <div className="friend_profile"></div>
          <div className="friend_proinfo">
            <div className="friend_name">
              <img src={user.icon} alt="" />
              <h4>{user.profilename}</h4>
            </div>
            <p id="profession">{user.profession}</p>
            <p id="description">{user.description}</p>
            <h4>{user.followers}</h4>
            <div className="post_chat">
              <p>
                <span>{user.counting}</span>
                {user.post}
              </p>
              <button>{user.chatbtn}</button>
            </div>
            <button onClick={() => handleFollowToggle(user.id)}>
              {" "}
              {user.followed ? "Unfollow" : "Follow"}
            </button>
          </div>
        </div>
      </>
    );
  });
  return (
    <React.Fragment>
      <div className="friends_heading">
        <img src={rectblue} alt="" />
        <h1>Popular people on social network</h1>
      </div>
      <div className="cards_page">
        <div className="friends_cards">{renderfriends}</div>
        <button onClick={showMoreItems}>Show More</button>
      </div>
    </React.Fragment>
  );
};
export default Friends;

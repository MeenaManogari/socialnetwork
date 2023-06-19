import React, { useReducer, useState } from "react";
import bullet from "../../assets/feedimgs/bullet.svg";
import paint from "../../assets/feedimgs/painting.png";
import artist from "../../assets/feedimgs/camera.png";
import heart from "../../assets/feedimgs/heart.svg";
import tweet from "../../assets/feedimgs/tweets.svg";
import blueheart from "../../assets/feedimgs/heartblue.png";
import "./feedcount.css";
const initialState = { count: 0 };

// The reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };

    default:
      return { count: state.count };
  }
}
const Feedcount = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [change, setChange] = useState(false);
  return (
    <>
      <div className="feeds_main">
        <div className="feed_heading">
          <img src={bullet} alt="" />
          <h1>WALL FEED</h1>
        </div>
        <div className="feed_head">
          <div className="feed_profile">
            <div className="profile_info">
              <img src={paint} alt="painting" />
              <div className="pro_name">
                <h4>
                  Reymond gale <span>@ regale</span>
                </h4>
                <p>Motion artist,MGX</p>
              </div>
            </div>
            <button>Viral</button>
          </div>
          <img src={artist} alt="" />
          <div className="feed_info">
            <div className="feed_details">
              <h4>NFT Photo peak time in george town</h4>
              <p>
                Be the first to get one of the 100+ launch-NFTs in our newly
                launched Marketplace Beta! Get Me Here...
              </p>
            </div>
            <div className="time_views">
              <p>2mins ago</p>
              <p>
                <b>90</b> views
              </p>
            </div>
          </div>
          <div className="comment_contents">
            <div className="likes_tweets">
              {!change ? (
                <button
                  onClick={() => [
                    dispatch({ type: "increment" }),
                    setChange(true),
                  ]}
                >
                  <img src={heart} alt="" width="13px" height="13px" />
                  {state.count} Like
                </button>
              ) : (
                <button
                  onClick={() => [
                    dispatch({ type: "decrement" }),
                    setChange(false),
                  ]}
                >
                  {" "}
                  <img
                    src={blueheart}
                    alt="change"
                    width="13px"
                    height="13px"
                  />
                  {state.count} Like
                </button>
              )}
              <button>
                <img src={tweet} alt="" width="13px" height="13px" />
                Tweets
              </button>
            </div>
            <button>Add Tweet</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Feedcount;

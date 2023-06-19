import React from "react";
import "./news.css";
import bluerect from "../../assets/newsimgs/blue-rect.svg";
import downarrow from "../../assets/newsimgs/chevron.svg";
import statue from "../../assets/newsimgs/statue.png";
const Newslist = () => {
  const newscards = [
    {
      newsimg: statue,
      newstime: "The news mint. 1 week ago",
      newslink: "DeFi booming with new initiative and launches in the space",
      newsviews: "205 Views",
      newsstatus: "TRENDING",
    },
    {
      newsimg: statue,
      newstime: "The news mint. 1 week ago",
      newslink: "DeFi booming with new initiative and launches in the space",
      newsviews: "205 Views",
      newsstatus: "TRENDING",
    },
    {
      newsimg: statue,
      newstime: "The news mint. 1 week ago",
      newslink: "DeFi booming with new initiative and launches in the space",
      newsviews: "205 Views",
      newsstatus: "TRENDING",
    },
    {
      newsimg: statue,
      newstime: "The news mint. 1 week ago",
      newslink: "DeFi booming with new initiative and launches in the space",
      newsviews: "205 Views",
      newsstatus: "TRENDING",
    },
    {
      newsimg: statue,
      newstime: "The news mint. 1 week ago",
      newslink: "DeFi booming with new initiative and launches in the space",
      newsviews: "205 Views",
      newsstatus: "TRENDING",
    },
  ];
  const rendernews = newscards.map((newsbox) => {
    return (
      <>
        <div className="news_list">
          <img src={newsbox.newsimg} alt="" />
          <div className="news_details">
            <p>{newsbox.newstime}</p>
            <a href="#">{newsbox.newslink}</a>
            <div className="news_status">
              <a href="#">{newsbox.newsviews}</a>
              <p>{newsbox.newsstatus}</p>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <React.Fragment>
      <div className="news_main">
        <div className="news_head">
          <img src={bluerect} alt="" />
          <h2>NEWS</h2>
        </div>
        {rendernews}
        <div className="news_view">
          <a href="#">
            <img src={downarrow} alt="" />
            Show more
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Newslist;

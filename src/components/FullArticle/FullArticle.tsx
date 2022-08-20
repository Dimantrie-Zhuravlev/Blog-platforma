import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";
import dateFormat from "dateformat";
import Markdown from "react-markdown";

import { IArticle } from "../../types/Articles";

import "./FullArticle.scss";

interface LocationState {
  item: IArticle;
}

const FullArticle = () => {
  console.log(useParams());
  // const slugPar = useParams();
  // - объект для получения свойств из адресной строки
  const location = useLocation();
  const { item } = location.state as LocationState;
  const { title, favoritesCount, tagList, description, author, updatedAt } =
    item;
  const tags =
    tagList &&
    tagList.map((elem) => (
      <React.Fragment key={elem}>
        <span className="article-tag">{elem.slice(0, 20)}</span>
        {/* сократим длину на всякий случай */}
      </React.Fragment>
    ));
  return (
    <div className="fullArticle-container">
      <div className="fullarticle">
        <div className="article-header">
          <div>
            <div className="fullarticle-top">
              <span className="article-title">{title}</span>
              <HeartOutlined style={{ fontSize: "18px", marginRight: "5px" }} />
              <span className="article-favorite">{favoritesCount}</span>
            </div>
            <div>{tags}</div>
          </div>
          <div className="article-profile">
            <div className="article-author-info">
              <span className="article-author-info__name">
                {author.username}
              </span>
              <span className="article-author-info__date">
                {dateFormat(updatedAt, "mediumDate")}
              </span>
            </div>
            <div className="article-profile__icon">
              <img src={author.image} />
            </div>
          </div>
        </div>
        <div className="fullarticle-description">{description}</div>
        <Markdown>{item.body}</Markdown>
      </div>
    </div>
  );
};

export default FullArticle;

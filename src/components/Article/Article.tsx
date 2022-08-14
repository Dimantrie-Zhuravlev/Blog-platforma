import React from "react";
import { HeartOutlined } from "@ant-design/icons";

import "./article.scss";

import { IArticle } from "../../types/Articles";

const Article = (props: { article: IArticle }) => {
  const { title, favoritesCount, tagList, description, author } = props.article;
  const tags = tagList.map((elem) => (
    <React.Fragment key={elem}>
      <span className="article-tag">{elem.slice(0, 20)}</span>
      {/* сократим длину на всякий случай */}
    </React.Fragment>
  ));
  return (
    <div className="article">
      <div className="article-header">
        <div>
          <div className="article-top">
            <span className="article-title">{title}</span>
            <HeartOutlined style={{ fontSize: "18px", marginRight: "5px" }} />
            <span className="article-favorite">{favoritesCount}</span>
          </div>
          <div>{tags}</div>
        </div>
        <div className="article-profile">
          <div>11</div>
          <div className="article-profile__icon">
            <img src={author.image} />
          </div>
        </div>
      </div>
      <div className="article-description">{description}</div>
    </div>
  );
};

export default Article;

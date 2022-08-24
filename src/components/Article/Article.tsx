import React from "react";
import { HeartOutlined } from "@ant-design/icons";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import "./article.scss";
import { useSelector } from "react-redux";
import cn from "classnames";

import { fetchAddLike, fetchDeleteLike } from "../../services/favorites";
import { IStateUser } from "../../types/StateRedux";
import { IArticle } from "../../types/Articles";

const Article = (props: { article: IArticle }) => {
  const {
    title,
    favoritesCount,
    tagList,
    description,
    author,
    updatedAt,
    slug,
    favorited,
  } = props.article;
  const tags =
    tagList &&
    tagList.map((elem) => (
      <React.Fragment key={`${author.username} ${Math.random()}`}>
        <span className="article-tag">{elem.slice(0, 20)}</span>
        {/* сократим длину на всякий случай */}
      </React.Fragment>
    ));
  const token = useSelector((state: IStateUser) => state.user.user.token);
  return (
    <div className="article">
      <div className="article-header">
        <div>
          <div className="article-top">
            <Link to={`/articles/${slug}`} state={{ item: props.article }}>
              <span className="article-title">{title}</span>
            </Link>
            <span
              onClick={() => {
                console.log(favorited);
                console.log(author.following);
                console.log(slug, token);
                if (!favorited) {
                  fetchAddLike(slug, token);
                } else {
                  fetchDeleteLike(slug, token);
                }
              }}
              className={cn({
                "article-withLike": favorited,
                "article-withOutLike": !favorited,
              })}
            >
              <HeartOutlined />
            </span>

            <span className="article-favorite">{favoritesCount}</span>
          </div>
          <div>{tags}</div>
        </div>
        <div>
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
      </div>
      <div className="article-description">{description}</div>
    </div>
  );
};

export default Article;

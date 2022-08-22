import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";
import dateFormat from "dateformat";
import Markdown from "react-markdown";

import { fetchArticlesSlug } from "../../services/Articles";
import { IArticle } from "../../types/Articles";

import "./FullArticle.scss";

const FullArticle = () => {
  const [arr, setArr] = useState<IArticle>({
    slug: "",
    title: "",
    description: "",
    body: "",
    tagList: [""],
    createdAt: new Date(),
    updatedAt: new Date(),
    favorited: false,
    favoritesCount: 0,
    author: { username: "", bio: "", image: "", following: false },
  });
  const { slug } = useParams();
  const slugnew = slug === undefined ? "" : slug;

  useEffect(() => {
    fetchArticlesSlug(slugnew).then((res) => {
      setArr(res.article);
    });
  }, []);

  const {
    title,
    favoritesCount,
    tagList,
    description,
    author,
    updatedAt,
    body,
  } = arr;
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
        <Markdown>{body}</Markdown>
      </div>
    </div>
  );
};

export default FullArticle;

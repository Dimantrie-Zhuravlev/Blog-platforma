import React from "react";
import { useSelector } from "react-redux";
import "./ArticlesList.scss";

import { IStateArticles } from "../../types/StateRedux";
import Article from "../Article";

const ArticlesList = () => {
  let MaxId = 5;
  const arrayArticles = useSelector(
    (state: IStateArticles) => state.articles.articles
  );
  console.log(arrayArticles);
  const articles = arrayArticles.map((elem) => (
    <React.Fragment key={MaxId++}>
      <Article article={elem} />
    </React.Fragment>
  ));
  return <div className="articles-container">{articles}</div>;
};

export default ArticlesList;

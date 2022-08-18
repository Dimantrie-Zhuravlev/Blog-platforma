import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { Spin, Pagination } from "antd";

import { AppDispatch } from "../store/store";
import fetchArticlesList from "../services/ticketsApi";
import { IStateArticles } from "../types/StateRedux";

import ArticlesList from "./ArticlesList";
import Header from "./Header";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchArticlesList(0));
  }, []);

  const loading = useSelector(
    (state: IStateArticles) => state.articles.loading
  );
  const totalResults = useSelector(
    (state: IStateArticles) => state.articles.totalArticles
  );
  const [currentPage, changeCurrentPage] = useState(1);
  const reloadArticles = (page: number) => {
    changeCurrentPage(page);
    dispatch(fetchArticlesList(page - 1));
  };

  const SpinnerContent = loading ? (
    <div style={{ textAlign: "center" }}>
      <Spin size="large" />
    </div>
  ) : (
    <React.Fragment>
      <ArticlesList />
      <div className="pagination">
        <Pagination
          current={currentPage}
          pageSize={20}
          total={totalResults}
          onChange={reloadArticles}
          showSizeChanger={false}
        />
      </div>
    </React.Fragment>
  );
  return (
    <div>
      <Header />
      {SpinnerContent}
    </div>
  );
};

export default App;

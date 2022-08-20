import React, { useEffect } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../store/store";
import Header from "../components/Header";
import fetchArticlesList from "../services/ticketsApi";

import PageSignUp from "./PageSignUp";
import PageHome from "./PageHome";
import PageArticles from "./PageArticles";
import UnknownPage from "./unknownPage";
import FullPage from "./FullPage";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchArticlesList(0));
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/articles" element={<PageArticles />}></Route>
          <Route path="/articles/:slug" element={<FullPage />}></Route>
          <Route path="/sign-up" element={<PageSignUp />}></Route>
          <Route index element={<PageHome />}></Route>
          <Route path="*" element={<UnknownPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;

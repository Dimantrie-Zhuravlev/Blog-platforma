import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Header from "../components/Header";

import PageSignUp from "./PageSignUp";
import PageHome from "./PageHome";
import PageArticles from "./PageArticles";
import UnknownPage from "./unknownPage";
import FullPage from "./FullPage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/articles" element={<PageArticles />}></Route>
        <Route path="/articles/:slug" element={<FullPage />}></Route>
        <Route path="/sign-up" element={<PageSignUp />}></Route>
        <Route path="/" element={<PageHome />}></Route>
        <Route path="*" element={<UnknownPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;

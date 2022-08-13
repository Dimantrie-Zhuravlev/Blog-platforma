import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";

import { AppDispatch } from "../store/store";
import fetchArticlesList from "../services/ticketsApi";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    console.log(1111);
    dispatch(fetchArticlesList());
  }, []);
  return (
    <div>
      <div>1111</div>
    </div>
  );
};

export default App;

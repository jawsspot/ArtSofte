import React from 'react';
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import postsReducer from "./redux/postsReducer.js";
import App from "./app";





let loadState;

if (localStorage.getItem("historyItems") === null) {
  loadState = [];
  // записываем в localStorage пустой массив
  localStorage.setItem("historyItems", "[]");
} else {
  let historyItems = localStorage.getItem("historyItems");
  historyItems = JSON.parse(historyItems);
  let arr = [];
  loadState = historyItems.map((item) => {
    arr.push(item);
  });
  loadState = arr;
}

let initialState = loadState;

const store = createStore(postsReducer, initialState);

const app = (
  <Provider store={store}>
    <App styles />
  </Provider>
);

render(app, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}

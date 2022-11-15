// External dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './style/style.scss';
// Local dependencies
import "./index.css";
import App from "./App";
import { setUpStore } from "./redux/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={setUpStore()}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

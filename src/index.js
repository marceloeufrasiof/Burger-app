import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./containers/Home"
import Requests from "./containers/requests"
import GlobalStyle from "./globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Requests/> <GlobalStyle />{" "}
  </>
);

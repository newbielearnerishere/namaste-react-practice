import React from "react";
import ReactDOM  from "react-dom/client";

//to create multiple elements
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is child h1 element"),
    React.createElement("h2", {}, "this is child h2 element"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "this is child h1 element"),
    React.createElement("h2", {}, "this is child h2 element"),
  ])]
);

//create h1 Element in Root
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React"
);

//create root element from ReactDOM and connect to div.root
const root = ReactDOM.createRoot(document.getElementById("root"));

//ReactDOM will need to render the react elements
root.render(parent);

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h1" }, "Hello From Nested H1 Tag"),
    React.createElement(
      "h2",
      { key: "h2" },
      "Hello From Nested Siblling H2 Tag"
    ),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1" }, "Hello From Nested CHild H1 Tag"),
    React.createElement(
      "h2",
      { key: "h2" },
      "Hello From Nested CHild Siblling H2 Tag"
    ),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);

console.log(parent);

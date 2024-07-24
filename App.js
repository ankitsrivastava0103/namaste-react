import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1 className="head">Namaste React Title Component</h1>;
// React Functional Component
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

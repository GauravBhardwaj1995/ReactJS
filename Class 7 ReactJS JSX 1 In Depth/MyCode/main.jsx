import App from "./app";
import React from "react";
import ReactDOM from "react-dom/client";

// import element from "./app";

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(
//   <React.StrictMode>
//     <h1>Hello Gaurav Bhardwaj !!!</h1>
//   </React.StrictMode>
// );

// -----------------------------------------

// const container = document.getElementById("root");
// let element = <h1>Hello Gaurav Bhardwaj !!!</h1>;
// const root = ReactDOM.createRoot(container);
// root.render(<React.StrictMode>{element}</React.StrictMode>);

// ----------------------------------------

// import { element } from "./app";

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<React.StrictMode>{element}</React.StrictMode>);

// ------------------------------------------

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<React.StrictMode>{element}</React.StrictMode>);

// ---------------------------------------------------

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    {/* {App} */}
    {/* <App /> */}
    <App></App>
  </React.StrictMode>
);

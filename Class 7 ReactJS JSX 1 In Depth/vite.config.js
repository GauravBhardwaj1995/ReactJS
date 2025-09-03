import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// // let element = (
// //   <span>
// //     <h1>Hello Gaurav Bhardwaj !!!</h1>
// //     <h2>How Are You?</h2>
// //   </span>
// // );

// export default element;

// -------------------------------------------

// import { Component } from "react";

// export default class App extends Component {
//   render() {
//     return <h1>Hi Gaurav </h1>;
//   }
// }

// -------------------------------------------

// export default function App() {
//   return <h1>Hi Gaurav </h1>;
// }

// -------------------------------------------

// export default function App() {
//   return (
//     <div>
//       <h1>Hi Gaurav Bhardwaj</h1>
//       <p>How Are You ?</p>
//     </div>
//   );
// }

// -------------------------------------------

// import { Component } from "react";

// export default class App extends Component {
//   render() {
//     let name = "Gaurav Bhardwaj";
//     let a = 10,
//       b = 20;

//     return (
//       <div>
//         <h1>Hi {name}</h1>
//         <p>How Are You ?</p>
//         <p>Sum of a and b is {a + b}</p>
//         <p>
//           Sum of {a} and {b} is {a + b}
//         </p>
//         <p>
//           Multiply of {a} and {b} is {a * b}
//         </p>
//       </div>
//     );
//   }
// }

// -------------------------------------------

// export default function App() {
//   let name = "Gaurav Bhardwaj";
//   let a = 10,
//     b = 20;
//   return (
//     <div>
//       <h1>Hi {name}</h1>
//       <p>How Are You ?</p>
//       <p>Sum of a and b is {a + b}</p>
//       <p>
//         Sum of {a} and {b} is {a + b}
//       </p>
//       <p>
//         Multiply of {a} and {b} is {a * b}
//       </p>
//     </div>
//   );
// }

// -------------------------------------------

// export default function App() {
//   return (
//     <div>
//       <input type="text" value="Gaurav" tabIndex="2" />
//       <br />
//       <input type="button" value="Save" />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <input type="text" tabIndex="2" />
//       <input type="text" tabIndex={2} />
//       <br />
//       <input type="button" value="Save" />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <h1
//         style={{
//           color: "#fff",
//           backgroundColor: "darkgreen",
//           padding: "10px",
//           fontSize: "45px",
//           fontFamily: "sans-serif",
//         }}
//       >
//         Hello Gaurav Bhardwaj !!!
//       </h1>
//     </div>
//   );
// }

// -------------------------------------------

// import { Component } from "react";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1
//           style={{
//             color: "#fff",
//             backgroundColor: "darkgreen",
//             padding: "10px",
//             fontSize: "45px",
//             fontFamily: "sans-serif",
//           }}
//         >
//           Hello Gaurav Bhardwaj !!!
//         </h1>
//       </div>
//     );
//   }
// }

// import "./app.css";

// import { Component } from "react";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1 className="sahosoft">Hello Gaurav Bhardwaj !!!</h1>
//         <h1 className="sahosoft title">Hello Gaurav Bhardwaj !!!</h1>
//       </div>
//     );
//   }
// }

// import "./app.css";

// import { Component } from "react";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <label htmlFor="name">
//           Name: <input type="text" name="gaurav" />
//         </label> */}

//         {/* <label htmlFor="name" myData="gaurav">
//           Name: <input type="checkbox" name="gaurav" />
//         </label> */}

//         <label htmlFor="name" mydata="gaurav">
//           Name: <input type="checkbox" name="gaurav" />
//         </label>
//       </div>
//     );
//   }
// }

// -------------------------------------------

// import "./app.css";

// import { Component } from "react";

// export default class App extends Component {
//   fun1() {
//     alert("Hello Everyone !!!");
//   }

//   render() {
//     return (
//       <div>
//         {/* <button type="button" onclick="fun1()">
//           Click me
//         </button> */}

//         {/* <button type="button" onClick="fun1()">
//           Click me
//         </button> */}

//         <button type="button" onClick={this.fun1}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }

// export default function App() {
//   function fun1() {
//     alert("Hello Everyone !!!");
//   }
//   return (
//     <div>
//       <button type="button" onClick={fun1}>
//         Click me
//       </button>
//     </div>
//   );
// }

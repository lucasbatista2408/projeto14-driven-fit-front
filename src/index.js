import ReactDOM from 'react-dom/client'
import App from "./App.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Context from "./contexts/Context.js";
ReactDOM.createRoot(document.getElementById("root"),).render(<Context><App /></Context>);

// ReactDOM.createRoot(
// <React.StrictMode>
//     <Context>
//         <App />
//     </Context>
   
// </React.StrictMode>
// ,document.querySelector(".root"))
import ReactDOM from 'react-dom/client'
import App from "./App.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Context from "./contexts/Context.js";


import "./styles/reset.css";
import "./styles/style.css";

ReactDOM.createRoot(document.getElementById("root"),).render(<Context><App /></Context>);
//ReactDOM.createRoot(document.getElementById("root"),).render(<App />);

//ReactDOM.render(<App />,document.querySelector(".root"))

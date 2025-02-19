import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routers/AppRouter";

// Styles
import "normalize.css/normalize.css";
import "flexboxgrid/css/flexboxgrid.min.css";
import "./styles/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<AppRouter />);

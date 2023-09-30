import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<NavBar />
		<App />
		<Footer />
	</React.StrictMode>
);

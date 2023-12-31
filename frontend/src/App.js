import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import AddDues from "./pages/AddDues.js";
import Profile from "./pages/Profile.js";
import NavBar from "./components/NavBar.js";
import Dashboard from "./pages/Dashboard.js";
import ContactUs from "./pages/ContactUs.js";
import Home from "./pages/Home.js";

const Layout = ({ children }) => {
	return (
		<>
			<NavBar>{children}</NavBar>
		</>
	);
};

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Layout>
							<Login />
						</Layout>
					}
				/>
				<Route
					path="/login"
					element={
						<Layout>
							<Login />
						</Layout>
					}
				/>
				<Route
					path="/profile"
					element={
						<Layout>
							<Profile />
						</Layout>
					}
				/>
				<Route
					path="/dashboard"
					element={
						<Layout>
							<Dashboard />
						</Layout>
					}
				/>
				<Route
					path="/add-dues"
					element={
						<Layout>
							<AddDues />
						</Layout>
					}
				/>
				<Route
					path="/contact"
					element={
						<Layout>
							<ContactUs />
						</Layout>
					}
				/>
				<Route
					path="/home"
					element={
						<Layout>
							<Home />
						</Layout>
					}
				/>
			</Routes>
		</Router>
	);
};

export default App;

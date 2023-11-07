import Logo from "../assets/images/LogoCst.png";
import { Link } from "react-router-dom";
import React from "react";
import Footer from "./Footer.js";
import { useNavigate } from "react-router-dom";

const NavBar = ({ children }) => {
	const navigate = useNavigate();
	const userDetails = JSON.parse(localStorage.getItem("userDetails"));
	const { userType } = userDetails || {};

	// Function to handle logout
	const handleLogout = () => {
		// Clear user data from local storage
		localStorage.removeItem("token");
		localStorage.removeItem("userDetails");
		navigate("/login");
		alert("You have been logged out successfully");
	};

	return (
		<>
			<nav className="flex items-center justify-between px-4 pt-4 pb-2 border-b-2 border-gray-200">
				<img src={Logo} className="h-14" alt="CST" />
				<div className="flex items-center">
					<ul className="flex space-x-4">
						<Link
							className="text-gray-700 hover:text-blue-700"
							to={
								localStorage.getItem("token")
									? userType === "ICT"
										? "/dashboard"
										: "/profile"
									: "/"
							}
						>
							Home
						</Link>

						{userType === "Admin" ||
						userType === "Staff" ||
						userType === "Student" ? (
							<li>
								<Link
									className="text-gray-700 hover:text-blue-700"
									to="/profile"
								>
									Profile
								</Link>
							</li>
						) : null}
						{userType === "ICT" ? (
							<li>
								<Link
									className="text-gray-700 hover:text-blue-700"
									to="/dashboard"
								>
									Dashboard
								</Link>
							</li>
						) : null}
						<li>
							<Link className="text-gray-700 hover:text-blue-700" to="/contact">
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
				{userType ? (
					<button
						className="px-4 py-2 text-sm font-semibold bg-white rounded-md shadow-sm text-sky-950 ring-1 ring-inset ring-gray-800 hover:bg-sky-950 hover:text-white"
						onClick={handleLogout}
					>
						Logout
					</button>
				) : (
					<Link
						className="px-4 py-2 text-sm font-semibold bg-white rounded-md shadow-sm text-sky-950 ring-1 ring-inset ring-gray-800 hover:bg-sky-950 hover:text-white"
						to="/login"
					>
						Login
					</Link>
				)}
			</nav>
			{children}
			<Footer />
		</>
	);
};

export default NavBar;

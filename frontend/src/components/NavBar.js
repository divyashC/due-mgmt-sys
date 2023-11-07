import Logo from "../assets/images/LogoCst.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./Footer.js";
import { useNavigate } from "react-router-dom";
import {
	LogoutConfirmationModal,
	LogoutSuccessModal,
} from "./LogoutConfirmationModal"; // Import LogoutConfirmationModal component

const NavBar = ({ children }) => {
	const navigate = useNavigate();
	const userDetails = JSON.parse(localStorage.getItem("userDetails"));
	const { userType } = userDetails || {};

	// State variables and functions to manage modals
	const [isLogoutConfirmationModalOpen, setLogoutConfirmationModalOpen] =
		useState(false);
	const [isLogoutSuccessModalOpen, setLogoutSuccessModalOpen] = useState(false);

	// Function to open the logout confirmation modal
	const openLogoutConfirmationModal = () => {
		setLogoutConfirmationModalOpen(true);
	};

	// Function to close the logout confirmation modal
	const closeLogoutConfirmationModal = () => {
		setLogoutConfirmationModalOpen(false);
	};

	// Function to open the logout success modal
	const openLogoutSuccessModal = () => {
		setLogoutSuccessModalOpen(true);
	};

	// Function to close the logout success modal
	const closeLogoutSuccessModal = () => {
		setLogoutSuccessModalOpen(false);
	};

	// Function to handle logout
	const handleLogout = () => {
		// Clear user data from local storage
		localStorage.removeItem("token");
		localStorage.removeItem("userDetails");
		navigate("/login");
		openLogoutSuccessModal(); // Show the logout success modal
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
						onClick={openLogoutConfirmationModal} // Show the logout confirmation modal
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

			{/* Render Logout Confirmation Modal */}
			<LogoutConfirmationModal
				isOpen={isLogoutConfirmationModalOpen}
				onConfirm={handleLogout}
				onCancel={closeLogoutConfirmationModal}
			/>

			{/* Render Logout Success Modal */}
			<LogoutSuccessModal
				isOpen={isLogoutSuccessModalOpen}
				onClose={closeLogoutSuccessModal}
			/>
		</>
	);
};

export default NavBar;

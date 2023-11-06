import React, { useState } from "react";
import Addusers from "../components/AddUsers.js";
import Accounts from "../components/Accounts.js";
import DashboardHome from "../components/DashboardHome.js";
import Procurement from "../components/Procurement.js";
import PendingDues from "../components/PendingDues.js";
import Equipments from "../components/Equipments.js";
import Lab from "../components/Lab.js";
import { Icon } from '@iconify/react';


const Dashboard = () => {
	const [showLaboratoriesSubMenu, setShowLaboratoriesSubMenu] = useState(false);

	const handleLaboratoriesClick = () => {
		// Toggle the visibility of the Laboratories submenu
		setShowLaboratoriesSubMenu(!showLaboratoriesSubMenu);
	};
	const [showCivilEngineeringSubMenu, setShowCivilEngineeringSubMenu] =
		useState(false);
	const [showArchitectureSubMenu, setShowArchitectureSubMenu] = useState(false);

	const handleCivilEngineeringClick = () => {
		setShowCivilEngineeringSubMenu(!showCivilEngineeringSubMenu);
		// Close other submenus if needed
		setShowArchitectureSubMenu(false);
	};

	const handleArchitectureClick = () => {
		setShowArchitectureSubMenu(!showArchitectureSubMenu);
		// Close other submenus if needed
		setShowCivilEngineeringSubMenu(false);
	};

	const [activeMenuItem, setActiveMenuItem] = useState("Dashboard");

	const handleMenuItemClick = (menuItem) => {
		setActiveMenuItem(menuItem);
	};
	const handleSubMenuItemClick = (subMenuItem) => {
		// Handle the click event for sub-submenu items here
		setActiveMenuItem(subMenuItem);
	};

	return (
		<>
			<aside
				id="default-sidebar"
				className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
				aria-label="Sidebar"
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
					<ul className="space-y-2 font-medium">
						<li>
							<button
								onClick={() => handleMenuItemClick("Dashboard")}
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-10 group"
							>
								<i className="bi bi-pie-chart-fill"></i>
								<span className="ml-3">Dashboard</span>
							</button>
						</li>
						<li>
							<button
								onClick={() => handleMenuItemClick("Pending Dues")}
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
							>
								<span className="flex-1 ml-3 whitespace-nowrap">
									Pending Dues
								</span>
							</button>
						</li>
						<li>
							<button
								onClick={() => handleMenuItemClick("Equipment Monitoring")}
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
							>
								<i className="bi bi-tools"></i>
								<span className="flex-1 ml-3 whitespace-nowrap">
									Equipment Monitoring
								</span>
							</button>
						</li>
						<li>
							<button
								onClick={() => handleMenuItemClick("Accounts")}
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
							>
								<i className="bi bi-cash-coin"></i>
								<span className="flex-1 ml-3 whitespace-nowrap">Accounts</span>
							</button>
						</li>
						<li>
							<button
								onClick={() => handleMenuItemClick("Procurement")}
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
							>
								<i className="bi bi-clipboard2-plus-fill"></i>
								<span className="flex-1 ml-3 whitespace-nowrap">
									Procurement
								</span>
							</button>
						</li>
						<li>
							<button
								onClick={() => handleMenuItemClick("Add Users")}
								className="flex items-center p-2 text-gray-900 rounded-lg hover-bg-gray-100 group"
							>
								<i className="bi bi-person-fill-add"></i>
								<span className="flex-1 ml-3 whitespace-nowrap">Add Users</span>
							</button>
						</li>
						<li className="relative group">
							<div
								onClick={handleLaboratoriesClick}
								className={`flex items-center p-2 text-gray-900 rounded-lg hover-bg-gray-100 group relative`}
							>
								<i className="bi bi-house-gear-fill"></i>
								<span className="flex-1 ml-3 whitespace-nowrap">
									Laboratories
								</span>
								{/* Toggle the Bootstrap icon className based on submenu visibility */}
								{showLaboratoriesSubMenu ? (
									<i
										className={`bi bi-caret-up-fill absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 transition-colors duration-300`}
									></i>
								) : (
									<i
										className={`bi bi-caret-down-fill absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 transition-colors duration-300`}
									></i>
								)}
							</div>
							{/* Render the submenu based on state */}

							{showLaboratoriesSubMenu && (
								<ul className="mt-2 ml-8 space-y-2">
									{/* Dummy submenu items */}
									<li>
										<div className="px-2" onClick={handleCivilEngineeringClick}>
										<i class="bi bi-person-fill"></i>
											{" "}
											<span className="p-0">Human and Science</span>
											{showCivilEngineeringSubMenu ? (
												<i
													className={`bi bi-caret-up-fill ml-2 text-gray-600 transition-colors duration-300`}
												></i>
											) : (
												<i
													className={`bi bi-caret-down-fill ml-2 text-gray-600 transition-colors duration-300`}
												></i>
											)}
										</div>

										{showCivilEngineeringSubMenu && (
											<ul>
												<li>
													
													<div
														className="p-2 ml-5"
														onClick={() => handleSubMenuItemClick("Chemistry")}
													>
														<i class="bi bi-eyedropper"></i>
														<span className="p-2"><button>Chemistry Lab</button></span>
													</div>
												</li>
												<li>
													<div
														className="p-2 ml-5"
														onClick={() => handleSubMenuItemClick("Physics")}
													>
														<i class="bi bi-magnet-fill"></i>
														<span className="p-2"><button>Physics Lab</button></span>
													</div>
												</li>
												{/* Add more submenu items for Civil Engineering */}
											</ul>
										)}
									</li>
									<li>
										
										<div className="p-2" onClick={handleArchitectureClick}>
										<i class="bi bi-laptop-fill"></i>
											{" "}
											<span className="p-0">IT Department</span>
											{showArchitectureSubMenu ? (
												<i
													className={`bi bi-caret-up-fill ml-2 text-gray-600 transition-colors duration-300`}
												></i>
											) : (
												<i
													className={`bi bi-caret-down-fill ml-2 text-gray-600 transition-colors duration-300`}
												></i>
											)}
										</div>
										{showArchitectureSubMenu && (
											<ul>
												<li>
													<div
														className="p-2 ml-5"
														onClick={() => handleSubMenuItemClick("NLP")}
													>
														<i class="bi bi-laptop"></i>
														<span className="p-2"><button> NLP Lab</button></span>
													</div>
												</li>

												{/* Add more submenu items for Architecture */}
											</ul>
										)}
									</li>
									{/* Add more main submenu items for other departments */}
								</ul>
							)}
						</li>
					</ul>
				</div>
			</aside>
			<div className="p-2 sm:ml-64 ">
				<div className="flex items-center justify-center p-2 border-2 border-gray-200 border-dashed rounded-lg">
					{activeMenuItem === "Dashboard" && <DashboardHome />}
					{activeMenuItem === "Pending Dues" && <PendingDues />}
					{activeMenuItem === "Equipment Monitoring" && <Equipments />}
					{activeMenuItem === "Accounts" && <Accounts />}
					{activeMenuItem === "Procurement" && <Procurement />}
					{activeMenuItem === "Add Users" && <Addusers />}
					{activeMenuItem === "Chemistry" && <Lab labName="Chemistry Lab" />}
					{activeMenuItem === "Physics" && <Lab labName="Physics Lab" />}
					{activeMenuItem === "NLP" && <Lab labName="NLP Lab" />}
				</div>
			</div>
		</>
	);
};

export default Dashboard;

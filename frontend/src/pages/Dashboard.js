import React, { useState } from "react";
import Addusers from "../components/AddUsers.js";
import Accounts from "../components/Accounts.js";
import DashboardHome from "../components/DashboardHome.js";

const Dashboard = () => {
	const [activeMenuItem, setActiveMenuItem] = useState("Dashboard");
	const [showAddUsers, setShowAddUsers] = useState(false);

	const handleMenuItemClick = (menuItem) => {
		setActiveMenuItem(menuItem);
		setShowAddUsers(false);
	};

	const handleAddUsersClick = () => {
		setShowAddUsers(true);
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
							<a
								onClick={() => handleMenuItemClick("Dashboard")}
								href="#"
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-10 group"
							>
								<i className="bi bi-pie-chart-fill"></i>
								<span className="ml-3">Dashboard</span>
							</a>
						</li>
						<li>
							<a
								onClick={() => handleMenuItemClick("Pending Dues")}
								href="#"
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
							>
								<i className="bi bi-clock-fill"></i>
								<span className="flex-1 ml-3 whitespace-nowrap">
									Pending Dues
								</span>
							</a>
						</li>
						<li>
							<a
								onClick={() => handleMenuItemClick("Equipment Monitoring")}
								href="#"
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
							>
								<i className="bi bi-tools"></i>
								<span className="flex-1 ml-3 whitespace-nowrap">
									Equipment Monitoring
								</span>
							</a>
						</li>
						<li>
							<a
								onClick={() => handleMenuItemClick("Accounts")}
								href="#"
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
							>
								<i className="bi bi-cash-coin"></i>
								<span className="flex-1 ml-3 whitespace-nowrap">Accounts</span>
							</a>
						</li>
						<li>
							<a
								onClick={() => handleMenuItemClick("Procurement")}
								href="#"
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
							>
								<i className="bi bi-clipboard2-plus-fill"></i>
								<span className="flex-1 ml-3 whitespace-nowrap">
									Procurement
								</span>
							</a>
						</li>
						<li>
							<a
								onClick={() => handleMenuItemClick("Add Users")}
								href="#"
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
							>
								<i className="bi bi-person-fill-add"></i>
								<span className="flex-1 ml-3 whitespace-nowrap">Add Users</span>
							</a>
						</li>
						<li>
							<a
								onClick={() => handleMenuItemClick("Laboratories")}
								href="#"
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
							>
								<i className="bi bi-house-gear-fill"></i>
								<span className="flex-1 ml-3 whitespace-nowrap">
									Laboratories
								</span>
							</a>
						</li>
					</ul>
				</div>
			</aside>
			<div className="p-4 sm:ml-64 ">
				<div className="flex items-center justify-center p-2 border-2 border-gray-200 border-dashed rounded-lg">
					{activeMenuItem === "Dashboard" && <DashboardHome />}
					{activeMenuItem === "Pending Dues" && <div>Pending Dues Content</div>}
					{activeMenuItem === "Equipment Monitoring" && (
						<div>Equipment Monitoring Content</div>
					)}
					{activeMenuItem === "Accounts" && <div>Accounts Content</div>}
					{activeMenuItem === "Procurement" && <div>Procurement Content</div>}
					{activeMenuItem === "Add Users" && <Addusers />}
					{activeMenuItem === "Laboratories" && <div>Laboratories Content</div>}
				</div>
			</div>
		</>
	);
};

export default Dashboard;

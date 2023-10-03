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
			<button
				data-drawer-target="default-sidebar"
				data-drawer-toggle="default-sidebar"
				aria-controls="default-sidebar"
				type="button"
				class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
			>
				<span class="sr-only">Open sidebar</span>
				<svg
					class="w-6 h-6"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						clip-rule="evenodd"
						fill-rule="evenodd"
						d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
					></path>
				</svg>
			</button>

			<aside
				id="default-sidebar"
				class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
				aria-label="Sidebar"
			>
				<div class="h-full px-3 py-4 overflow-y-auto bg-gray-50">
					<ul class="space-y-2 font-medium">
						<li>
							<a
								onClick={() => handleMenuItemClick("Dashboard")}
								href="#"
								class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-10 group"
							>
								<i class="bi bi-pie-chart-fill"></i>
								<span class="ml-3">Dashboard</span>
							</a>
						</li>
						<li>
							<a
								onClick={() => handleMenuItemClick("Pending Dues")}
								href="#"
								class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
							>
								<i class="bi bi-clock-fill"></i>
								<span class="flex-1 ml-3 whitespace-nowrap">Pending Dues</span>
							</a>
						</li>
						<li>
							<a
								onClick={() => handleMenuItemClick("Equipment Monitoring")}
								href="#"
								class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
							>
								<i class="bi bi-tools"></i>
								<span class="flex-1 ml-3 whitespace-nowrap">
									Equipment Monitoring
								</span>
							</a>
						</li>
						<li>
							<a
								onClick={() => handleMenuItemClick("Accounts")}
								href="#"
								class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
							>
								<i class="bi bi-cash-coin"></i>
								<span class="flex-1 ml-3 whitespace-nowrap">Accounts</span>
							</a>
						</li>
						<li>
							<a
								onClick={() => handleMenuItemClick("Procurement")}
								href="#"
								class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
							>
								<i class="bi bi-clipboard2-plus-fill"></i>
								<span class="flex-1 ml-3 whitespace-nowrap">Procurement</span>
							</a>
						</li>
						<li>
							<a
								onClick={() => handleMenuItemClick("Add Users")}
								href="#"
								class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
							>
								<i class="bi bi-person-fill-add"></i>
								<span class="flex-1 ml-3 whitespace-nowrap">Add Users</span>
							</a>
						</li>
						<li>
							<a
								onClick={() => handleMenuItemClick("Laboratories")}
								href="#"
								class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
							>
								<i class="bi bi-house-gear-fill"></i>
								<span class="flex-1 ml-3 whitespace-nowrap">Laboratories</span>
							</a>
						</li>
					</ul>
				</div>
			</aside>
			<div class="p-4 sm:ml-64 ">
				<div class="p-2 border-2 border-gray-200 border-dashed rounded-lg flex items-center justify-center">
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

import Logo from "../assets/images/LogoCst.png";

import React from "react";

const NavBar = () => {
	return (
		<nav className="flex items-center justify-between px-4 pt-4 pb-2 border-b-2 border-gray-200">
			<img src={Logo} className="h-14" />
			<div className="flex items-center">
				<ul className="flex space-x-4">
					<li>
						<p className="text-gray-700 hover:text-blue-700">Home</p>
					</li>
					<li>
						<p className="text-gray-700 hover:text-blue-700">Dashboard</p>
					</li>
					<li>
						<p className="text-gray-700 hover:text-blue-700">Contact Us</p>
					</li>
				</ul>
			</div>
			<button
				type="button"
				className="px-4 py-2 text-sm font-semibold bg-white rounded-md shadow-sm text-sky-950 ring-1 ring-inset ring-gray-800 hover:bg-sky-950 hover:text-white"
			>
				Login
			</button>
		</nav>
	);
};

export default NavBar;

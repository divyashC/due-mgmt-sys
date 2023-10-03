import React from "react";

const Footer = () => {
	return (
		<div className="py-8 mt-10 bg-gray-200">
			<div className="flex items-center justify-center gap-1 mt-8">
				<p className="mx-4 transition-colors duration-300 text-sky-950 hover:text-blue-700">
					Home
				</p>
				<p className="mx-4 transition-colors duration-300 text-sky-950 hover:text-blue-700">
					Privacy Policy
				</p>
				<p className="mx-4 transition-colors duration-300 text-sky-950 hover:text-blue-700">
					Terms & Conditions
				</p>
			</div>
			<div className="flex items-center justify-center mt-5">
				<a
					href="https://www.facebook.com/CST.University/"
					target="_blank"
					rel="noopener noreferrer"
					className="mx-4 text-gray-700 transition-colors duration-300 hover:text-blue-700"
				>
					<i className="text-3xl bi bi-facebook"></i>
				</a>
				<a
					href="https://www.youtube.com/@CSTMultimedia"
					target="_blank"
					rel="noopener noreferrer"
					className="mx-4 text-gray-700 transition-colors duration-300 hover:text-red-500"
				>
					<i className="text-4xl bi bi-youtube"></i>
				</a>
				<a
					href="https://www.instagram.com/cst_rub/"
					target="_blank"
					rel="noopener noreferrer"
					className="mx-4 text-gray-700 transition-colors duration-300 hover:text-pink-500"
				>
					<i className="text-3xl bi bi-instagram"></i>
				</a>
			</div>
			<div className="flex justify-center mt-4 text-gray-500">
				<p>
					© 2023 College of Science &amp; Technology | Due Management System
				</p>
			</div>
		</div>
	);
};

export default Footer;

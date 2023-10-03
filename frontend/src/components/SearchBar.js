import React from "react";

const SearchBar = () => {
	return (
		<form className="flex items-center p-2 bg-gray-100 rounded-lg shadow-lg dark:bg-white">
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<i className="text-gray-500 bi bi-search dark:text-gray-400"></i>
				</div>
				<input
					type="search"
					id="default-search"
					className="block w-64 p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Enter Student ID"
					required
				/>
			</div>
			<button
				type="submit"
				className="px-3 py-2 ml-2 text-sm font-semibold leading-6 text-white rounded-md shadow-sm bg-sky-950 hover:bg-white hover:text-sky-950 hover:ring-1 hover:ring-inset hover:ring-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				Search
			</button>
		</form>
	);
};

export default SearchBar;

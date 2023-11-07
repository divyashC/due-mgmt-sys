import React from "react";
import { Link } from "react-router-dom";

const AddBtn = () => {
	return (
		// <button className="flex justify-center w-auto px-3 py-2 text-lg font-semibold leading-6 text-white rounded-md shadow-sm bg-sky-950 hover:bg-white hover:text-sky-950 hover:ring-1 hover:ring-inset hover:ring-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
		// 	<i className="pr-3 bi bi-plus-square hover:text-sky-950"></i>
		// 	Add
		// </button>

		<Link
			to="/add-dues"
			className="flex justify-center w-auto px-3 py-2 text-lg font-semibold leading-6 text-white rounded-md shadow-sm bg-sky-950 hover:bg-white hover:text-sky-950 hover:ring-1 hover:ring-inset hover:ring-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			<i className="pr-3 bi bi-plus-square hover:text-sky-950"></i>
			Add Dues
		</Link>
	);
};

export default AddBtn;

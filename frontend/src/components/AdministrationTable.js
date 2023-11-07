	import React, { useState, useEffect } from "react"; // Import useState and useEffect from 'react'
	import SearchBar from "../components/SearchBar.js";

	const AdministrationTable = () => {
	const [duesData, setDuesData] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		// Make an API call to fetch dues data
		fetch("http://localhost:8000/getDues")
		.then((response) => response.json())
		.then((data) => {
			setDuesData(data);
			setFilteredData(data);
		})
		.catch((error) => console.error("Error fetching data:", error));
	}, []);

	const handleSearch = (e) => {
		const searchTerm = e.target.value.toLowerCase();
		const filteredResults = duesData.filter((data) => {
		return (
			data.name.toLowerCase().includes(searchTerm) ||
			data.stdNo.toLowerCase().includes(searchTerm) ||
			data.labName.toLowerCase().includes(searchTerm) ||
			data.dues.toLowerCase().includes(searchTerm)
		);
		});
		setFilteredData(filteredResults);
		setSearchQuery(e.target.value);
	};

	return (
		<>
		<div className="flex items-center justify-center mt-8 mb-10">
			<SearchBar value={searchQuery} onChange={handleSearch} />
		</div>
		<div className="relative mx-12 mt-10 overflow-x-auto shadow-md sm:rounded-lg">
			
			<table className="w-full text-sm text-left text-gray-500">
			<thead className="text-50px text-gray-700 bg-gray-50">
				<tr>
				<th scope="col" className="px-6 py-3">
					Sl No.
				</th>
				<th scope="col" className="px-6 py-3">
					<div className="flex items-center">Name</div>
				</th>
				<th scope="col" className="px-6 py-3">
					<div className="flex items-center">Student No.</div>
				</th>
				<th scope="col" className="px-6 py-3">
					<div className="flex items-center">Lab</div>
				</th>
				<th scope="col" className="px-6 py-3">
					<div className="flex items-center">Amount</div>
				</th>
				<th scope="col" className="px-6 py-3">
					<div className="flex items-center">Status</div>
				</th>
				</tr>
			</thead>
			<tbody>
				{filteredData.length > 0 ? (
					filteredData.map((data, index) => (
					<tr className="bg-white border-b" key={index}>
						<th
						scope="row"
						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
						>
						{index + 1}
						</th>
						<td className="px-6 py-4">{data.name}</td>
						<td className="px-6 py-4">{data.stdNo}</td>
						<td className="px-6 py-4">{data.labName}</td>
						<td className="px-6 py-4">Nu. {data.amount}</td>
						<td className="px-6 py-4 text-start">{data.dues}</td>
					</tr>
					))
					) : (
					<tr>
						<td colSpan="6" className="text-center py-4">
						No data found
						</td>
					</tr>
					)}
			</tbody>
			</table>
		</div>
		</>
	);
	};

	export default AdministrationTable;

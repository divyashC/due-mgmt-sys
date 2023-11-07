import React, { useState, useEffect } from "react";
import LineChart from "./LineChart";

const PendingDues = () => {
	const [duesData, setDuesData] = useState([]);
	const [dues, setDues] = useState([]);
	const [restoredData, setRestoredData] = useState([]);

	useEffect(() => {
		Promise.all([
			fetch("http://localhost:8000/getDueAmountInLab").then((response) =>
				response.json()
			),
			fetch("http://localhost:8000/getDues").then((response) =>
				response.json()
			),
			fetch("http://localhost:8000/getAllRestoredItems").then((response) =>
				response.json()
			),
		])
			.then(([duesData, dues, restoredData]) => {
				setDuesData(duesData);
				setDues(dues);
				setRestoredData(restoredData);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, []);

	const lineChartData = {
		labels: Object.keys(duesData),
		datasets: [
			{
				label: "Amount Due",
				data: Object.values(duesData), // Replace with your data
				fill: false,
				borderColor: "#D84315",
				tension: 0.4,
			},
		],
	};

	const lineChartOptions = {
		plugins: {
			legend: {
				labels: {
					color: "#000000",
				},
			},
		},
		scales: {
			x: {
				ticks: {
					color: "#000000",
				},
				grid: {
					color: "#000000",
				},
			},
			y: {
				ticks: {
					color: "#000000",
				},
				grid: {
					color: "#000000",
				},
			},
		},
	};

	return (
		<div className="flex flex-col items-center px-5 align-middle">
			<h2 className="my-10 text-lg font-semibold text-sky-950">
				Amounts Due from Each Lab
			</h2>
			<div className="w-4/5">
				<LineChart data={lineChartData} options={lineChartOptions} />
			</div>

			<div className="relative w-full m-20 overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3">
								SL No.
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Laboratory</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Incharge</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Item Damaged</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Date Damaged</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Item Cost</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Date Restored</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Status</div>
							</th>
						</tr>
					</thead>
					<tbody>
						{dues.map((data, index) => (
							<tr className="bg-white border-b" key={index}>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
								>
									{index + 1}
								</th>
								<td className="px-6 py-4">{data.labName}</td>
								<td className="px-6 py-4">{data.labInchargeName}</td>
								<td className="px-6 py-4">{data.item}</td>
								<td className="px-6 py-4 text-start">{data.date}</td>
								<td className="px-6 py-4">Nu. {data.amount}</td>
								<td className="px-6 py-4 text-start">
									{restoredData.map((restoredItem) => {
										if (data.item === restoredItem.itemName) {
											if (restoredItem.date === "") {
												return "Not Restored";
											} else {
												return restoredItem.date;
											}
										}
									})}
								</td>
								<td className="px-6 py-4 text-start">
									{restoredData.map((restoredItem) =>
										data.item === restoredItem.itemName
											? restoredItem.status
											: null
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PendingDues;

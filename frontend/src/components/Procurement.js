import React, { useState, useEffect } from "react";
import DoughnutChart from "./DoughnutChart";

const Table = () => {
	const [duesData, setDuesData] = useState([]);
	const [restoredData, setRestoredData] = useState([]);

	useEffect(() => {
		Promise.all([
			fetch("http://localhost:8000/getDues").then((response) =>
				response.json()
			),
			fetch("http://localhost:8000/getAllRestoredItems").then((response) =>
				response.json()
			),
		])
			.then(([duesData, restoredData]) => {
				setDuesData(duesData);
				setRestoredData(restoredData);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, []);

	const chartData1 = {
		labels: ["Restored", "Not Restored"],
		datasets: [
			{
				data: [
					restoredData.filter((item) => item.status === "restored").length,
					restoredData.filter((item) => item.status === "not-restored").length,
				],
				backgroundColor: ["#008000", "#FF0000"],
				// hoverBackgroundColor: ["#0056b3", "#d39e00"],
			},
		],
	};

	const chartOptions1 = {
		cutout: "60%",
	};
	return (
		<div className="flex flex-col">
			<DoughnutChart
				data={chartData1}
				options={chartOptions1}
				title="Damaged Item Status"
			/>

			<div className="relative mx-12 mt-10 mb-20 overflow-x-auto shadow-md sm:rounded-lg">
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
								<div className="flex items-center">Item Cost</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Status</div>
							</th>
						</tr>
					</thead>
					<tbody>
						{duesData.map((item, index) => (
							<tr className="bg-white border-b" key={index}>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
								>
									{index + 1}
								</th>
								<td className="px-6 py-4">{item.labName}</td>
								<td className="px-6 py-4">{item.labInchargeName}</td>
								<td className="px-6 py-4">{item.item}</td>
								<td className="px-6 py-4">Nu. {item.amount}</td>
								<td className="px-6 py-4">
									{restoredData.map((restoredItem) => {
										if (
											item.item === restoredItem.itemName &&
											item.date === restoredItem.damagedDate
										) {
											if (restoredItem.date === "") {
												return "Not Restored";
											} else {
												return restoredItem.status;
											}
										}
									})}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;

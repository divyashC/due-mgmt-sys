import React from "react";
import LineChart from "./LineChart";

const PendingDues = () => {
	const lineChartData = {
		labels: ["Lab A", "Lab B", "Lab C", "Lab D", "Lab E"],
		datasets: [
			{
				label: "Amount Due",
				data: [5000, 10000, 80000, 70000, 20000], // Replace with your data
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
						<tr className="bg-white border-b">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
							>
								1
							</th>
							<td className="px-6 py-4">Chemistry Lab</td>
							<td className="px-6 py-4">Gembo</td>
							<td className="px-6 py-4">Beaker</td>
							<td className="px-6 py-4">2023-08-01</td>
							<td className="px-6 py-4">Nu.300</td>
							<td className="px-6 py-4">2023-08-05</td>
							<td className="px-6 py-4">Restored</td>
						</tr>

						<tr className="bg-white border-b">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
							>
								2
							</th>
							<td className="px-6 py-4">Physics Lab</td>
							<td className="px-6 py-4">Karma Chophel</td>
							<td className="px-6 py-4">Sono Meter</td>
							<td className="px-6 py-4">2023-08-02</td>
							<td className="px-6 py-4">Nu.2000</td>
							<td className="px-6 py-4">N/A</td>
							<td className="px-6 py-4">Not Restored</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PendingDues;

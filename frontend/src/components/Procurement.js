import React from "react";
import AddBtn from "./AddBtn";
import DoughnutChart from "./DoughnutChart";
import SearchBar from "./SearchBar";

const Table = () => {
	const chartData1 = {
		labels: ["Restored", "Not Restored"],
		datasets: [
			{
				data: [300, 50],
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

			<div className="relative mx-12 mt-10 overflow-x-auto shadow-md sm:rounded-lg">
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
						<tr className="bg-white border-b">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
							>
								1
							</th>
							<td className="px-6 py-4">Physics Lab</td>
							<td className="px-6 py-4">Sonam Thinley</td>
							<td className="px-6 py-4">Bicker</td>
							<td className="px-6 py-4">Nu.300</td>
							<td className="px-6 py-4">Restored</td>
						</tr>

						<tr className="bg-white border-b">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
							>
								2
							</th>
							<td className="px-6 py-4">Chemistry Lab</td>
							<td className="px-6 py-4">Thinley</td>
							<td className="px-6 py-4">Sono Meter</td>
							<td className="px-6 py-4">Nu.2000</td>
							<td className="px-6 py-4">Not Restored</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;

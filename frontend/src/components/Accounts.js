import React from "react";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
const Table = () => {
	const chartData1 = {
		labels: ["Amounts Collected", "Amounts Due"],
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
	const barChartData = {
		labels: [
			"Physics Lab",
			"Chemistry Lab",
			"NLP LaB(IT)",
			"Survey Lab",
			"Fluid Mechanic Lab",
		],

		yaxis: ["Amount"],
		datasets: [
			{
				label: "Amount Collected",
				backgroundColor: "#008000",
				borderColor: "#008000",
				data: [65, 59, 80, 81, 56, 55, 40],
			},
			{
				label: "Amount Due",
				backgroundColor: "#FF0000",
				borderColor: "#FF0000",
				data: [28, 48, 40, 19, 86, 27, 90],
			},
		],
	};

	const barChartOptions = {
		plugins: {
			legend: {
				labels: {
					fontColor: "#00000",
				},
			},
		},
		scales: {
			x: {
				ticks: {
					color: "#000000",
					font: {
						weight: 500,
					},
				},
				grid: {
					display: false,
					drawBorder: false,
				},
			},
			y: {
				ticks: {
					color: "#000000",
				},
				grid: {
					color: "#000000",

					drawBorder: false,
				},
			},
		},
	};
	return (
		<div className="flex flex-col items-center px-3 align-middle">
			<div className="mt-5 mb-16 bg-white">
				<div className="px-6 mx-auto max-w-7xl lg:px-8">
					<dl className="flex text-center gap-x-10 gap-y-5 ">
						<div className="flex flex-col max-w-xs p-5 mx-auto rounded-lg gap-y-2 bg-blue-50">
							<dt className="text-base leading-7 text-sky-950">
								Amount Collected
							</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-sky-900 sm:text-5xl">
								Nu. 54,000
							</dd>
						</div>
						<div className="flex flex-col max-w-xs p-5 mx-auto rounded-lg gap-y-2 bg-blue-50">
							<dt className="text-base leading-7 text-sky-950">Amount Due</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-sky-900 sm:text-5xl">
								Nu. 12,000
							</dd>
						</div>
					</dl>
				</div>
			</div>

			<DoughnutChart
				data={chartData1}
				options={chartOptions1}
				title="Account Status"
			/>

			<div className="w-2/3 mx-16">
				<BarChart
					data={barChartData}
					options={barChartOptions}
					title="Status"
				/>
			</div>

			<div className="relative mx-12 mt-10 mb-16 overflow-x-auto shadow-md sm:rounded-lg">
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
								<div className="flex items-center">Amount Collected</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Amount Due</div>
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
							<td className="px-6 py-4">Nu.340</td>
							<td className="px-6 py-4">Nu.340</td>
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
							<td className="px-6 py-4">Nu.600</td>
							<td className="px-6 py-4">Nu.340</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;

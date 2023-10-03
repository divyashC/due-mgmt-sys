import React from "react";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const DashboardHome = () => {
	const doughnutChart1 = {
		labels: ["Lab A", "Lab B", "Lab C", "Lab D", "Lab E"],
		datasets: [
			{
				data: [15000, 20000, 18000, 25000, 17000], // Replace with your data
				backgroundColor: [
					"#007BFF",
					"#FFC107",
					"#28A745",
					"#FF5722",
					"#4CAF50",
				],
				hoverBackgroundColor: [
					"#0056b3",
					"#d39e00",
					"#1e7e34",
					"#D84315",
					"#388E3C",
				],
			},
		],
	};

	const chartOptions1 = {
		cutout: "60%",
	};

	const doughnutChart2 = {
		labels: ["Lab A", "Lab B", "Lab C", "Lab D", "Lab E"],
		datasets: [
			{
				data: [5000, 7500, 6000, 8500, 7000], // Replace with your data
				backgroundColor: [
					"#007BFF",
					"#FFC107",
					"#28A745",
					"#FF5722",
					"#4CAF50",
				],
				hoverBackgroundColor: [
					"#0056b3",
					"#d39e00",
					"#1e7e34",
					"#D84315",
					"#388E3C",
				],
			},
		],
	};
	const chartOptions2 = {
		cutout: "60%",
	};

	const barChartData = {
		labels: ["February", "March", "April", "May", "June", "July", "August"],
		datasets: [
			{
				label: "Amount Collected",
				backgroundColor: "#D84315",
				borderColor: "#D84315",
				data: [5400, 1200, 2200, 3500, 4800, 6000, 750], // Replace with your data
			},
			{
				label: "Items Damaged",
				backgroundColor: "#28A745",
				borderColor: "#28A745",
				data: [5001, 413, 320, 430, 380, 290, 500], // Replace with your data
			},
		],
	};

	const barChartOptions = {
		plugins: {
			legend: {
				labels: {
					fontColor: "#000000",
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
					drawBorder: true,
				},
			},
		},
	};

	const lineChartData = {
		labels: ["February", "March", "April", "May", "June", "July", "August"],
		datasets: [
			{
				label: "Items Damaged",
				data: [413, 250, 320, 430, 380, 290, 500], // Replace with your data
				fill: false,
				borderColor: "#D84315",
				tension: 0.4,
			},
			{
				label: "Items Restored",
				data: [300, 200, 260, 400, 350, 280, 450], // Replace with your data
				fill: false,
				borderColor: "#28A745",
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
		<div className="flex flex-col items-center align-middle">
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
						<div className="flex flex-col max-w-xs p-5 mx-auto rounded-lg gap-y-2 bg-blue-50">
							<dt className="text-base leading-7 text-sky-950">
								Items Damaged
							</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-sky-900 sm:text-5xl">
								413
							</dd>
						</div>
						<div className="flex flex-col max-w-xs p-5 mx-auto rounded-lg gap-y-2 bg-blue-50">
							<dt className="text-base leading-7 text-sky-950">
								Student with Dues
							</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-sky-900 sm:text-5xl">
								39
							</dd>
						</div>
					</dl>
				</div>
			</div>

			<div className="flex items-center w-full p-2 mb-16 align-middle gap-x-14">
				<div className="w-4/5">
					<h4 className="text-lg font-semibold text-sky-950">
						Amount Collected & Items Damaged
					</h4>
					<BarChart data={barChartData} options={barChartOptions} />
				</div>

				<DoughnutChart
					data={doughnutChart1}
					options={chartOptions1}
					title="Lab vs Amount Collected"
				/>
			</div>
			<div className="flex items-center w-full p-2 align-middle gap-x-14">
				<div className="w-4/5">
					<h4 className="text-lg font-semibold text-sky-950">
						Items Restored & Items Damaged
					</h4>
					<LineChart data={lineChartData} options={lineChartOptions} />
				</div>
				<DoughnutChart
					data={doughnutChart2}
					options={chartOptions2}
					title="Lab vs Items Damaged"
				/>
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

						{/* Add 3 more rows of data here */}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DashboardHome;

import React, { useEffect, useState } from "react";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
const Table = () => {
	const [duesData, setDuesData] = useState([]);
	const [dataSummary, setDataSummary] = useState([]);
	const [labAmount, setLabAmount] = useState([]);
	const [labDues, setLabDues] = useState([]);
	const [labNames, setLabNames] = useState([]);

	useEffect(() => {
		Promise.all([
			fetch("http://localhost:8000/datasummary").then((response) =>
				response.json()
			),
			fetch("http://localhost:8000/getDues").then((response) =>
				response.json()
			),
			fetch("http://localhost:8000/getAllLabAmount").then((response) =>
				response.json()
			),
			fetch("http://localhost:8000/getAllLabDues").then((response) =>
				response.json()
			),
			fetch("http://localhost:8000/labNames").then((response) =>
				response.json()
			),
		])
			.then(([dataSummary, duesData, labAmount, labDues, labNames]) => {
				setDataSummary(dataSummary);
				setDuesData(duesData);
				setLabAmount(labAmount);
				setLabDues(labDues);
				setLabNames(labNames);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, []);
	const chartData1 = {
		labels: ["Amounts Collected", "Amounts Due"],
		datasets: [
			{
				data: [dataSummary.amountCollected, dataSummary.amountDue],
				backgroundColor: ["#008000", "#FF0000"],
				// hoverBackgroundColor: ["#0056b3", "#d39e00"],
			},
		],
	};

	const chartOptions1 = {
		cutout: "60%",
	};
	const barChartData = {
		labels: labNames.map((name) => name),

		yaxis: ["Amount"],
		datasets: [
			{
				label: "Amount Collected",
				backgroundColor: "#008000",
				borderColor: "#008000",
				data: Object.values(labAmount),
			},
			{
				label: "Amount Due",
				backgroundColor: "#FF0000",
				borderColor: "#FF0000",
				data: Object.values(labDues),
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
								Nu. {dataSummary.amountCollected}
							</dd>
						</div>
						<div className="flex flex-col max-w-xs p-5 mx-auto rounded-lg gap-y-2 bg-blue-50">
							<dt className="text-base leading-7 text-sky-950">Amount Due</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-sky-900 sm:text-5xl">
								Nu. {dataSummary.amountDue}
							</dd>
						</div>
					</dl>
				</div>
			</div>
			<div className="px-6 mb-4">
				<DoughnutChart
					data={chartData1}
					options={chartOptions1}
					title="Account Status"
				/>
			</div>

			<div className="w-2/3 mx-16 mt-4">
				<h2 className="mb-2 text-lg font-semibold text-center">Status</h2>
				<BarChart data={barChartData} options={barChartOptions} />
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
						{labNames.map((labName, index) => {
							const labInchargeNames = duesData
								.filter((due) => due.labName === labName)
								.map((due) => due.labInchargeName);

							// Use a Set to store unique labInchargeNames
							const uniqueLabInchargeNames = [...new Set(labInchargeNames)];

							return (
								<tr className="bg-white border-b" key={index}>
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
									>
										{index + 2}
									</th>
									<td className="px-6 py-4">{labName}</td>
									<td className="px-6 py-4">
										{uniqueLabInchargeNames.join(", ")}
									</td>
									<td className="px-6 py-4">
										{labAmount[labName] ? labAmount[labName] : 0}
									</td>
									<td className="px-6 py-4">
										{labDues[labName] ? labDues[labName] : 0}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;

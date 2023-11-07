import React, { useEffect, useState } from "react";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const DashboardHome = () => {
	const [duesData, setDuesData] = useState([]);
	const [dataSummary, setDataSummary] = useState([]);
	const [labNames, setLabNames] = useState([]);
	const [amountCollectedPerMonth, setAmountCollectedPerMonth] = useState([]);
	const [itemsDamagedPerMonth, setItemsDamagedPerMonth] = useState([]);
	const [labAmount, setLabAmount] = useState([]);
	const [labItemsDamaged, setLabItemsDamaged] = useState([]);
	const [itemsRestoredPerMonth, setItemsRestoredPerMonth] = useState([]);

	useEffect(() => {
		Promise.all([
			fetch("http://localhost:8000/datasummary").then((response) =>
				response.json()
			),
			fetch("http://localhost:8000/getDues").then((response) =>
				response.json()
			),
			fetch("http://localhost:8000/labNames").then((response) =>
				response.json()
			),
			fetch("http://localhost:8000/itemsDamagedPerMonth").then((response) =>
				response.json()
			),
			fetch("http://localhost:8000/amountCollectedPerMonth").then((response) =>
				response.json()
			),
			fetch("http://localhost:8000/getAllLabAmount").then((response) =>
				response.json()
			),
			fetch("http://localhost:8000/getAllLabItemsDamaged").then((response) =>
				response.json()
			),
			fetch("http://localhost:8000/getItemsRestoredPerMonth").then((response) =>
				response.json()
			),
		])
			.then(
				([
					dataSummary,
					duesData,
					labNames,
					itemsDamagedPerMonth,
					amountCollectedPerMonth,
					labAmount,
					labItemsDamaged,
					itemsRestoredPerMonth,
				]) => {
					setDataSummary(dataSummary);
					setDuesData(duesData);
					setLabNames(labNames);
					setItemsDamagedPerMonth(itemsDamagedPerMonth);
					setAmountCollectedPerMonth(amountCollectedPerMonth);
					setLabAmount(labAmount);
					setLabItemsDamaged(labItemsDamaged);
					setItemsRestoredPerMonth(itemsRestoredPerMonth);
				}
			)
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, []);

	const doughnutChart1 = {
		labels: labNames.map((name) => name),
		// labels: duesData.map((data) => data.labName),
		datasets: [
			{
				data: Object.values(labAmount),
				// data: labAmount.map((amount) => amount),
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
		labels: labNames.map((name) => name),
		datasets: [
			{
				data: Object.values(labItemsDamaged),
				// data: labItemsDamaged.map((amount) => amount),
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
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		datasets: [
			{
				label: "Amount Collected",
				backgroundColor: "#D84315",
				borderColor: "#D84315",
				data: amountCollectedPerMonth.map((amount) => amount),
			},
			{
				label: "Items Damaged",
				backgroundColor: "#28A745",
				borderColor: "#28A745",
				data: itemsDamagedPerMonth.map((amount) => amount),
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
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		datasets: [
			{
				label: "Items Damaged",
				data: itemsDamagedPerMonth.map((amount) => amount),
				fill: false,
				borderColor: "#D84315",
				tension: 0.4,
			},
			{
				label: "Items Restored",
				data: itemsRestoredPerMonth.map((amount) => amount),
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
								Nu. {dataSummary.amountCollected}
							</dd>
						</div>
						<div className="flex flex-col max-w-xs p-5 mx-auto rounded-lg gap-y-2 bg-blue-50">
							<dt className="text-base leading-7 text-sky-950">Amount Due</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-sky-900 sm:text-5xl">
								Nu. {dataSummary.amountDue}
							</dd>
						</div>
						<div className="flex flex-col max-w-xs p-5 mx-auto rounded-lg gap-y-2 bg-blue-50">
							<dt className="text-base leading-7 text-sky-950">
								Items Damaged
							</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-sky-900 sm:text-5xl">
								{dataSummary.itemsDamaged}
							</dd>
						</div>
						<div className="flex flex-col max-w-xs p-5 mx-auto rounded-lg gap-y-2 bg-blue-50">
							<dt className="text-base leading-7 text-sky-950">
								Students with Dues
							</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-sky-900 sm:text-5xl">
								{dataSummary.studentsWithDues}
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
						{duesData.map((data, index) => (
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
								<td className="px-6 py-4 text-start">{data.date}</td>
								<td className="px-6 py-4 text-start">{data.dues}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DashboardHome;

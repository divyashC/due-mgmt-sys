import React from "react";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";

const DashboardHome = () => {
	// Dummy data for the first chart
	const chartData1 = {
		labels: ["A", "B", "C"],
		datasets: [
			{
				data: [300, 50, 100],
				backgroundColor: ["#007BFF", "#FFC107", "#28A745"],
				hoverBackgroundColor: ["#0056b3", "#d39e00", "#1e7e34"],
			},
		],
	};

	const chartOptions1 = {
		cutout: "60%",
	};

	// Dummy data for the second chart
	const chartData2 = {
		labels: ["X", "Y", "Z"],
		datasets: [
			{
				data: [200, 80, 150],
				backgroundColor: ["#FF5722", "#FFC107", "#4CAF50"],
				hoverBackgroundColor: ["#D84315", "#D39E00", "#388E3C"],
			},
		],
	};

	const chartOptions2 = {
		cutout: "60%",
	};

	const barChartData = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "My First dataset",
				backgroundColor: "#D84315",
				borderColor: "#D84315",
				data: [65, 59, 80, 81, 56, 55, 40],
			},
			{
				label: "My Second dataset",
				backgroundColor: "#28A745",
				borderColor: "#28A745",
				data: [28, 48, 40, 19, 86, 27, 90],
			},
		],
	};

	const barChartOptions = {
		plugins: {
			legend: {
				labels: {
					fontColor: "#D84315",
				},
			},
		},
		scales: {
			x: {
				ticks: {
					color: "#D84315",
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
					color: "#D84315",
				},
				grid: {
					color: "#D84315",
					drawBorder: false,
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

			<div className="flex space-x-20">
				<DoughnutChart
					data={chartData1}
					options={chartOptions1}
					title="Chart 1 Title"
				/>
				<DoughnutChart
					data={chartData2}
					options={chartOptions2}
					title="Chart 2 Title"
				/>
			</div>
			<div className="w-2/3">
				<BarChart data={barChartData} options={barChartOptions} />
			</div>
		</div>
	);
};

export default DashboardHome;

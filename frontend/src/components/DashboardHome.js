import React from "react";
import DoughnutChart from "./DoughnutChart";

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

	return (
		<div className="flex flex-col items-center align-middle">
			<div class="bg-white mt-5 mb-16">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<dl class="flex gap-x-10 gap-y-5 text-center ">
						<div class="mx-auto flex max-w-xs flex-col gap-y-2 bg-blue-50 p-5 rounded-lg">
							<dt class="text-base leading-7 text-sky-950">Amount Collected</dt>
							<dd class="order-first text-3xl font-semibold tracking-tight text-sky-900 sm:text-5xl">
								Nu. 54,000
							</dd>
						</div>
						<div class="mx-auto flex max-w-xs flex-col gap-y-2 bg-blue-50 p-5 rounded-lg">
							<dt class="text-base leading-7 text-sky-950">Amount Due</dt>
							<dd class="order-first text-3xl font-semibold tracking-tight text-sky-900 sm:text-5xl">
								Nu. 12,000
							</dd>
						</div>
						<div class="mx-auto flex max-w-xs flex-col gap-y-2 bg-blue-50 p-5 rounded-lg">
							<dt class="text-base leading-7 text-sky-950">Items Damaged</dt>
							<dd class="order-first text-3xl font-semibold tracking-tight text-sky-900 sm:text-5xl">
								413
							</dd>
						</div>
						<div class="mx-auto flex max-w-xs flex-col gap-y-2 bg-blue-50 p-5 rounded-lg">
							<dt class="text-base leading-7 text-sky-950">
								Student with Dues
							</dt>
							<dd class="order-first text-3xl font-semibold tracking-tight text-sky-900 sm:text-5xl">
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
		</div>
	);
};

export default DashboardHome;

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
		<div className="flex space-x-20">
			{/* Render two DoughnutCharts */}
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
	);
};

export default DashboardHome;

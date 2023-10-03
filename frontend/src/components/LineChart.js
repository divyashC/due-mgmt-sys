import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

const LineChart = ({ data, options }) => {
	const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		const documentStyle = getComputedStyle(document.documentElement);
		const textColor = documentStyle.getPropertyValue("--text-color");
		const textColorSecondary = documentStyle.getPropertyValue(
			"--text-color-secondary"
		);
		const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

		const chartData = {
			labels: data.labels || [],
			datasets: data.datasets || [],
		};

		const chartOptions = {
			maintainAspectRatio: false,
			aspectRatio: 0.6,
			plugins: {
				legend: {
					labels: {
						color: textColor,
					},
				},
			},
			scales: {
				x: {
					ticks: {
						color: textColorSecondary,
					},
					grid: {
						color: surfaceBorder,
					},
				},
				y: {
					ticks: {
						color: textColorSecondary,
					},
					grid: {
						color: surfaceBorder,
					},
				},
				...options.scales, // Merge with additional scale options
			},
			...options, // Merge with additional options
		};

		setChartData(chartData);
		setChartOptions(chartOptions);
	}, [data, options]);

	return (
		<div className="card">
			<Chart type="line" data={chartData} options={chartOptions} />
		</div>
	);
};

export default LineChart;

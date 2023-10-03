import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

const BarChart = ({ data, options }) => {
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
			aspectRatio: 0.8,
			plugins: {
				legend: {
					labels: {
						fontColor: textColor,
					},
				},
			},
			scales: {
				x: {
					ticks: {
						color: textColorSecondary,
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
						color: textColorSecondary,
					},
					grid: {
						color: surfaceBorder,
						drawBorder: false,
					},
				},
			},
			...options, // Merge with additional options
		};

		setChartData(chartData);
		setChartOptions(chartOptions);
	}, [data, options]);

	return (
		<div className="card">
			<Chart type="bar" data={chartData} options={chartOptions} />
		</div>
	);
};

export default BarChart;

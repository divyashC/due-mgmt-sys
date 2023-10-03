// DoughnutChart.js
import React from "react";
import { Chart } from "primereact/chart";

const DoughnutChart = ({ data, options, title }) => {
	return (
		<div className="flex flex-col items-center card justify-content-center">
			<h4 className="text-lg font-semibold text-sky-950">{title}</h4>
			<div>
				<Chart
					type="doughnut"
					data={data}
					options={options}
					className="w-full md:w-30rem"
				/>
			</div>
		</div>
	);
};

export default DoughnutChart;

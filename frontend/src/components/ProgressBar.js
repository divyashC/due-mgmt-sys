import React from "react";

const ProgressBar = ({ value, max }) => {
	return (
		<progress
			className="w-full progress progress-error"
			value={value}
			max={max}
		></progress>
	);
};

export default ProgressBar;

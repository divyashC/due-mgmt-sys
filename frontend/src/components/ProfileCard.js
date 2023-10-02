import React from "react";
import Avatar from "../assets/images/Avatar.png";

const ProfileCard = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center h-full p-4 space-y-4 bg-gray-200 w-min rounded-3xl">
				<img src={Avatar} className="w-32 h-32 rounded-full" />
				<p className="text-2xl font-semibold text-gray-950">John Doe</p>
				<div className="flex flex-col justify-center w-full h-full p-4 space-y-1 bg-gray-100 rounded-3xl">
					<p className="text-lg text-gray-700">02200174</p>
					<p className="text-lg text-gray-700">BE IT</p>
					<p className="text-lg text-gray-700">Year 4 - Sem VII</p>
					<p className="text-lg text-gray-700">17171717</p>
					<a
						className="text-lg text-gray-700"
						href="mailto:02200174.cst@rub.edu.bt"
					>
						02200174.cst@rub.edu.bt
					</a>
				</div>
			</div>
		</>
	);
};

export default ProfileCard;

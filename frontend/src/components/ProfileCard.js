import React from "react";
import Avatar from "../assets/images/Avatar.png";

const ProfileCard = () => {
	// Retrieve user data from local storage
	const userData = JSON.parse(localStorage.getItem("userDetails"));

	if (!userData) {
		// Handle the case when userData is not available in local storage
		return <div>No user data available</div>;
	}

	return (
		<div className="relative pt-24 mt-10 mb-10 ml-14">
			{/* Overlapping image */}
			<img
				src={Avatar}
				className="absolute w-40 rounded-full -top-4 -left-4"
				alt="User Avatar"
			/>
			<div className="flex flex-col items-center justify-center p-4 ml-8 space-y-4 bg-gray-200 h-fit w-min rounded-3xl">
				<p className="mt-8 text-2xl font-semibold text-gray-950">
					{userData.fullName}
				</p>
				<div className="flex flex-col justify-center w-full h-full p-4 space-y-1 bg-gray-100 rounded-3xl">
					{userData.userType === "Student" ? (
						<p className="text-lg text-gray-700">
							{userData.email.split("@")[0].split(".")[0]}
						</p>
					) : null}
					<p className="text-lg text-gray-700">{userData.department}</p>
					<p className="text-lg text-gray-700">{userData.role}</p>
					<p className="text-lg text-gray-700">{userData.phoneNo}</p>
					<a
						className="text-lg text-gray-700"
						href={`mailto:${userData.email}`}
					>
						{userData.email}
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;

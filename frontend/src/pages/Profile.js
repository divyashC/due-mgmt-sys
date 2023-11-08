import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard.js";
import Table from "../components/Table.js";
import StudentTable from "../components/StudentTable.js";
import AdministrationTable from "../components/AdministrationTable.js";

const Profile = () => {
	// const [isClearDuesModalOpen, setIsClearDuesModalOpen] = useState(false);
	// const [duesCleared, setDuesCleared] = useState(false); // New state variable

	const userDetails = JSON.parse(localStorage.getItem("userDetails"));
	const userType = userDetails ? userDetails.userType : null;

	const getLabName = () => userDetails.role.replace("Incharge", "").trim();

	return (
		<>
			<div className="flex mt-10">
				<div className="flex">
					<ProfileCard />
				</div>
				<div className="flex-1">
					{userType === "Student" && (
						<StudentTable
							stdNo={userDetails.email.split("@")[0].split(".")[0]}
						/>
					)}
					{userType === "Staff" && <Table labName={getLabName()} />}
					{userType === "Admin" && <AdministrationTable />}
				</div>
			</div>
		</>
	);
};

export default Profile;

import React from "react";
import ProfileCard from "../components/ProfileCard.js";
import Table from "../components/Table.js";
import SearchBar from "../components/SearchBar.js";
import AddBtn from "../components/AddBtn.js";
import StudentTable from "../components/StudentTable.js";
import AdministrationTable from "../components/AdministrationTable.js";

const Profile = () => {
	// Get the user type from local storage
	const userDetails = JSON.parse(localStorage.getItem("userDetails"));
	const userType = userDetails ? userDetails.userType : null;

	return (
		<>
			<div className="flex mt-10">
				<div className="flex">
					<ProfileCard />
				</div>
				<div className="flex-1">
					{userType === "Admin" && (
						<div className="flex items-center justify-center mt-8 mb-10">
							<SearchBar />
						</div>
					)}
					{userType === "Staff" && (
						<div className="flex justify-end mt-8 mr-12">
							<AddBtn />
						</div>
					)}
					{userType === "Student" && <StudentTable />}
					{userType === "Staff" && <Table />}
					{userType === "Admin" && <AdministrationTable />}
				</div>
			</div>
		</>
	);
};

export default Profile;

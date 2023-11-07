// import React from "react";
// import ProfileCard from "../components/ProfileCard.js";
// import Table from "../components/Table.js";
// import SearchBar from "../components/SearchBar.js";
// import AddBtn from "../components/AddBtn.js";

// const Profile = () => {
	

	
// 	// Get the user type from local storage
// 	const userDetails = JSON.parse(localStorage.getItem("userDetails"));
// 	const userType = userDetails ? userDetails.userType : null;

// 	return (
// 		<>
// 			<div className="relative pt-24 mt-10 mb-10 ml-14">
// 				<div className="flex">
// 					<ProfileCard />
// 				</div>
// 				<div className="flex-1">
// 					{userType === "Admin" && (
// 						<div className="flex items-center justify-center mt-8 mb-10">
// 							<SearchBar />
// 						</div>
// 					)}
// 					{userType === "Staff" && (
// 						<div className="flex justify-end mt-8 mr-12">
// 							<AddBtn />
// 						</div>
// 					)}
// 						<h1>Items </h1>
// 					<Table />
// 				</div>
// <br>
// </br>
// 				<div>
				
// 					<h1>Items Status</h1>
// 				<table className="w-full text-sm text-left text-gray-500">
// 					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
// 						<tr>
// 							<th scope="col" className="px-6 py-3">
// 								SL No.
// 							</th>
// 							<th scope="col" className="px-6 py-3">
// 								<div className="flex items-center">Items</div>
// 							</th>
// 							<th scope="col" className="px-6 py-3">
// 								<div className="flex items-center">Remarks</div>
// 							</th>
							
// 						</tr>
// 					</thead>
// 					<tbody>
// 						<tr className="bg-white border-b">
// 							<th
// 								scope="row"
// 								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
// 							>
// 								1
// 							</th>
// 							<td className="px-6 py-4">Bicker</td>
// 							<td className="px-6 py-4">
// 							<button id="clearButton"  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
//   Clear Dues
// </button>

// 							</td>
							

						
// 						</tr>

// 						<tr className="bg-white border-b">
// 							<th
// 								scope="row"
// 								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
// 							>
// 								2
// 							</th>
// 							<td className="px-6 py-4">Sonometer</td>
				
							
// 						</tr>
// 					</tbody>
// 				</table>
// 				</div>



// 			</div>
// 		</>
// 	);
// };

// export default Profile;
import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard.js";
import Table from "../components/Table.js";
import SearchBar from "../components/SearchBar.js";
import AddBtn from "../components/AddBtn.js";
import StudentTable from "../components/StudentTable.js";
import AdministrationTable from "../components/AdministrationTable.js";

const Profile = () => {
  const [isClearDuesModalOpen, setIsClearDuesModalOpen] = useState(false);
  const [duesCleared, setDuesCleared] = useState(false); // New state variable

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


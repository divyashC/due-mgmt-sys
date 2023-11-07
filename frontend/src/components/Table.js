import React, { useState, useEffect } from "react";
import ClearDuesModal from "./ClearDuesModal";
import StudentDetailsModal from "./StudentDetailsModal";
import AddBtn from "../components/AddBtn.js";
import RestoredCheckboxModal from "./RestoredCheckboxModal.js";

const Table = ({ labName }) => {
	const [duesData, setDuesData] = useState([]);
	const [restoredData, setRestoredData] = useState([]);
	const [isClearDuesModalOpen, setIsClearDuesModalOpen] = useState(false);
	const [isStudentDetailsModalOpen, setIsStudentDetailsModalOpen] =
		useState(false);
	const [isRestoredCheckboxModalOpen, setIsRestoredCheckboxModalOpen] =
		useState(false);
	const [selectedItemId, setSelectedItemId] = useState(null);
	const [isDueCleared, setIsDuesCleared] = useState(false);
	const [id, setId] = useState(null);
	const [selectedStudent, setSelectedStudent] = useState(null);
	const [isRestored, setIsRestored] = useState(false);

	useEffect(() => {
		Promise.all([
			fetch("http://localhost:8000/getDues").then((response) =>
				response.json()
			),
			fetch("http://localhost:8000/getAllRestoredItems").then((response) =>
				response.json()
			),
		])
			.then(([duesData, restoredData]) => {
				setDuesData(duesData);
				setRestoredData(restoredData);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, []);

	useEffect(() => {
		Promise.all([
			fetch("http://localhost:8000/getDues").then((response) =>
				response.json()
			),
			fetch("http://localhost:8000/getAllRestoredItems").then((response) =>
				response.json()
			),
		])
			.then(([duesData, restoredData]) => {
				setDuesData(duesData);
				setRestoredData(restoredData);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, []);

	const filteredRestoredData = restoredData
		.filter(
			(item) => item.status === "not-restored" && item.labName === labName
		)
		.reduce((unique, item) => {
			if (!unique.some((obj) => obj.itemName === item.itemName)) {
				unique.push({ ...item, isRestored: false }); // Ensure each item has an isRestored property
			} else {
				const existingItem = unique.find(
					(obj) => obj.itemName === item.itemName
				);
				existingItem.quantity += item.quantity;
				existingItem.isRestored = false; // Initialize the isRestored property
			}
			return unique;
		}, []);

	const clearDue = (id) => {
		if (id) {
			fetch(`http://localhost:8000/updateDues/${id}`, {
				method: "PUT",
			})
				.then((response) => {
					if (response.ok) {
						// Successfully cleared dues
						setIsDuesCleared(true);
						setId(null);
						fetch("http://localhost:8000/getDues")
							.then((response) => response.json())
							.then((data) => {
								setDuesData(data);
							})
							.catch((error) => {
								console.error("Error fetching data: ", error);
							});
					} else {
						console.error("Failed to clear dues");
					}
				})
				.catch((error) => {
					console.error("Error calling the API: ", error);
				});
		} else {
			console.error("Invalid id");
		}
	};

	const handleRestoredCheckboxClick = (id) => {
		setSelectedItemId(id); // Store the selected item ID
		setIsRestoredCheckboxModalOpen(true);
	};

	const onClearDues = () => {
		setIsClearDuesModalOpen(true);
	};

	const openClearDuesModal = (id) => {
		setId(id);
		setIsClearDuesModalOpen(true);
	};

	const closeClearDuesModal = () => {
		setIsClearDuesModalOpen(false);
	};

	const openStudentDetailsModal = (studentData) => {
		setSelectedStudent(studentData);
		setIsStudentDetailsModalOpen(true);
	};

	const closeStudentDetailsModal = () => {
		setIsStudentDetailsModalOpen(false);
	};

	const openRestoredCheckboxModal = (id) => {
		setIsRestoredCheckboxModalOpen(true);
	};

	const closeRestoredCheckboxModal = () => {
		setIsRestoredCheckboxModalOpen(false);
	};

	const handleRestoredConfirmation = (confirmed) => {
		if (confirmed) {
			setIsRestored(true); // Mark the item as restored
		} else {
			setIsRestored(false);
		}
		closeRestoredCheckboxModal();
	};
	return (
		<>
			<div className="flex justify-end mr-12">
				<AddBtn />
			</div>

			<div className="relative mx-12 mt-10 overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3">
								SL No.
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Student Name</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Student ID</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Dues</div>
							</th>
							<th>
								<button>Details</button>
							</th>
						</tr>
					</thead>
					<tbody>
						{duesData.map((item, index) => {
							if (item.labName === labName && item.dues === "unpaid") {
								const localIndex =
									duesData
										.filter(
											(items) =>
												items.labName === labName && items.dues === "unpaid"
										)
										.indexOf(item) + 1;
								return (
									<tr className="bg-white border-b" key={index}>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
										>
											{localIndex}
										</th>
										<td className="px-6 py-4">{item.name}</td>
										<td className="px-6 py-4">{item.stdNo}</td>
										<td className="px-6 py-4">Nu. {item.amount}</td>
										<td className="px-6 py-4">
											<div className="flex items-center space-x-2">
												<button
													onClick={() =>
														openStudentDetailsModal({
															name: item.name,
															stdNo: item.stdNo,
															phoneNumber: item.phoneNo,
															amount: `Nu. ${item.amount}`,
															date: item.date,
															remarks: item.remarks,
															department: item.dept,
															item: item.item,
															dues: item.dues,
														})
													}
													className={`bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 border border-green-500 rounded flex items-center`}
												>
													View Details
												</button>
												<button
													className={`bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 border border-red-500 rounded flex items-center`}
													onClick={() => {
														openClearDuesModal(item._id);
													}} // Wrap in an arrow function
												>
													Clear Dues
												</button>
											</div>
										</td>
									</tr>
								);
							}
						})}
					</tbody>
				</table>
			</div>

			<div className="relative mx-12 mt-10 overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3">
								SL No.
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Equipment Name</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Quantity</div>
							</th>

							<th>Remarks</th>
						</tr>
					</thead>
					<tbody>
						{filteredRestoredData.map((item, index) => (
							<tr className="bg-white border-b" key={index}>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
								>
									{index + 1}
								</th>
								<td className="px-6 py-4">{item.itemName}</td>
								<td className="px-6 py-4">
									{item.quantity > 1 ? item.quantity - 1 : item.quantity}
								</td>
								<td className="px-6 py-4">
									{item.isRestored ? (
										<div className="text-sm font-normal text-black">
											Item is restored
										</div>
									) : (
										<div className="flex items-center">
											<input
												id={`green-checkbox-${index}`}
												type="checkbox"
												value=""
												className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
												checked={item.isRestored} // Use the item's isRestored property
												onChange={() => handleRestoredCheckboxClick(item._id)}
											/>
											<label
												htmlFor={`green-checkbox-${index}`}
												className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
											>
												{item.isRestored ? "Restored" : "Not Restored"}{" "}
												{/* Display the correct label based on isRestored */}
											</label>
										</div>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<ClearDuesModal
				isOpen={isClearDuesModalOpen}
				onClose={closeClearDuesModal}
				onClear={() => clearDue(id)} // Wrap clearDue in an arrow function
				onCancel={closeClearDuesModal} // Pass the function reference
			/>

			<StudentDetailsModal
				isOpen={isStudentDetailsModalOpen}
				onClose={closeStudentDetailsModal}
				studentData={selectedStudent}
			/>

			<RestoredCheckboxModal
				isOpen={isRestoredCheckboxModalOpen}
				onClose={() => setIsRestoredCheckboxModalOpen(false)}
				onConfirm={(confirmed) => {
					if (confirmed) {
						// Make the PUT request to update the restored status
						fetch(`http://localhost:8000/updateRestored/${selectedItemId}`, {
							method: "PUT",
						})
							.then((response) => {
								if (response.ok) {
									fetch("http://localhost:8000/getAllRestoredItems")
										.then((response) => response.json())
										.then((data) => {
											setRestoredData(data);
										})
										.catch((error) => {
											console.error("Error fetching data: ", error);
										});
								} else {
									console.error("Failed to update restored status");
								}
							})
							.catch((error) => {
								console.error("Error calling the API: ", error);
							});
					}
					setIsRestoredCheckboxModalOpen(false);
				}}
			/>
		</>
	);
};

export default Table;

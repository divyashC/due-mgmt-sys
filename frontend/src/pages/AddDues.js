import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DueAddedModal from "../components/DueAddedModal";

const AddDues = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		phoneNo: "",
		stdNo: "",
		item: "",
		amount: "",
		date: "",
		remarks: "",
	});

	const [isModalOpen, setIsModalOpen] = useState(false);
	const userDetails = JSON.parse(localStorage.getItem("userDetails"));
	const labInchargeName = userDetails.fullName;
	const labName = userDetails.role.replace("Incharge", "").trim();
	const dept = userDetails.department;

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const dataToSend = {
			...formData,
			labInchargeName,
			labName,
			dept,
			dues: "unpaid",
		};
		dataToSend.date = dataToSend.date.split("-").reverse().join("/");

		const restoredData = {
			itemName: dataToSend.item,
			status: "not-restored",
			quantity: "1",
			date: "",
			damagedDate: dataToSend.date,
			labName: labName,
		};

		// Send a POST request to the server
		fetch("http://localhost:8000/insertDues", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(dataToSend),
		})
			.then((response) => {
				if (response.ok) {
					// Successfully added dues
					console.log("Dues added successfully");
					fetch("http://localhost:8000/insertRestoredItem", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(restoredData),
					})
						.then((response) => {
							if (response.ok) {
								// Successfully added dues
								console.log("Restored item added successfully");
							} else {
								console.error("Failed to add restored item");
							}
						})
						.catch((error) => {
							console.error("Error calling the API: ", error);
							console.error("Failed to add restored item:", error.message);
						});

					// Optionally, you can reset the form here
					setFormData({
						name: "",
						phoneNo: "",
						stdNo: "",
						item: "",
						amount: "",
						date: "",
						remarks: "",
					});

					setIsModalOpen(true);
					// navigate("/profile");
				} else {
					console.error("Failed to add dues");
				}
			})
			.catch((error) => {
				console.error("Error calling the API: ", error);
				console.error("Failed to add dues:", error.message);
			});
	};

	const closeModal = () => {
		// Close the modal and navigate
		setIsModalOpen(false);
		navigate("/profile");
	};

	return (
		<div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
					Add Dues
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" onSubmit={handleSubmit}>
					<div>
						<label className="block text-sm font-medium leading-6 text-gray-900">
							Name
						</label>
						<div className="mt-2">
							<input
								id="name"
								name="name"
								type="text"
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								onChange={handleInputChange}
							/>
						</div>
					</div>
					<div>
						<label className="block text-sm font-medium leading-6 text-gray-900">
							Phone Number
						</label>
						<div className="mt-2">
							<input
								id="phoneNo"
								name="phoneNo"
								type="Phone"
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								onChange={handleInputChange}
							/>
						</div>
					</div>
					<div>
						<label className="block text-sm font-medium leading-6 text-gray-900">
							Student ID
						</label>
						<div className="mt-2">
							<input
								id="stdNo"
								name="stdNo"
								type="Phone"
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								onChange={handleInputChange}
							/>
						</div>
					</div>

					<div>
						<label className="block text-sm font-medium leading-6 text-gray-900">
							Item
						</label>
						<div className="mt-2 ">
							<input
								id="item"
								name="item"
								type="text"
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
								onChange={handleInputChange}
							/>
						</div>
					</div>
					<div>
						<label className="block text-sm font-medium leading-6 text-gray-900">
							Amount
						</label>
						<div className="mt-2 ">
							<input
								id="amount"
								name="amount"
								type="number"
								placeholder="Nu. "
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
								onChange={handleInputChange}
							/>
						</div>
					</div>
					<div>
						<label className="block text-sm font-medium leading-6 text-gray-900">
							Date
						</label>
						<div className="mt-2 ">
							<input
								id="date"
								name="date"
								type="Date"
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
								onChange={handleInputChange}
							/>
						</div>
					</div>
					<div>
						<label className="block text-sm font-medium leading-6 text-gray-900">
							Remark
						</label>
						<div className="mt-2 ">
							<input
								id="remarks"
								name="remarks"
								type="TextArea"
								required
								className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
								onChange={handleInputChange}
							/>
						</div>
					</div>
					<div>
						<button
							type="submit"
							className="flex justify-center w-full px-3 py-2 text-sm font-semibold leading-6 text-white rounded-md shadow-sm bg-sky-950 hover:bg-white hover:text-sky-950 hover:ring-1 hover:ring-inset hover:ring-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Add
						</button>
					</div>
				</form>
			</div>
			<DueAddedModal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	);
};

export default AddDues;

import React, { useState } from "react";
import UserCreationSuccessModal from "./UserCreationSuccessModal";
import UserCreationErrorModal from "./UserCreationErrorModal";

const AddUsers = () => {
	const [file, setFile] = useState(null);
	const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

	const handleFileChange = (e) => {
		const selectedFile = e.target.files[0];
		setFile(selectedFile);
	};

	const handleUpload = () => {
		if (file) {
			const formData = new FormData();
			formData.append("file", file);

			fetch("http://localhost:8000/addUserfromCSV", {
				method: "POST",
				body: formData,
			})
				.then((response) => {
					if (response.ok) {
						// If the response is successful, open the success modal
						setIsSuccessModalOpen(true);
					} else {
						// If there's an error, open the error modal
						setIsErrorModalOpen(true);
					}
				})
				.catch((error) => {
					console.error("Error calling the API:", error);
					// Handle the error, e.g., display an error message
					setIsErrorModalOpen(true);
				});
		} else {
			// Handle the case when no file is selected
			console.error("No file selected");
		}
	};

	const closeSuccessModal = () => {
		// Close the success modal when the user clicks "OK"
		setIsSuccessModalOpen(false);
	};

	const closeErrorModal = () => {
		// Close the error modal when the user clicks "OK"
		setIsErrorModalOpen(false);
	};

	return (
		<div className="p-4">
			<div className="flex items-center justify-center border-2 border-gray-200 border-dashed rounded-lg p-9">
				<div className="flex items-center justify-center grid-cols-3 gap-4 mb-4">
					<div className="flex items-center justify-center h-24 rounded bg-gray-50">
						<div className="mb-3">
							<label
								htmlFor="formFileMultiple"
								className="inline-block mb-2 text-neutral-700"
							>
								Choose a CSV file:
							</label>
							<input
								type="file"
								id="formFileMultiple"
								name="file"
								onChange={handleFileChange}
							/>
						</div>
					</div>
					<div className="flex items-center justify-center h-24 rounded bg-gray-50">
						<button
							type="button"
							onClick={handleUpload}
							className="flex justify-center w-full px-3 py-2 text-sm font-semibold leading-6 text-white rounded-md shadow-sm bg-sky-950 hover:bg-white hover:text-sky-950 hover:ring-1 hover:ring-inset hover:ring-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Upload
						</button>
					</div>
				</div>
			</div>
			<UserCreationSuccessModal
				isOpen={isSuccessModalOpen}
				onClose={closeSuccessModal}
			/>
			<UserCreationErrorModal
				isOpen={isErrorModalOpen}
				onClose={closeErrorModal}
			/>
		</div>
	);
};

export default AddUsers;

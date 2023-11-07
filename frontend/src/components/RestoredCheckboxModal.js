import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const RestoredCheckboxModal = ({ isOpen, onClose, onConfirm }) => {
	if (!isOpen) {
		return null; // Don't render the modal if it's not open
	}

	const handleConfirm = () => {
		onConfirm(true); // Pass true to indicate confirmation
		onClose(); // Close the modal
	};

	const handleCancel = () => {
		onConfirm(false); // Pass false to indicate cancellation
		onClose(); // Close the modal
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
			<div className="relative w-auto max-w-3xl mx-auto my-6">
				<div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
					<div className="relative flex flex-row justify-center flex-auto p-6 align-middle">
						<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
							<ExclamationTriangleIcon
								className="w-6 h-6 text-red-600"
								aria-hidden="true"
							/>
						</div>
						<p className="mt-2 ml-5 text-gray-600">
							Are you sure you want to mark this item as restored?
						</p>
					</div>
					{/* Footer */}
					<div className="flex items-center justify-end p-3 border-t border-solid rounded-b border-blueGray-200">
						<button
							className="px-4 py-1 mb-1 mr-1 text-xs font-bold text-red-500 uppercase outline-none background-transparent focus:outline-none"
							type="button"
							style={{ transition: "all .15s ease" }}
							onClick={handleCancel}
						>
							Cancel
						</button>
						<button
							className="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-green-500 rounded shadow outline-none active:bg-green-600 hover:shadow-lg focus:outline-none"
							type="button"
							style={{ transition: "all .15s ease" }}
							onClick={handleConfirm}
						>
							Confirm
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RestoredCheckboxModal;

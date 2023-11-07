import React from "react";
import ClearDuesModal from './ClearDuesModal';
import AddBtn from "../components/AddBtn.js";

const Table = () => {
	const [isClearDuesModalOpen, setIsClearDuesModalOpen] = useState(false);
	const [isDuesCleared, setIsDuesCleared] = useState(false);
  
	const openClearDuesModal = () => {
	  setIsClearDuesModalOpen(true);
	};
  
	const closeClearDuesModal = () => {
	  setIsClearDuesModalOpen(false);
	};
  
	const onClearDues = () => {
	  // Perform the logic to clear dues here
  
	  // Set the state to indicate that dues are cleared
	  setIsDuesCleared(true);
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
							<button>View Details</button>
						</th>
						
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
							>
								1
							</th>
							<td className="px-6 py-4">Physics Lab</td>
							<td className="px-6 py-4">02200034</td>
							<td className="px-6 py-4">Nu.340</td>
					

						</tr>

						<tr className="bg-white border-b">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
							>
								2
							</th>
							<td className="px-6 py-4">Physics Lab</td>
							<td className="px-6 py-4">Sonam Thinley</td>
							<td className="px-6 py-4">Nu.340</td>
				

						
						</tr>
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
								<div className="flex items-center">Student Name</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Student ID</div>
							</th>
							<th scope="col" className="px-6 py-3">
								<div className="flex items-center">Dues</div>
							</th>
						
						<th>
							Action
						</th>
						
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
							>
								1
							</th>
							<td className="px-6 py-4">Physics Lab</td>
							<td className="px-6 py-4">02200034</td>
							<td className="px-6 py-4">Nu.340</td>
					<td>
					<button
        className={`bg-${isDuesCleared ? 'green' : 'red'}-500 hover:bg-${isDuesCleared ? 'green' : 'red'}-700 text-white font-semibold py-2 px-4 border border-${isDuesCleared ? 'green' : 'red'}-500 rounded flex items-center`}
        onClick={isDuesCleared ? closeClearDuesModal : openClearDuesModal}
      >
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        {isDuesCleared ? "Cleared" : "Clear Dues"}
      </button>

					</td>

						</tr>

						
					</tbody>
				</table>

				<ClearDuesModal
        isOpen={isClearDuesModalOpen}
        onClose={closeClearDuesModal}
        onClear={onClearDues}
        onCancel={closeClearDuesModal}
      />


				
			</div>
			
			
		</>
	);
};

export default Table;

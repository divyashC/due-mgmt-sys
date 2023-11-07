import React, { useState, useEffect } from "react";
import ClearDuesModal from "./ClearDuesModal";
import StudentDetailsModal from "./StudentDetailsModal";
import AddBtn from "../components/AddBtn.js";
import RestoredCheckboxModal from "./RestoredCheckboxModal.js";
const Table = () => {
  const [isClearDuesModalOpen, setIsClearDuesModalOpen] = useState(false);
  const [isStudentDetailsModalOpen, setIsStudentDetailsModalOpen] = useState(
    false
  );
  const [isDuesCleared, setIsDuesCleared] = useState(false);

  const onClearDues = () => {
    // Perform the logic to clear dues here

    // Set the state to indicate that dues are cleared
    setIsDuesCleared(true);
  }

  // State for student details modal
  const [selectedStudent, setSelectedStudent] = useState(null); // Store selected student data

  const openClearDuesModal = () => {
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

  // Sample student data for demonstration
  const studentData1 = {
    name: "Kiran Rai",
    stdNo: "12345",
    phoneNumber: "123-456-7890",
    amount: "$100",
    date: "2023-01-01",
    remarks: "Paid for the semester",
    department: "Physics",
    item: "Tuition Fee",
    dues: "$0",
  };

  // Sample student data for the second row
  const studentData2 = {
    name: "John Doe",
    stdNo: "67890",
    phoneNumber: "987-654-3210",
    amount: "$120",
    date: "2023-02-15",
    remarks: "Paid for the semester",
    department: "Mathematics",
    item: "Lab Fee",
    dues: "$10",
  };


  //checkbox
  const [isRestoredCheckboxModalOpen, setIsRestoredCheckboxModalOpen] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const openRestoredCheckboxModal = () => {
    setIsRestoredCheckboxModalOpen(true);
  };

  const closeRestoredCheckboxModal = () => {
    setIsRestoredCheckboxModalOpen(false);
  };

  // const handleRestoredConfirmation = (confirmed) => {
  //   if (confirmed) {
  //     setIsCheckboxChecked(true); // Check the checkbox if confirmed
  //   } else {
  //     setIsCheckboxChecked(false); // Uncheck the checkbox if canceled
  //   }
  //   closeRestoredCheckboxModal();
  // };
  const [isRestored, setIsRestored] = useState(false);

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
              <td className="px-6 py-4">
			  <td className="px-6 py-4">
  <div className="flex items-center space-x-2">
    <button
      onClick={() => openStudentDetailsModal(studentData1)}
      className={`bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 border border-green-500 rounded flex items-center`}
    >
      View Details
    </button>
    {!isDuesCleared ? (
      <button
        className={`bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 border border-red-500 rounded flex items-center`}
        onClick={openClearDuesModal}
      >
        Clear Dues
      </button>
    ) : (
      <div className="flex items-center">Due Cleared</div>
    )}
  </div>
</td>

</td>
            </tr>
            {/* Add a new row for the second student */}
        
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
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                1
              </th>
              <td className="px-6 py-4">Physics Lab</td>
              <td className="px-6 py-4">02200034</td>
              <td className="px-6 py-4">
    {isRestored ? (
      <div className="text-sm font-normal text-black">Item is restored</div>

    ) : (
      <div className="flex items-center">
        <input
          id="green-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          checked={isCheckboxChecked}
          onChange={openRestoredCheckboxModal}
        />
        <label
          htmlFor="green-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Restored
        </label>
      </div>
    )}
  </td>

        
            </tr>
</tbody>

        </table>
      </div>
      <ClearDuesModal
        isOpen={isClearDuesModalOpen}
        onClose={closeClearDuesModal}
        onClear={onClearDues}
        onCancel={closeClearDuesModal}
      />

      <StudentDetailsModal
        isOpen={isStudentDetailsModalOpen}
        onClose={closeStudentDetailsModal}
        studentData={selectedStudent}
      />
      <RestoredCheckboxModal
        isOpen={isRestoredCheckboxModalOpen}
        onClose={closeRestoredCheckboxModal}
        onConfirm={handleRestoredConfirmation}
      />
    </>
  );
};

export default Table;



import React from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

const StudentDetailsModal = ({ isOpen, onClose, studentData }) => {
  const cancelButtonRef = useRef(null);

  if (!isOpen || !studentData) {
    return null; // Don't render the modal if it's closed or there's no student data
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:w-full sm:max-w-lg">
              <div className="px-6 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-semibold leading-6 text-gray-900"
                    >
                      {studentData.name} Details
                    </Dialog.Title>
                    <div className="mt-5 space-y-2">
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold">Name:</span> {studentData.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold">Student No:</span> {studentData.stdNo}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold">Phone Number:</span> {studentData.phoneNumber}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold">Amount:</span> {studentData.amount}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold">Date:</span> {studentData.date}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold">Remarks:</span> {studentData.remarks}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold">Department:</span> {studentData.department}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold">Item:</span> {studentData.item}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold">Dues:</span> {studentData.dues}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  ref={cancelButtonRef}
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-md shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default StudentDetailsModal;

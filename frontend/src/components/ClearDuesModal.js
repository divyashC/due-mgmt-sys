import React from 'react';

const ClearDuesModal = ({ isOpen, onClose, onClear, onCancel }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-60" onClick={onClose}></div>
      <div className="z-10 p-4 bg-white rounded-lg shadow-lg">
        <p>Are you sure you want to clear the dues?</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClear}
            className="px-4 py-2 mr-2 text-white bg-green-500 rounded"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 text-white bg-red-500 rounded"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClearDuesModal;

// dataSummaryController.js
const mongoose = require("mongoose");
const Dues = require("../models/Due");
const RestoredItems = require("../models/Restored");

// Create a function to calculate the total amount collected
const calculateAmountCollected = async () => {
	try {
		const duesData = await Dues.find({});
		const totalAmountCollected = duesData.reduce((total, due) => {
			if (due.dues === "paid") {
				return total + due.amount;
			}
			return total;
		}, 0);

		return totalAmountCollected.toFixed(2);
	} catch (error) {
		console.error("Error calculating total amount collected: ", error);
		throw error;
	}
};

// Create a function to calculate the total amount due
const calculateAmountDue = async () => {
	try {
		const duesData = await Dues.find({ dues: "unpaid" });
		const totalAmountDue = duesData.reduce(
			(total, due) => total + due.amount,
			0
		);

		return totalAmountDue.toFixed(2);
	} catch (error) {
		console.error("Error calculating total amount due: ", error);
		throw error;
	}
};

// Create a function to calculate the total number of items damaged
const calculateItemsDamaged = async () => {
	try {
		const totalItemsDamaged = await RestoredItems.countDocuments();

		return totalItemsDamaged;
	} catch (error) {
		console.error("Error calculating total items damaged: ", error);
		throw error;
	}
};

// Create a function to calculate the number of students with dues
const calculateStudentsWithDues = async () => {
	try {
		const studentsWithDues = await Dues.countDocuments({ dues: "unpaid" });

		return studentsWithDues;
	} catch (error) {
		console.error("Error calculating students with dues: ", error);
		throw error;
	}
};

// Export the functions for use in your routes
module.exports = {
	calculateAmountCollected,
	calculateAmountDue,
	calculateItemsDamaged,
	calculateStudentsWithDues,
};

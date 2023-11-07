const Dues = require("../models/Due");

const updateDuesStatus = async (req, res) => {
	try {
		const { _id } = req.params; // Assuming you are passing the _id as a request parameter

		// Update the document in the database
		const updatedDues = await Dues.findByIdAndUpdate(
			_id,
			{ dues: "paid" },
			{ new: true } // To get the updated document
		);

		if (!updatedDues) {
			return res.status(404).json({ error: "Dues not found" });
		}

		return res.json(updatedDues);
	} catch (error) {
		console.error("Error updating dues status: ", error);
		return res.status(500).json({ error: "Internal server error" });
	}
};

module.exports = {
	updateDuesStatus,
};

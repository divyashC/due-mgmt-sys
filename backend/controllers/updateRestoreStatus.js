const Restored = require("../models/Restored");

const updateRestoredStatus = async (req, res) => {
	try {
		const { _id } = req.params; // Assuming you are passing the _id as a request parameter
		const todayDate = new Date();
		const today =
			String(todayDate.getDate()).padStart(2, "0") +
			"/" +
			String(todayDate.getMonth() + 1).padStart(2, "0") +
			"/" +
			todayDate.getFullYear();

		// Update the document in the database
		const updatedRestored = await Restored.findByIdAndUpdate(
			_id,
			{ status: "restored" },
			{ date: today },
			{ new: true } // To get the updated document
		);

		if (!updatedRestored) {
			return res.status(404).json({ error: "Restored item not found" });
		}

		return res.json(updatedRestored);
	} catch (error) {
		console.error("Error updating restored status: ", error);
		return res.status(500).json({ error: "Internal server error" });
	}
};

module.exports = {
	updateRestoredStatus,
};

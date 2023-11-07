const Restored = require("../models/Restored");

// Function to insert a new restored item
exports.insertRestoredItem = async (req, res) => {
	try {
		// Extract restored item data from the request body
		const { itemName, status, quantity } = req.body;

		// Create a new restored item
		const newRestoredItem = new Restored({
			itemName,
			status,
			quantity,
		});

		// Save the new restored item to the database
		await newRestoredItem.save();

		// Respond with a success message or restored item data as needed
		res.status(201).json({ message: "Restored item created successfully" });
	} catch (error) {
		// Handle errors, e.g., validation errors, etc.
		res.status(400).json({ error: "Failed to create restored item" });
	}
};

// Function to get all restored items
exports.getAllRestoredItems = async (req, res) => {
	try {
		const restoredItems = await Restored.find();

		res.status(200).json(restoredItems);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

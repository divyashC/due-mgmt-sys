const mongoose = require("mongoose");
const Restored = require("../models/Restored"); // Import your Restored model

const restoredData = [
	{
		itemName: "Beaker 100ml",
		status: "restored",
		quantity: 1,
	},
	{
		itemName: "Voltmeter 100V",
		status: "not-restored",
		quantity: 1,
	},
	{
		itemName: "Dell Keyboard",
		status: "restored",
		quantity: 1,
	},
];

// Connect to MongoDB (same as in your server.js)
mongoose.connect(
	"mongodb+srv://divyashc:DMS-2023@duemanagementsystem.d4irase.mongodb.net/?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

// Function to create and save restored data
const createAndSaveRestored = async () => {
	try {
		// Create and save each restored item
		const savedRestoredItems = await Promise.all(
			restoredData.map(async (restoredItem) => {
				const newRestored = new Restored(restoredItem);
				return newRestored.save();
			})
		);
		console.log("Restored items created and saved:", savedRestoredItems);
	} catch (error) {
		console.error("Error creating restored items:", error);
	} finally {
		mongoose.connection.close(); // Close the database connection
	}
};

// Call the function to create and save restored items
createAndSaveRestored();
const mongoose = require("mongoose");
const Due = require("../models/Due"); // Import your Due model

const dueData = [
	{
		name: "Divyash Chhetri",
		stdNo: "02200174",
		phoneNo: "17358766",
		amount: 80.0,
		date: "15/09/2023",
		remarks: "First semester dues, broke a beaker",
		labInchargeName: "Gyembo Dorji",
		labName: "Chemistry Lab",
		dept: "Science & Humanities Department",
		item: "Beaker 100ml",
		dues: "unpaid",
	},
	{
		name: "Kiran Rai",
		stdNo: "02200155",
		phoneNo: "17640475",
		amount: 100.0,
		date: "10/09/2023",
		remarks: "Lab equipment dues",
		labInchargeName: "Karma Chophel",
		labName: "Physics Lab",
		dept: "Science & Humanities Department",
		item: "Voltmeter 100V",
		dues: "paid",
	},
	{
		name: "Thinley Choden",
		stdNo: "02200169",
		phoneNo: "17339683",
		amount: 2000,
		date: "05/09/2023",
		remarks: "NLP Lab dues - Keyboard",
		labInchargeName: "Wangchuk Singye",
		labName: "NLP Lab",
		item: "Dell Keyboard",
		dept: "IT Department",
		dues: "unpaid",
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

// Function to create and save due data
const createAndSaveDues = async () => {
	try {
		// Create and save each due record
		const savedDues = await Promise.all(
			dueData.map(async (due) => {
				const newDue = new Due(due);
				return newDue.save();
			})
		);
		console.log("Dues created and saved:", savedDues);
	} catch (error) {
		console.error("Error creating dues:", error);
	} finally {
		mongoose.connection.close(); // Close the database connection
	}
};

// Call the function to create and save dues
createAndSaveDues();

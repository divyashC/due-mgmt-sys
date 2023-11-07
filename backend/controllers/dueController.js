const Due = require("../models/Due");

// Function to insert a new due
exports.insertDue = async (req, res) => {
	try {
		// Extract due data from the request body
		const {
			name,
			stdNo,
			phoneNo,
			amount,
			date,
			remarks,
			labInchargeName,
			labName,
			dept,
			dues,
		} = req.body;

		// Create a new due
		const newDue = new Due({
			name,
			stdNo,
			phoneNo,
			amount,
			date,
			remarks,
			labInchargeName,
			labName,
			dept,
			dues,
		});

		// Save the new due to the database
		await newDue.save();

		// Respond with a success message or due data as needed
		res.status(201).json({ message: "Due created successfully" });
	} catch (error) {
		// Handle errors, e.g., validation errors, etc.
		res.status(400).json({ error: "Failed to create due" });
	}
};

// Function to get all dues
exports.getAllDues = async (req, res) => {
	try {
		const dues = await Due.find();

		res.status(200).json(dues);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

// get dues for specific student, by student number
exports.getDueByStudentNo = async (req, res) => {
	try {
		const dues = await Due.find({ stdNo: req.params.stdNo });

		res.status(200).json(dues);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

//show samople request
// https://localhost:8000/getDueByStudentNo/02200174

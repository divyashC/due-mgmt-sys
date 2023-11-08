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
			item,
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
			item,
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

// const nodemailer = require("nodemailer");

// exports.insertDue = async (req, res) => {
// 	try {
// 		// Extract due data from the request body
// 		const {
// 			name,
// 			stdNo,
// 			phoneNo,
// 			amount,
// 			item,
// 			date,
// 			remarks,
// 			labInchargeName,
// 			labName,
// 			dept,
// 			dues,
// 		} = req.body;

// 		// Create a new due
// 		const newDue = new Due({
// 			name,
// 			stdNo,
// 			phoneNo,
// 			amount,
// 			date,
// 			remarks,
// 			labInchargeName,
// 			labName,
// 			dept,
// 			item,
// 			dues,
// 		});

// 		// Save the new due to the database
// 		await newDue.save();

// 		// Send an email to the student
// 		const transporter = nodemailer.createTransport({
// 			host: "mail.rub.edu.bt", // Use your university's SMTP server
// 			port: 25,
// 			auth: {
// 				user: "02200271.cst@rub.edu.bt",
// 				pass: "Divyash@CST2020",
// 			},
// 		});

// 		const mailOptions = {
// 			from: "02200174.cst@rub.edu.bt",
// 			to: `${stdNo}.cst@rub.edu.bt`,
// 			subject: "Due Details",
// 			text: `Due details:
//       Name: ${name}
//       Student Number: ${stdNo}
//       Phone Number: ${phoneNo}
//       Amount: ${amount}
//       Date: ${date}
//       Remarks: ${remarks}
//       Lab Incharge Name: ${labInchargeName}
//       Lab Name: ${labName}
//       Department: ${dept}
//       Item: ${item}
//       Dues: ${dues}
//       `,
// 		};

// 		transporter.sendMail(mailOptions, (error, info) => {
// 			if (error) {
// 				console.error("Error sending email:", error);
// 				res.status(500).json({ error: "Failed to send email" });
// 			} else {
// 				console.log("Email sent:", info.response);
// 				res.status(201).json({ message: "Due created successfully" });
// 			}
// 		});
// 	} catch (error) {
// 		// Handle errors, e.g., validation errors, etc.
// 		res.status(400).json({ error: "Failed to create due" });
// 	}
// };

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

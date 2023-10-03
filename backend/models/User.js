// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phoneNo: String,
	department: String,
	userType: {
		type: String,
		enum: ["Student", "Staff", "Admin", "Manager", "ICT"],
		required: true,
	},
	role: String, // You can specify more details about the role
	password: {
		type: String,
		required: true,
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;

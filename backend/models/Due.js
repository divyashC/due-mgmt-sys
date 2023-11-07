// /models.Due.js

const mongoose = require("mongoose");

const dueSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	stdNo: String,
	phoneNo: String,
	amount: {
		type: Number,
		required: true,
	},
	date: {
		type: String, // You can use a Date type and store it as a Date object if required
		required: true,
	},
	remarks: String,
	labInchargeName: String,
	labName: String,
	dept: String,
	item: String,
	dues: {
		type: String,
		enum: ["paid", "unpaid"],
		required: true,
	},
});

const Due = mongoose.model("Due", dueSchema);

module.exports = Due;

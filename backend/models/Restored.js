const mongoose = require("mongoose");

const restoredSchema = new mongoose.Schema({
	itemName: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		enum: ["restored", "not-restored"],
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	date: {
		type: String,
		required: false,
	},
	damagedDate: {
		type: String,
		required: true,
	},
	labName: {
		type: String,
		required: true,
	},
});

const Restored = mongoose.model("Restored", restoredSchema);

module.exports = Restored;

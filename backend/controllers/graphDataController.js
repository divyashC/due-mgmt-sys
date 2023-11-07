// graphDataController.js
const Dues = require("../models/Due"); // Import your Due model here

// Function to fetch lab names
const getLabNames = async (req, res) => {
	try {
		const duesData = await Dues.find();
		const uniqueLabNames = [...new Set(duesData.map((item) => item.labName))];
		res.json(uniqueLabNames);
	} catch (error) {
		console.error("Error fetching lab names: ", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

// Function to fetch lab amounts
const getLabAmount = async (req, res) => {
	try {
		const labName = req.params.labName;
		const duesData = await Dues.find({ labName, dues: "paid" });
		const totalAmount = duesData.reduce(
			(total, item) => total + item.amount,
			0
		);
		res.json(totalAmount);
	} catch (error) {
		console.error("Error fetching lab amount: ", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

// Function to fetch lab items damaged
const getLabItemsDamaged = async (req, res) => {
	try {
		const labName = req.params.labName;
		const duesData = await Dues.find({ labName });
		res.json(duesData.length);
	} catch (error) {
		console.error("Error fetching lab items damaged: ", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

// Function to fetch amount collected per month
const getAmountCollectedPerMonth = async (req, res) => {
	try {
		const duesData = await Dues.find({ dues: "paid" }); // Fetch only paid dues data
		const months = Array.from({ length: 12 }, (_, i) =>
			(i + 1).toString().padStart(2, "0")
		);

		const amountCollectedPerMonth = months.map((month) => {
			const itemsInMonth = duesData.filter((item) => {
				const itemDate = item.date.split("/");
				return itemDate[1] === month;
			});

			const totalAmount = itemsInMonth.reduce(
				(sum, item) => sum + item.amount,
				0
			);
			return totalAmount.toFixed(2);
		});

		res.json(amountCollectedPerMonth);
	} catch (error) {
		console.error("Error fetching amount collected per month: ", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

// Function to fetch items damaged per month
const getItemsDamagedPerMonth = async (req, res) => {
	try {
		const duesData = await Dues.find(); // Fetch all dues data

		const months = Array.from({ length: 12 }, (_, i) =>
			(i + 1).toString().padStart(2, "0")
		);

		const itemsDamagedPerMonth = months.map((month) => {
			const itemsInMonth = duesData.filter((item) => {
				const itemDate = item.date.split("/");
				return itemDate[1] === month;
			});

			return itemsInMonth.length;
		});

		res.json(itemsDamagedPerMonth);
	} catch (error) {
		console.error("Error fetching items damaged per month: ", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

module.exports = {
	getLabNames,
	getLabAmount,
	getLabItemsDamaged,
	getAmountCollectedPerMonth,
	getItemsDamagedPerMonth,
};

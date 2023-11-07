// graphDataController.js
const Dues = require("../models/Due");
const Restored = require("../models/Restored");

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

// Function to fetch amount due per month
const getAmountDuePerMonth = async (req, res) => {
	try {
		const duesData = await Dues.find({ dues: "unpaid" }); // Fetch only paid dues data
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
		console.error("Error fetching amount due per month: ", error);
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

// Function to fetch all lab amounts
const getAllLabAmount = async (req, res) => {
	try {
		const labNames = await Dues.distinct("labName");
		const labAmounts = {};

		for (const labName of labNames) {
			const duesData = await Dues.find({ labName, dues: "paid" });
			const totalAmount = duesData.reduce(
				(total, item) => total + item.amount,
				0
			);
			labAmounts[labName] = totalAmount;
		}

		res.json(labAmounts);
	} catch (error) {
		console.error("Error fetching all lab amounts: ", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

// Function to fetch all lab due amounts
const getAllLabDues = async (req, res) => {
	try {
		const labNames = await Dues.distinct("labName");
		const labAmounts = {};

		for (const labName of labNames) {
			const duesData = await Dues.find({ labName, dues: "unpaid" });
			const totalAmount = duesData.reduce(
				(total, item) => total + item.amount,
				0
			);
			labAmounts[labName] = totalAmount;
		}

		res.json(labAmounts);
	} catch (error) {
		console.error("Error fetching all lab amounts: ", error);
		res.status(500).json({ error: "Internal server error" });
	}
};
// Function to fetch all lab items damaged
const getAllLabItemsDamaged = async (req, res) => {
	try {
		const labNames = await Dues.distinct("labName");
		const labItemsDamaged = {};

		for (const labName of labNames) {
			const duesData = await Dues.find({ labName });
			labItemsDamaged[labName] = duesData.length;
		}

		res.json(labItemsDamaged);
	} catch (error) {
		console.error("Error fetching all lab items damaged: ", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

// Function to fetch items restored per month
const getItemsRestoredPerMonth = async (req, res) => {
	try {
		const restoredData = await Restored.find();

		const months = Array.from({ length: 12 }, (_, i) =>
			(i + 1).toString().padStart(2, "0")
		);

		const itemsRestoredPerMonth = months.map((month) => {
			const itemsInMonth = restoredData.filter((item) => {
				if (item.status === "restored" && item.date.includes(`/${month}/`)) {
					return true;
				}
				return false;
			});

			return itemsInMonth.length;
		});

		res.json(itemsRestoredPerMonth);
	} catch (error) {
		console.error("Error fetching items restored per month: ", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

// Function to get pending dues in each lab
const getDueAmountInLab = async (req, res) => {
	try {
		const dueData = await Dues.find(); // Fetch all dues data

		const uniqueLabNames = [...new Set(dueData.map((item) => item.labName))];
		const duesPerLab = {};

		// Calculate pending dues for each lab
		uniqueLabNames.forEach((labName) => {
			const pendingDues = dueData
				.filter((item) => item.labName === labName && item.dues === "unpaid")
				.reduce((total, item) => total + item.amount, 0);

			duesPerLab[labName] = pendingDues;
		});

		res.json(duesPerLab);
	} catch (error) {
		console.error("Error fetching dues per lab: ", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

module.exports = {
	getLabNames,
	getLabAmount,
	getLabItemsDamaged,
	getAmountCollectedPerMonth,
	getAmountDuePerMonth,
	getItemsDamagedPerMonth,
	getAllLabAmount,
	getAllLabItemsDamaged,
	getItemsRestoredPerMonth,
	getDueAmountInLab,
	getAllLabDues,
};
